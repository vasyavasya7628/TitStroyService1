"use client";

import { useEffect, useState } from 'react';

import api from '@utils/api/main';

import styles from '@style/ui/promise.module.scss';

interface TextType {
    id: number;
    name: string;
    desc: string;
}

interface TextBlock {
    block: string;
    text_id: string;
    text_type: TextType;
    value_ru: string;
}

interface PromiseBlock {
    text_blocks: TextBlock[];
    // другие поля, если есть
}

interface promisePros {
    classBoolean?: boolean
    advantages?: boolean
}

export default function Promise({classBoolean, advantages}: promisePros) {
    const { getPromise, getAdvantages } = api();
    const [promiseBlocks, setPromiseBlocks] = useState<PromiseBlock[]>([]);

    useEffect(() => {
        async function fetchData() {
            if (advantages) {
                const data = await getAdvantages();
                setPromiseBlocks(data);
            } else {
                const data = await getPromise();
                setPromiseBlocks(data);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={classBoolean ? `${styles.blocks} ${styles.two}` : `${styles.blocks}`}>
            {promiseBlocks.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    {
                        promiseBlocks.map((block, index) => {
                            const promiseText = block.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'promise')?.value_ru;
                            const descriptionText = block.text_blocks.find((tb: TextBlock) => tb.text_type.name === 'description')?.value_ru;
                        
                            return (
                                <div key={index} className={styles.block}>
                                    <div className={styles.title}>
                                        {/* Если promiseText найден, показываем HTML-контент */}
                                        {promiseText ? (
                                            <div dangerouslySetInnerHTML={{ __html: promiseText }} />
                                        ) : (
                                            <p>No promise found</p> // Если нет блока с 'promise'
                                        )}
                                    </div>

                                    <div>
                                        <div className={styles.question}>?</div>
                                        {descriptionText ? (
                                            <div className={styles.text}>
                                                <div dangerouslySetInnerHTML={{ __html: descriptionText }}  />
                                            </div>
                                        ) : (
                                            <></> // Если нет блока с 'promise'
                                        )}
                                    </div>
                                </div>
                            );
                        }) 
                    }
                </>
            )}
        </div>
    );
}
