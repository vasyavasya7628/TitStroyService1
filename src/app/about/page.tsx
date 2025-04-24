'use client';

import Link from 'next/link';

import UrlLinks from '@/ui/UrlLinks';
import Promise from '@/components/About/Promise/Promise';
import Team from '@/components/About/Team/Team';
import Mobile from "@/ui/Mobile";
import Mail from "@/ui/Mail";
import Social from "@/ui/Social";
import Certificates from '@/components/About/Certificates/Certificates';
import SmallForm from '@/ui/SmallForm';

import styles from '@style/about.module.scss';

export default function About() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.hero_container}>
                        <UrlLinks />

                        <h1>ООО «ТитСтройСервис» – ведущий подрядчик по строительству и ремонту в Беларуси</h1>
                        <div className={styles.text}>Наша компания успешно завершила свыше <strong>150 проектов</strong>, включая тендерные, что подтверждает нашу надежность. Более 98% объектов переданы заказчикам в срок</div>

                        <Link href="/services" className={styles.link}>
                            <span className={styles.link_text}>Подробнее об услугах</span>
                            <span className={`${styles.icon} icon-arrow-up`} />
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <img src="/img/work.png" alt="worker" />
                </div>
            </section>

            <section className={styles.promise}>
                <div className="container">
                    <div className={styles.promise_container}>
                        <h2>Мы не обещаем – мы сдаем объекты в срок и без перерасхода бюджета</h2>

                        <Promise classBoolean={true}/>

                        <div className={styles.content}>
                            <div className={styles.main}>Хотите воплотить любую вашу идею в жизнь с четкими сроками без задержек?</div>
                            <div className={styles.second}>Оставьте заявку и мы свяжемся с вами уже сегодня!</div>
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.team}>
                <div className="container">
                    <div className={styles.team_container}>
                        <h2>Команда</h2>
                        <div className={styles.mainText}>Мы не экспериментируем, а строим гарантированно качественно. За каждым успешным проектом стоит наша команда профессионалов с практическим опытом &gt;8&nbsp;лет в сложных строительных проектах по всей Беларуси.</div>

                        <Team />
                    </div>
                </div>
            </section>

            <section className={styles.certificates}>
                <div className="container">
                    <div className={styles.certificates_container}>
                        <h2>Сертификаты и лицензии</h2>

                        <Certificates />
                    </div>
                </div>
            </section>

            <section className={styles.application}>
                <div className="container">
                    <div className={styles.application_container}>
                        <h3>Хотите ремонт и строительство без рисков? Оставьте заявку - и мы предложим лучшее решение под ваш проект!</h3>

                        <div className={styles.texts}>
                            <div>Бесплатная консультация</div>
                            <div>Расчет сметы за 1 день после замера</div>
                            <div>Старт работ уже завтра</div>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.contact}>
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
                            </div>

                            <SmallForm/>
                        </div>
                    </div>
                </div>

                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/1166125876b34d3874ed0c89d32e548a.webp`} alt="Задник" />
            </section>
        </>
    )
}