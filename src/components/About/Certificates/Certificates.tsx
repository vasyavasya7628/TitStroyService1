"use client"

import React, { useState, useEffect, useRef  } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import ButtonSwiper from '@/ui/ButtonSwiper';

import api from '@/utils/api/main';

import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from '@style/About/certificates.module.scss';


interface BlockMedia {
    media: string;
    order: number;
}

interface CertificateBlock {
    block_media: BlockMedia[];
    // другие поля блока, если они используются
}

export default function Certificates() {
    const {getCertificates, getImage} = api();
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const swiperRef = useRef<SwiperRef>(null);
    const [activeBullet, setActiveBullet] = useState(0);

    useEffect(() => {
        const loadImages = async () => {
          const data = await getCertificates();
          const images = await Promise.all(
            data.flatMap((block: CertificateBlock) => 
              block.block_media.map(async (media: BlockMedia) => {
                const imageData = await getImage(media.media);
                return imageData.file_url;
              })
          ));
          setImageUrls(images);
        };

        loadImages();
    }, []);

    // Количество групп по 4 слайда
    const groupCount = Math.ceil(imageUrls.length / 4);

    // Обработчик перехода к конкретной группе
    const goToGroup = (groupIndex: number) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(groupIndex * 4);
        }
    };

    // Обновляем активную точку при изменении слайда
    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current.swiper;
            swiper.on('slideChange', () => {
                const realIndex = swiper.realIndex; // Получаем реальный индекс с учетом loop
                setActiveBullet(Math.floor(realIndex / 1) % groupCount);
            });
        }
    }, [groupCount]);

    return (
        <div className={styles.certificates}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={13}
                slidesPerView={4}
                loop={true}
                navigation={{
                    nextEl: '.swiper-certificate-button-next',
                    prevEl: '.swiper-certificate-button-prev',
                }}
                className={styles.swiper}
            >
                {
                    
                    imageUrls.map((url, index) => {
                        return (
                            <SwiperSlide className={styles.certificate}>
                                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`} alt="certificate" />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className={styles.management}>
                <ButtonSwiper
                    classBtn="swiper-certificate-button-prev"
                    rotate={true}
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                />
                {/* Кастомная пагинация */}
                <div className={styles.pagination}>
                    {Array.from({length: groupCount}).map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.bullet} ${activeBullet === index ? styles.active : ''}`}
                            onClick={() => goToGroup(index)}
                        />
                    ))}
                </div>
                <ButtonSwiper 
                    classBtn="swiper-certificate-button-next"
                    rotate={false}
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                />
            </div>
        </div>
    )
}