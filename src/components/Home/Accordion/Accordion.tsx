'use client';

import React, { useEffect, useState } from 'react';

import styles from '@style/Home/accordion.module.scss';

interface AccordionItem {
    title: string;
    text: string;
}

export default function Accordion() {
    const [allItems, setAllItems] = useState<AccordionItem[]>([]);
    const [displayedItems, setDisplayedItems] = useState<AccordionItem[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [loadedCount, setLoadedCount] = useState(0);
    const itemsPerLoad = 8;
    const initialLoadCount = 8;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/json/accordion.json');
                const data = await response.json();
                setAllItems(data);
                // Первоначальная загрузка
                setDisplayedItems(data.slice(0, initialLoadCount));
                setLoadedCount(initialLoadCount);
            } catch (error) {
                console.error('Error loading accordion data:', error);
            }
        };

        fetchData();
    }, []);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const loadMoreItems = () => {
        const nextItems = allItems.slice(loadedCount, loadedCount + itemsPerLoad);
        setDisplayedItems([...displayedItems, ...nextItems]);
        setLoadedCount(loadedCount + itemsPerLoad);
    };

    const canLoadMore = loadedCount < allItems.length;

    return (
        <div className={styles.content}>
            <div className={styles.accordion}>
                {displayedItems.map((item, index) => {
                        return (
                            <div key={index} className={activeIndex === index ? `${styles.active} ${styles.item}` : `${styles.item}`}>
                                <button onClick={() => toggleAccordion(index)}>
                                    <span>{item.title}</span>
                                    <span></span>
                                </button>
                                <div>{item.text}</div>
                            </div>
                        )}
                    )
                }
            </div>

            {canLoadMore && (
                <button onClick={loadMoreItems} className={styles.more}>
                    Показать больше
                </button>
            )}
        </div>
    )
}