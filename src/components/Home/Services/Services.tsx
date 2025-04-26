'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '@style/Home/services.module.scss';

export default function Services() {
    interface Item {
        id: string;
        img: string;
        title: string;
        price: number;
    }
    
    interface Data {
        Physical: Item[];
        Legal: Item[];
    }

    const [data, setData] = useState<Data | null>(null);
    const [activeTab, setActiveTab] = useState<'Physical' | 'Legal'>('Physical');

    useEffect(() => {
        fetch('/json/services.json') // JSON файл должен быть в папке public с именем data.json
        .then(res => res.json())
        .then(setData);
    }, []);

    if (!data) return <div>Загрузка...</div>;

    const items = data[activeTab];

    return (
        <div className={styles.services}>
            <div className={styles.btns}>
                <button className={activeTab === 'Physical' ? styles.active : ''} onClick={() => setActiveTab('Physical')}>
                    <span>Физические лица</span><span className={styles.mobile_span}>Физ. лицам</span>
                </button>
                <button className={activeTab === 'Legal' ? styles.active : ''} onClick={() => setActiveTab('Legal')}>
                <span>Юридические лица</span><span className={styles.mobile_span}>Юр. лицам</span>
                </button>
            </div>

            <div className={styles.items}>
                {
                    items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.item}
                        >
                            <div className={styles.content}>
                                <img src="https://www.figma.com/file/zYjVyJfNq8PXjbYPxiwVbd/image/d83f92da2ac15f952139b13667b345e112a709f9" alt={item.title} />
                                <div>{item.title}</div>
                            </div>

                            <div className={styles.price}>от {item.price} руб / кв.м</div>
                            <Link href="/services" className={styles.link}>Заказать</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}