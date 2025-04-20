import styles from '@style/ui/social.module.scss';

interface SocialProps{
    blue?: boolean
}

export default function Social({blue}: SocialProps) {
    return (
        <div className={styles.socials}>
            <a href="#" className={blue ? styles.blue : ''}>
                <span className='icon-whatsapp' />
            </a>
            <a href="#" className={blue ? styles.blue : ''}>
                <span className='icon-telegram' />
            </a>
            <a href="#" className={blue ? styles.blue : ''}>
                <span className='icon-instagram' />
            </a>
        </div>
    )
}