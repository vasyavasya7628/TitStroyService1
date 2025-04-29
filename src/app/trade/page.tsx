"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import UrlLinks from '@/ui/UrlLinks';
import Short from "@/components/Trade/Short";
import SubmitApplication from "@/ui/SubmitApplication";
import Mobile from "@/ui/Mobile";
import Mail from "@/ui/Mail";
import Social from "@/ui/Social";

import styles from '@style/trade.module.scss';

export default function Trade() {
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.hero_container}>
                        <UrlLinks />

                        <h1>Надежный партнер для тендеров по всей Беларуси</h1>

                        <div className={styles.blocks}>
                            <div>Гарантия от 2-х лет</div>
                            <div>98% проектов сданы без задержек</div>
                            <div>&gt;150 выполненных договоров по всей стране</div>
                        </div>
                    </div>
                </div>


                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/9e14ba941eb277eb1ff4037046202c80b7616ac8.webp`} alt="Фоновое изображение" className={styles.back} />
            </section>

            <section className={styles.ooo}>
                <div className="container">
                    <div className={styles.ooo_container}>
                        <h2>ООО «ТитСтройСервис» – аккредитованный участник крупнейших тендерных площадок</h2>

                        <div className={styles.images}>
                            <img src="/img/corporation/13.png" alt="corporation" />
                            <img src="/img/corporation/14.png" alt="corporation" />
                            <img src="/img/corporation/15.png" alt="corporation" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.what}>
                <div className="container">
                    <div className={styles.what_container}>
                        <h2>Почему выбирают нас</h2>
                        <div className={styles.text}>Мы реализовываем любые идеи и проекты, включая самые уникальные и инновационные.</div>

                        <div className={styles.blocks}>
                            <Short
                                svg="home_2"
                                text=">150 завершенных<br>проектов по всей Беларуси"
                            />
                            <Short
                                svg="sber_2"
                                text="Работаем по<br>СН, ТКП и СТБ ISO 9001"
                            />
                            <Short
                                svg="coin_2"
                                text="Фиксированная<br>договорная стоимость"
                            />
                            <Short
                                svg="clock_2"
                                text="98% объектов<br>сданы в срок"
                            />
                            <Short
                                svg="people_2"
                                text="Аттестованные специалисты с опытом<br>>8 лет"
                            />
                            <Short
                                svg="carbon"
                                text="90% положительных отзывов"
                            />
                            <Short
                                svg="dash_2"
                                text="Гарантия от 2-х лет<br>на все виды работ"
                            />
                            <Short
                                svg="ladder_2"
                                text="Многоуровневый<br>контроль качества"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.corporation}>
                <div className="container">
                    <div className={styles.corporation_container}>
                        <h2>С нами работают</h2>
                        <div className={styles.corporation_block}>
                        {[...Array(12)].map((_, i) => (
                            <img src={`/img/corporation/${i+1}.png`} alt="corporation" key={i+1}/>
                        ))}
                        </div>
                    </div>

                    <SubmitApplication text="Связаться с нами" onClick={scrollToContact}/>
                </div>
            </section>

            <section className={styles.services}>
                <div className="container">
                    <div className={styles.services_container}>
                        <h2>Мы выполняем полный комплекс строительных и ремонтных работ по всей Беларуси</h2>

                        <div className={styles.content}>
                            <div className={styles.column}>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Ремонт и строительство «под ключ»</span>
                                </div>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Текущий и капитальный ремонт зданий и помещений</span>
                                </div>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Фасадные работы</span>
                                </div>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Внутренние отделочные работы</span>
                                </div>
                            </div>
                            
                            <div className={styles.column}>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Общестроительные работы</span>
                                </div>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Благоустройство территории</span>
                                </div>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Реконструкция объектов любой сложности </span>
                                </div>
                                <div className={styles.block}>
                                    <span className={styles.circle}></span>
                                    <span className={styles.text}>Монтаж ограждений и создание безбарьерной среды</span>
                                </div>
                            </div>
                        </div>
                        
                        <Link href="/services" className={styles.btn}>
                            <span className={styles.btn_text}>Подробнее об услугах</span>
                            <span className={`${styles.arrow} icon-arrow-up`} />
                        </Link>

                        <SubmitApplication text="Оставить заявку"/>

                        <img src="/img/tiler-working-renovation-apartment.png" alt="back" className={styles.back} />
                    </div>
                </div>
            </section>

            <section className={styles.questions} ref={contactRef}>
                <div className="container">
                    <div className={styles.questions_container}>
                        <h3>Берем на себя все вопросы – от подготовки документов до сдачи объекта, в любом регионе Беларуси. Вы получаете готовый результат без лишних сложностей</h3>
                        <div className={styles.questions_text}>
                            <strong>Адрес:</strong> 220013, Республика Беларусь<br/>
                            г. Минск, ул. П. Бровки, д 30/1<br/>
                            <strong>График работы:</strong> пн - пт 9:00 - 17:00
                        </div>

                        <div className={styles.socials}>
                            <Mobile />
                            <Mail />
                            <Social />
                        </div>

                        <div className={styles.form}>
                            <div>Готовы принять участие в вашем тендере - оставьте контакты, и мы свяжемся с вами</div>
                            <form>
                                <input type="text" placeholder="Ваше имя"/>
                                <input type="tel" placeholder="Номер телефона" />
                                <input type="text" placeholder="Ссылка на тендер или номер"/>
                                <button>Связаться с нами</button>
                            </form>
                        </div>

                        <img src="/img/map.png" alt="map" className={styles.back} />
                    </div>
                </div>
            </section>
        </>
    )
}