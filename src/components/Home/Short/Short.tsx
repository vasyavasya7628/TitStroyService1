"use client";

import styles from '@style/Home/short.module.scss';

type ShortProps = {
    title?: string;
    description: string
};

export default function Short({title, description} : ShortProps) {
    return (
        <div className={styles.block}>
            {title && <div className={styles.title}>{title}</div>}
            <div className={styles.text}>{description}</div>
        </div>
    )
}