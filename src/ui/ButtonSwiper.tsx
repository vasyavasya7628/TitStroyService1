"use client"

import styles from '@style/ui/buttonSwiper.module.scss';

interface ButtonSwiperProps {
    classBtn: string,
    rotate: boolean,
    onClick?: () => void,
}

export default function ButtonSwiper({classBtn, rotate, onClick}: ButtonSwiperProps) {
    return (
        <button 
                className={
                    rotate ? `${classBtn} ${styles.btn} ${styles.rotate}` : `${classBtn} ${styles.btn}`
                }
                onClick={onClick}
        >
                <span className='icon-Vector'/>
        </button>
    )
}