import styles from '@style/ui/fullSocial.module.scss';

interface MailProps {
    blue?: boolean
}

export default function Mail({blue}: MailProps) {
    return (
        <a href="mail:titstroyservice@yandex.by" className={styles.link}>
            <span className={blue ? `icon-mail ${styles.icon} ${styles.blue}` : `icon-mail ${styles.icon}`} />
            <span className={styles.text}>titstroyservice@yandex.by</span>
        </a>
    )
}