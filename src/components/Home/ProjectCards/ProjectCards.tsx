'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@style/Home/swiperProjects.module.scss';

interface ProjectCard {
    id: string;
    img: string;
    title: string;
    day: number;
    square?: number;
    cost?: number;
}

export default function ProjectCards() {
    const [projects, setProjects] = useState<ProjectCard[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await fetch('/json/projects.json');
            if (!response.ok) {
              throw new Error('Не удалось загрузить данные');
            }
            const data = await response.json();
            setProjects(data);
          } catch (err) {
            console.error('Ошибка загрузки данных:', err);
          } finally {
            setLoading(false);
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
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className={styles.item}>
                        <div className={styles.img}>
                            <img src="/img/work.png" alt={project.id} />
                        </div>

                        <h3>{project.title}</h3>

                        <div className={styles.days}>
                            <div className={styles.days_text}>Срок работ</div>
                            <div className={styles.days_meaning}>{project.day} дней</div>
                        </div>
                        
                        {project.cost && (
                            <div className={styles.content}>
                                <div className={styles.content_text}>Стоимость</div>
                                <div className={styles.content_meaning}>{project.cost} руб / кв.м</div>
                            </div>
                        )}

                        {project.square && (
                            <div className={styles.content}>
                                <div className={styles.content_text}>Площадь</div>
                                <div className={styles.content_meaning}>{project.square} кв.м</div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
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