"use client"

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import api from '@/utils/api/main';

import styles from '@style/reviews.module.scss';

interface Review {
    block_id: string;
    created_at: string;
    block_name: string;
    text_blocks: TextBlock[];
    buttons: ButtonLink[];
}

interface TextBlock {
    value_ru: string;
    text_type: TextType;
}

interface TextType {
    name: string;
}

interface ButtonLink {
    link: string;
    name: string;
    target: string;
}

export default function Reviews() {
    const { getReviews } = api();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await getReviews();
                data.push(data[0])
                data.push(data[0])
                data.push(data[0])
                data.push(data[0])
                data.push(data[0])
                setReviews(data)
            } catch (error) {
                console.error('Failed to load reviews:', error)
            }
        }

        fetchData();
    }, [])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const renderStars = (rating: string) => {
        const numStars = parseInt(rating) || 0;
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span className={i <= numStars ? `icon-star-full` : 'icon-star-empty'} key={i}/>
            );
        };

        return stars;
    }

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2.5}
            className={styles.swiper}
        >
            {
                reviews.map((review, index) => {
                    const title = review.block_name;
                    const data = formatDate(review.created_at);
                    const stars = review.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'valuation')?.value_ru;
                    const description = review.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'description')?.value_ru;

                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.review}>
                                <div className={styles.content}>
                                    <div className={styles.stars}>
                                        { stars && renderStars(stars) }
                                    </div>
                                    <div className={styles.texts}>
                                        <h4>{title}</h4>
                                        <div className={styles.data}>{data} г.</div>
                                    </div>
                                </div>

                                <div className={styles.description}>{description}</div>

                                <Link href={review?.buttons?.[0]?.link} target={review?.buttons?.[0]?.target}>{review?.buttons?.[0]?.name}</Link>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}