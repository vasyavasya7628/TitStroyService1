"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@style/ui/urlLinks.module.scss';

export default function UrlLinks() {
    const pathname = usePathname();
    
    // Разбиваем путь на части, сохраняя пустые строки
    const pages = pathname ? pathname.split('/') : [""];
    
    // Функция для получения читаемого названия страницы
    const getPageTitle = (page: string): string => {
        switch (page) {
            case '':
                return 'Главная страница';
            case 'trade':
                return 'Тендерная деятельность';
            case 'contacts':
                return 'Контакты';
            default:
                return page || 'Пусто';
        }
    };
    
    // Собираем полный путь для каждого элемента
    const getFullPath = (index: number): string => {
        return pages.slice(0, index + 1).join('/') || '/';
    };

    return (
        <div className={styles.blocks}>
            {
                pages.map((page, index) => (
                    <div key={index} className={styles.block}>
                        <Link href={getFullPath(index)}>
                            {getPageTitle(page)}
                        </Link>
                        {
                            index < pages.length - 1 && (
                                <span />
                            )
                        }
                    </div>                  
                ))
            }
        </div>
    )
}