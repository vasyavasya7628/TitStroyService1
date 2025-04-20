import styles from '@style/ui/fullSocial.module.scss';

interface MobileProps {
    blue?: boolean
}

export default function Mobile({blue}: MobileProps) {
    return (
        <a href="tel:+375445044771" className={styles.link}>
            <span className={blue ? `icon-phone ${styles.icon} ${styles.blue}` : `icon-phone ${styles.icon}`} />
            <span className={styles.text}>+375 (44) 504-47-71</span>
        </a>
    )
}