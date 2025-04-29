"use client"

import React, { useState, useEffect, useRef  } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import api from '@utils/api/main';

import 'swiper/css';
import 'swiper/css/autoplay';
import styles from '@style/About/team.module.scss';
import ButtonSwiper from '@/ui/ButtonSwiper';

interface TeamMember {
    block_id: string
    block_name: string
    text_blocks: {
      text_type: { name: string }
      value_ru: string
    }[]
    block_media: { media: string }[]
  }
  
interface MediaData {
    file_url: string
}

export default function Team() {
    const { getTeam, getImage } = api();
    const [team, setTeam] = useState<{
        member: TeamMember
        imageUrl: string
    }[]>([]);
    const swiperRef = useRef<SwiperRef>(null)

    useEffect(() => {
        const loadTeamData = async () => {
          try {
            const members: TeamMember[] = await getTeam()
            
            const teamWithImages = await Promise.all(
              members.map(async (member: TeamMember) => {
                let imageUrl = '/default-avatar.webp'
                if (member.block_media?.[0]?.media) {
                  try {
                    const mediaData: MediaData = await getImage(member.block_media[0].media)
                    imageUrl = mediaData.file_url
                  } catch (e) {
                    console.error(`Failed to load image for ${member.block_name}`, e)
                  }
                }
                return { member, imageUrl }
              })
            )
            
            setTeam(teamWithImages)
          } catch (error) {
            console.error('Failed to load team:', error)
          }
        }
    
        loadTeamData()
      }, [])

    return (
        <div className={styles.team}>
            <ButtonSwiper 
                classBtn="swiper-button-prev"
                rotate={true}
                onClick={() => swiperRef.current?.swiper.slideNext()}
            />

            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={33}
                slidesPerView={4}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className={styles.swiper}
            >
                {
                    team.map((personal, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={styles.personal}>
                                    <div className={styles.img}>
                                        <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${personal.imageUrl}`} alt="personal" />
                                    </div>
                                    <div className={styles.title}>{personal.member.block_name}</div>
                                    <div className={styles.text}>{personal.member.text_blocks.find((t: { text_type: { name: string } }) => t.text_type.name === 'description')?.value_ru || ''}</div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <ButtonSwiper 
                classBtn="swiper-button-next"
                rotate={false}
                onClick={() => swiperRef.current?.swiper.slideNext()}
            />
        </div>
    )
}