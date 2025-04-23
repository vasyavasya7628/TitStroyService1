"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Short from "@/components/Home/Short/Short";
import What from "@/components/Home/What/What";

import api from "@utils/api/unsplash";

import styles from "@style/home.module.scss";
import Services from "@/components/Home/Services/Services";
import WorkItem from "@/components/Home/WorkItem/WorkItem";
import ProjectCards from "@/components/Home/ProjectCards/ProjectCards";
import Accordion from "@/components/Home/Accordion/Accordion";

export default function Home() {
  const getApi = api();
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    async function fetchImage() {
      try {
        const img = await getApi.getImage(
          "photo-1521459515210-b8176945b104",
          1440,
          960
        );
        setImageSrc(img);
      } catch (error) {
        console.error("Ошибка загрузки изображения:", error);
      }
    }
    fetchImage();
  }, []);

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
              Работаем по ТКП, СН и СТБ ISO 9001
            </div>

            <button id="getForm">
              <img src="/svg/arrow.svg" alt="arrow" />
              Связаться с нами
            </button>
          </div>
        </div>

        {imageSrc && (
          <img
            src={imageSrc}
            alt="Фоновое изображение"
            className={styles.back}
          />
        )}
      </section>
 {/*
      <section className={styles.short}>
        <div className="container">
          <div className={styles.short_container}>
            <Short title="90%" description="объектов сданы в срок" />
            <Short title="1 день" description="расчет сметы" />
            <Short description="Реализуем любые идеи и проекты" />
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
            <h2>Почему 150+ клиентов выбрали нас</h2>

            <div className={styles.what_blocks}>
              <What
                icon="dash.svg"
                text="Гарантия от 2-х лет"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="sber.svg"
                text="Работаем по СН, ТКП и СТБ ISO 9001"
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
                text="Аттестованные специалисты с опытом >8 лет"
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
                text="98% объектов сданы в срок"
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
                text="Многоуровневый контроль качества – руководитель, производитель работ, технадзор"
                description="Замер и смета не подлежат оплате при заключении договора. В иных случаях оплата производится по предварительному договору."
                className={styles.block}
              />
              <What
                icon="money.svg"
                text="Для физических лиц доступна рассрочка и отсрочка платежа / индивидуальный график платежей для юридических лиц"
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
              от объема работ. Работаем с частными и коммерческими объектами по
              фиксированной договорной цене и гарантией от 2-х лет
            </div>

            <Services />

            <Link href="/services" className={styles.link}>
              Смотреть все услуги
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
                  text="Составление дефектного акта, сметы и предварительное согласование этапов работ"
                />
                <div className={styles.arrow} />
                <WorkItem number={4} text="Заключение договора" />
              </div>

              <div className={styles.row}>
                <WorkItem
                  number={5}
                  text="Согласование и закупка материалов"
                  min={true}
                />
                <div className={styles.arrow} />
                <WorkItem
                  number={6}
                  text="Выполнение работ с информированием заказчика о ходе процесса"
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

            <img src="/img/work.png" alt="work" />
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <div className={styles.projects_container}>
            <h2>Проекты</h2>
            <div className={styles.text}>
              Создаем комфортное пространство, в котором хочется жить и
              работать. Мы успешно завершили &gt;150 проектов по Беларуси, 98%
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
              <button>Получить консультацию</button>
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
      */ }
    </>
  );
}
