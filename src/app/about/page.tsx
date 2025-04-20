'use client';

import UrlLinks from '@/ui/UrlLinks';
import styles from '@style/about.module.scss';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <div className={styles.hero}>
                <div className="container">
                    <div className={styles.hero_container}>
                        <UrlLinks />

                        <h1>ООО «ТитСтройСервис» – ведущий подрядчик по строительству и ремонту в Беларуси</h1>
                        <div className={styles.text}>Наша компания успешно завершила свыше 150 проектов, включая тендерные, что подтверждает нашу надежность. Более 98% объектов переданы заказчикам в срок</div>

                        <Link href="/services">
                            <span>Подробнее об услугах</span>
                            <span className={`${styles.icon} .icon-arrow-up`} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}