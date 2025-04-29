"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import Short from "@/components/Home/Short/Short";
import What from "@/components/Home/What/What";

import api from "@utils/api/main";

import styles from "@style/home.module.scss";
import Services from "@/components/Home/Services/Services";
import WorkItem from "@/components/Home/WorkItem/WorkItem";
import ProjectCards from "@/components/Home/ProjectCards/ProjectCards";
import Accordion from "@/components/Home/Accordion/Accordion";
import Mail from "@/ui/Mail";
import Mobile from "@/ui/Mobile";
import Social from "@/ui/Social";
import SmallForm from "@/ui/SmallForm";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
      
  const scrollToContact = () => {
      contactRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  };

  return (
    <>
      {/* Main section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero_container}>
            <h1>
              Ремонт и строительство “под ключ” без задержек по всей РБ.
              Гарантия от 2-х лет
            </h1>
            <div>
              Фиксированные сроки и стоимость, специалисты с опытом &gt; 8 лет.
              <span>Работаем по ТКП, СН и СТБ ISO 9001</span>
            </div>

            <button id='getForm' onClick={scrollToContact}>
              <img src="/svg/arrow.svg" alt="arrow" />
              Связаться с нами
            </button>
          </div>
        </div>

        <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/file_media/uploads/compress/15987c7fe589277aeb4cf03d05d4a22d.webp`} alt="back" className={styles.back} />
      </section>

      <section className={styles.short}>
        <div className="container">
          <div className={styles.short_container}>
            <Short title="90%" description="объектов сданы в срок" />
            <Short title="1 день" description="расчет сметы" />
            <Short description="Реализуем любые идеи &nbsp;и проекты" />
            <Short description="Начнём работу уже завтра" />
          </div>
        </div>
      </section>

      <section className={styles.corporation}>
        <div className="container">
          <div className={styles.corporation_container}>
            <h2>Нам доверяют</h2>
            <div className={styles.corporation_block}>
              {[...Array(12)].map((_, i) => (
                <img
                  src={`/img/corporation/${i + 1}.png`}
                  alt="corporation"
                  key={i + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.what}>
        <div className="container min">
          <div className={styles.what_container}>
            <h2>
              <span className={styles.span_mobile}>
                Почему 150+ клиентов доверяют нам
              </span>
              <span className={styles.span_desktop}>
                Почему 150+ клиентов выбрали нас
              </span>
            </h2>

            <div className={styles.what_blocks}>
              <What
                icon="dash.svg"
                text="Гарантия  <span>от 2-х лет</span>"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="sber.svg"
                text="Работаем по <span>СН, ТКП и СТБ ISO 9001</span>"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="calendar.svg"
                text="Бесплатный замер и смета на следующий день"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="home.svg"
                text="Работаем с жилыми и коммерческими объектами"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="people.svg"
                text="Аттестованные специалисты с опытом <span>>8 лет</span>"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="box.svg"
                text="Работаем c проверенными поставщиками по лучшим ценам"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="clock.svg"
                text="<span>98%</span> объектов сданы в срок"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="coin.svg"
                text="Фиксированная договорная стоимость"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="ladder.svg"
                text="Многоуровневый контроль качества – <span>руководитель, производитель работ, технадзор</span>"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="money.svg"
                text="Для физических лиц доступна рассрочка и отсрочка <span>платежа / индивидуальный график платежей</span> для юридических лиц"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={styles.services_container}>
            <h2>Услуги</h2>
            <div className={styles.text}>
              Мы берем на себя весь процесс - от замера до сдачи объекта,
              обеспечивая результат <span>от 30 до 90 дней</span>, в зависимости
              от объема работ.
              <br />
              <br /> Работаем с частными и коммерческими объектами по
              фиксированной договорной цене и гарантией от 2-х лет
            </div>

            <Services />

            <Link href="/services" className={styles.link}>
              Смотреть все услуги&nbsp;
              <span className={styles.arrow}>
                <span className="icon-arrow-up"></span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.work}>
        <div className="container">
          <div className={styles.work_container}>
            <h2>Как мы работаем</h2>

            <div className={styles.content}>
              <div className={styles.row}>
                <WorkItem number={1} text="Заявка" />
                <div className={styles.arrow} />
                <WorkItem number={2} text="Выезд специалиста" />
                <div className={styles.arrow} />
                <WorkItem
                  number={3}
                  text="Составление дефектного акта, <br />сметы и предварительное <br />согласование этапов работ"
                />
                <div className={styles.arrow} />
                <WorkItem number={4} text="Заключение договора" />
              </div>

              <div className={styles.row}>
                <WorkItem
                  number={5}
                  text="Согласование и закупка <br />материалов"
                  min={true}
                />
                <div className={styles.arrow} />
                <WorkItem
                  number={6}
                  text="Выполнение работ с <br />информированием заказчика <br />о ходе процесса"
                />
                <div className={styles.arrow} />
                <WorkItem
                  number={7}
                  text="Прием заказчиком выполненных работ и подписание акта"
                  min={true}
                />
                <div className={styles.arrow} />
                <WorkItem number={8} text="Оплата выполненных работ" />
              </div>
            </div>

            <span className={styles.mobile_text_white}>
              Хотите узнать точную стоимость и сроки? Оставьте заявку –
              рассчитаем за 1 день <br />
              после замера!
            </span>
            <span className={styles.mobile_text_grey}>
              Сделайте первый шаг к реализации вашего <br />
              проекта уже сегодня
            </span>
            <button className={styles.button}>
            Оставить заявку
            </button>

            <img src="/img/work.png" alt="work" />
          </div>
        </div>
      </section>

      <section className={styles.reviews}>
        <div className="container">
          <div className={styles.reviews_container}>
            <h2>90% клиентов выбирают нас повторно и рекомендуют другим</h2>
            <div className={styles.main}>Наше качество подтверждают реальные результаты и довольные клиенты</div>

            <Reviews />

            <div className={styles.link}>
              Мы ценим доверие и мнение каждого клиента! Уже работали с нами? Оставьте свой отзыв на <Link href="https://yandex.ru/maps/org/titstroyservis/132168442855/reviews/?ll=27.542787%2C53.937923&z=14" target="_blank">Яндекс</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <div className={styles.projects_container}>
            <h2>Проекты</h2>
            <div className={styles.text}>
              Создаем комфортное пространство, в котором хочется жить и
              работать.<br/> Мы успешно завершили <b>&gt;150 проектов</b> по Беларуси, <b>98% </b> 
              из них сданы без задержек.
            </div>

            <ProjectCards />

            <Link href="/projects" className={styles.btn}>
              <span className={styles.btn_text}>Смотреть больше проектов</span>
              <span className={`${styles.arrow} icon-arrow-up`} />
            </Link>

            <div className={styles.short_project}>
              <div>
                Каждый проект - это продуманные решения, проверенные технологии
                и команда с опытом &gt; 8 лет.{" "}
                <span>
                  Хотите качественный результат? Доверьте работу профессионалам!
                </span>
              </div>
              <button><span className={styles.button_text_desktop}>Получить консультацию</span><span className={styles.button_text_mobile}>Оставить заявку</span></button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.accordion}>
        <div className="container">
          <div className={styles.accordion_container}>
            <h2>Часто задаваемые вопросы</h2>

            <Accordion />
          </div>
        </div>
      </section>

      <section className={styles.application} ref={contactRef}>
          <div className="container">
              <div className={styles.application_container}>
                  <h3>Мы осуществляем строительство и ремонт объектов различной сложности по всей Беларуси – от жилых квартир до коммерческих зданий и промышленных сооружений</h3>

                  <div className={styles.texts}>
                    Свяжитесь с нами или оставьте заявку, и мы подберем лучшее решение под ваш проект
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
  );
}
