"use client"

import styles from '@style/ui/submitApplication.module.scss';

interface SubmitApplicationProps{
    text: string
}

export default function SubmitApplication({text}: SubmitApplicationProps) {
    return (
        <button className={styles.button}>{text}</button>
    )
}