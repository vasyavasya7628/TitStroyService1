'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@style/Home/swiperProjects.module.scss';
import api from '@/utils/api/main';

interface ProjectCard {
    block_media: any;
    block_id: string;
    block_name: string;
    text_blocks: TextBlock[];
}

interface TextBlock {
    block: string;
    text_type: TextType;
    value_ru: string;
}

interface TextType {
    name: string;
}

interface MediaData {
    file_url: string
}

export default function ProjectCards() {
    const { getProjects, getImage } = api();
    const [projects, setProjects] = useState<{
        content: ProjectCard,
        imageUrl: string
    }[]>([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects: ProjectCard[] = await getProjects()

                const projectWithImage = await Promise.all(
                  projects.map(async (project: ProjectCard) => {
                    let imageUrl = '/default-avatar.webp'
                    if (project.block_media?.[0]?.media) {
                        try {
                            const mediaData: MediaData = await getImage(project.block_media[0].media)
                            imageUrl = mediaData.file_url
                        } catch (e) {
                            console.error(`Failed to load image for ${project.block_name}`, e)
                        }
                    }
                    return { content: project, imageUrl }
                  })  
                );

                setProjects(projectWithImage);
            } catch (error) {
                console.error("Ошибка загрузки проектов:", error);
            }
        };
    
        fetchProjects();
    }, []);

    return (
        <>
        <div className={styles.slider_content}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={11}
                slidesPerView={4}
                navigation={{
                    nextEl: `.${styles.nextButton}`,
                    prevEl: `.${styles.prevButton}`,
                }}
                loop={projects.length > 1}
                className={styles.slider}
            >
                {projects.map((project, index) => {
                    const title = project.content.block_name;
                    const period = project.content.text_blocks.find((td: TextBlock) => td.text_type.name === "Period")?.value_ru;
                    const price = project.content.text_blocks.find((td: TextBlock) => td.text_type.name === "price")?.value_ru;

                    return (
                        <SwiperSlide key={index} className={styles.item}>
                            <div className={styles.img}>
                                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${project.imageUrl}`} alt={project.content.block_id} />
                            </div>

                            <h3>{title}</h3>

                            <div className={styles.days}>
                                <div className={styles.days_text}>Срок работ</div>
                                <div className={styles.days_meaning}>{period}</div>
                            </div>
                            
                            {price && (
                                <div className={styles.content}>
                                    <div className={styles.content_text}>Стоимость</div>
                                    <div className={styles.content_meaning}>{price}</div>
                                </div>
                            )}
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>

            <div className={`${styles.navButton} ${styles.prevButton}`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="rgba(46, 59, 65, 1)" strokeWidth="2"/>
                </svg>
            </div>
            <div className={`${styles.navButton} ${styles.nextButton}`}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="rgba(46, 59, 65, 1)" strokeWidth="2"/>
                </svg>
            </div>
        </div>
        {/* Flex-контейнер для мобильных устройств */}
      <div className={styles.slider_mobile}>
        {projects.slice(0, 3).map((project, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.img}>
              <img src="/img/work.png" alt={project.id} />
            </div>
            <h3>{project.title}</h3>
            <span className={styles.first_line}></span>
            <span className={styles.second_line}></span>
            <span className={styles.third_line}></span>
            <div className={styles.actions}>
              <span className={styles.actionLink}>
                {project.day && (
                  <div className={styles.detailItem}>
                    <div className={styles.days_legth}>Срок работ</div>
                    <div className={styles.days_num}>{project.day} дней</div>
                  </div>
                )}
              </span>
              <div className={styles.divider}></div>
              <span className={styles.actionLink}>
                {project.square && (
                  <div className={styles.detailItem}>
                    <div className={styles.square}>Площадь</div>
                    <div className={styles.square_size}>
                      {project.square} кв.м
                    </div>
                  </div>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
        </>
    )
}