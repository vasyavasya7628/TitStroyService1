'use client';

import styles from '@style/Trade/short.module.scss';

interface ShortProps {
    svg: string;
    text: string;
}

export default function Short({svg, text} : ShortProps) {
    return (
        <div className={styles.block}>
            <div className={styles.block_content}>
                <img src={`svg/${svg}.svg`} alt="" />

                <div
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
        </div>
    )
}