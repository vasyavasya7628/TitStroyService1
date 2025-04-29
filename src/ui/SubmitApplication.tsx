"use client"

import styles from '@style/ui/submitApplication.module.scss';

interface SubmitApplicationProps{
    text: string,
    onClick?: () => void
}

export default function SubmitApplication({text, onClick}: SubmitApplicationProps ) {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
}