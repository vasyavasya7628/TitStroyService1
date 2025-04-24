"use client";

import { useEffect, useState } from 'react';

import api from '@/utils/api/main';

import styles from '@style/Contractors/vacancys.module.scss';

interface Vacancy {
    block_id: string;
    block_name: string;
    text_blocks: TextBlock[];
    buttons: Array<{
      button_id: string;
      name: string;
      link: string;
      target: string;
    }>;
}

interface TextBlock {
    block: string;
    text_id: string;
    text_type: TextType;
    value_ru: string;
}

interface TextType {
    id: number;
    name: string;
    desc: string;
}

export default function Vacancys() {
    const { getVacancys } = api();
    const [vacancies, setVacancies] = useState<Vacancy[]>([]);
    const [expandedBlocks, setExpandedBlocks] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getVacancys();
            setVacancies(data);
          } catch (error) {
            console.error("Ошибка загрузки вакансий:", error);
          }
        };
        fetchData();
    }, []);

    const toggleBlock = (blockId: string) => {
        setExpandedBlocks(prev => ({
            ...prev,
            [blockId]: !prev[blockId]
        }));
    };

    return (
        <div className={styles.blocks}>
            {
                vacancies.map((block, index) => {
                    const title = block.block_name;
                    const experience = block.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'experience')?.value_ru;
                    const smallDescription = block.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'small_description')?.value_ru;
                    const description = block.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'description')?.value_ru;
                    const url = block.buttons[0];
                    const isExpanded = expandedBlocks[block.block_id];
                    
                    return (
                        <div className={styles.block} key={block.block_id}>
                            <div className={styles.content}>
                                <div className={styles.info}>
                                    <h3>{title}</h3>
                                    <div className={styles.experience}>{experience}</div>
                                    <div className={styles.smallDescription}>{smallDescription}</div>
                                </div>

                                <a href={url.link} target="_blank" rel="noopener noreferrer">{url.name}</a>
                            </div>

                            <div className={styles.description} data-expanded={isExpanded || undefined}>{description}</div>

                            <button
                                className={styles.more}
                                onClick={() => toggleBlock(block.block_id)}
                            >
                                <span className={styles.text}>{isExpanded ? 'Скрыть' : 'Подробнее'}</span>
                                <span className={isExpanded ? `icon-Vector ${styles.icon} ${styles.rotate}` : `icon-Vector ${styles.icon}`} />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}