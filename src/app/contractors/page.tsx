import SmallForm from "@/ui/SmallForm";
import UrlLinks from "@/ui/UrlLinks";
import Promise from '@/components/About/Promise/Promise';

import styles from '@style/Contractors/contractors.module.scss';
import Vacancys from "@/components/Contractors/Vacancy/Vacancys";

export default function Contractors() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.hero_container}>
                        <UrlLinks />

                        <div className={styles.content}>
                            <div className={styles.content_main}>
                                <h1>Сотрудничество с крупным подрядчиком в строительстве и ремонте</h1>
                                <div className={styles.text}>ООО «ТитСтройСервис» – надежный партнер с &gt;150 успешными проектами по всей Беларуси</div>
                            </div>

                            <div className={styles.form}>
                                <SmallForm
                                    title="Если вы профессионал в сфере строительства и ремонта, хотите стабильную работу и долгосрочное сотрудничество – мы ждем вас!"
                                    left={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/99092c1bd8c47a90cf113420df19fc7c.webp`} alt="back" />
            </section>

            <section className={styles.advantages}>
                <div className="container">
                    <div className={styles.advantages_container}>
                        <h2>Преимущества работы с нами</h2>

                        <Promise
                            advantages={true}
                        />

                        <button>Стать нашим подрядчиком</button>
                    </div>
                </div>
            </section>

            <section className={styles.work}>
                <div className="container">
                    <div className={styles.work_container}>
                        <div className={styles.content}>
                            <h2>Необходимые виды работ</h2>

                            <div className={styles.blocks}>
                                <div className={styles.blocks_first}>
                                    <div>Отделочные работы</div>
                                    <div>Фасадные работы</div>
                                    <div>Благоустройство территорий</div>
                                </div>

                                <div className={styles.blocks_second}>
                                    <div>Электромонтажные работы</div>
                                    <div>Общестроительные работы</div>
                                    <div>Монтаж ограждений</div>
                                    <div>Монтаж безбарьерной среды</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.img}>
                            <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/a9d9ee26a83278f5cc94ea36c641748d.webp`} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.advertisement}>
                <div className="container">
                    <div className={styles.advertisement_container}>
                        <div className={styles.content}>
                            <h2>Хотите работать на крупных объектах Беларуси вместе с проверенным партнером? </h2>
                            <div>Заполните заявку, и мы свяжемся с вами!</div>
                        </div>

                        <form>
                            <input type="text" required placeholder="Ваше имя" />
                            <input type="tel" required placeholder="Номер телефона" />
                            <label htmlFor="file" className={styles.input}>
                                <span>Резюме / портфолио (необязательно)</span>
                                <span></span>
                            </label>
                            <input type="file" id="file" placeholder="Резюме / портфолио (необязательно)" />
                            <input type="text" required placeholder="Опишите ваш опыт и специализацию" />
                            <button>Связаться с нами</button>
                            <label className={styles.second}>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и принимаете условия политики конфиденциальности</label>
                        </form>

                        <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/def2f31c5b82de0beee56d561aceee98.webp`} alt="back" />
                    </div>
                </div>
            </section>

            <section className={styles.vacancy}>
                <div className="container">
                    <div className={styles.vacancy_container}>
                        <div className={styles.vacancy_content}>
                            <h2>Открытые вакансии</h2>

                            <Vacancys />
                        </div>

                        <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/15987c7fe589277aeb4cf03d05d4a22d.webp`} alt="back" />
                    </div>
                </div>
            </section>
        </>
    )
}