"use client"

import UrlLinks from '@/ui/UrlLinks';
import Mobile from "@/ui/Mobile";
import Mail from "@/ui/Mail";
import Social from "@/ui/Social";

import styles from '@style/contacts.module.scss';
import SmallForm from '@/ui/SmallForm';

export default function Contacts() {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.hero_container}>
                        <UrlLinks />

                        <div className={styles.content}>
                            <div className={styles.info}>
                                <div className={styles.questions_text}>
                                    <strong>Адрес:</strong> 220013, Республика Беларусь<br/>
                                    г. Минск, ул. П. Бровки, д 30/1<br/>
                                    <strong>График работы:</strong> пн - пт 9:00 - 17:00
                                </div>

                                <div className={styles.socials}>
                                    <Mobile blue={true} />
                                    <Mail blue={true} />
                                    <Social blue={true} />
                                </div>
                            </div>

                            <div className={styles.map}>
                                <iframe
                                    src="https://yandex.by/map-widget/v1/?display-text=%D1%82%D0%B8%D1%82%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&amp;from=tabbar&amp;ll=27.542787%2C53.937923&amp;mode=search&amp;oid=132168442855&amp;ol=biz&amp;sctx=ZAAAAAgBEAAaKAoSCT%2F9Z82PmztAEYnUtItp9EpAEhIJ1jcwuVHk4j8RMV2I1R9hyj8iBgABAgMEBSgKOABAnQFIAWoCdWGdAc3MTD2gAQCoAQC9ASQWTD3CAQbnx%2Bmu7APqAQDyAQD4AQCCAhzRgtC40YLRgdGC0YDQvtC50YHQtdGA0LLQuNGBigIAkgIAmgIMZGVza3RvcC1tYXBz&amp;sll=27.542787%2C53.937923&amp;sspn=0.018449%2C0.006436&amp;text=%D1%82%D0%B8%D1%82%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&amp;z=16.74" 
                                    width="100%" 
                                    height="540" 
                                    frameBorder="1"
                                >
                                    
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.step}>
                <div className="container">
                    <div className={styles.step_container}>
                        <div className={styles.content}>
                            <h2>Всего один шаг от успешной реализации проекта и всех ваших идей!</h2>

                            <div className={styles.blocks}>
                                <div>Бесплатный выезд производителя работ</div>
                                <div>Подберем технологии и материалы под ваш проект</div>
                                <div>Расчет сметы за 1 день после замера</div>
                                <div>Честно озвучим сроки и стоимость</div>
                            </div>
                        </div>

                        <SmallForm
                            title='Оставьте заявку, наш специалист свяжется с вами, чтобы ответить на вопросы и предложить лучшее решение!'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}