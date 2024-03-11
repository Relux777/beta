'use client'
import React, { useState } from 'react';
import { useRef } from 'react';
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));

import img_1 from '@/public/img/index/index-1.png';
import ozon from '@/public/img/index/ozon_sno.jpg'

export default function Index() {
  
  const ref = useRef(null);
  const pathname = usePathname()

  const advantagesData = [
    { imgSrc: require('@/public/img/index/i_1.svg'), text: 'Стабильные выплаты 2 раза в месяц' },
    { imgSrc: require('@/public/img/index/i_2.svg'), text: 'Оплачиваемая стажировка 10 дней' },
    { imgSrc: require('@/public/img/index/i_3.svg'), text: 'Обеспечим жильем и спец.одеждой' },
    { imgSrc: require('@/public/img/index/i_4.svg'), text: 'Бесплатный комплексный обед за наш счёт' },
    { imgSrc: require('@/public/img/index/i_5.svg'), text: 'Бесплатный транспoрт дo/c работы' },
    { imgSrc: require('@/public/img/index/i_6.svg'), text: 'Различные денежные бонусы' }
  ];

  return (
    <div className={`content ${pathname === '/' ? 'index_content' : ''}`}>
       <section className='index_bg'>
            <div className='background'>
              <div className='cricle circle_1'></div>
              <div className='cricle circle_2'></div>
              <div className='cricle circle_3'></div>
              <div className='cricle circle_4'></div>
              <div className='waves'><div className='animation'></div><div className='animation'></div></div>
            </div>
            <div className='container flex align-center flex-nowrap justify-space'>
                  <div className='text'>
                      <h1>Работа сотрудником склада OZON Градус - г. Казань | Новая тура</h1>
                      <span>Приглашаем вас присоединиться к команде профессионалов ООО &quot;Озон Градус&quot; </span><br />
                      <span>- ведущую компания в своей отрасли.</span><br />
                      <span>- предоставляем разнообразные возможности для карьерного роста.</span><br />
                      <span>- профессиональное развитие и дружественная рабочая среда. </span>
                  </div>
                  <div className='right-info'>
                      <Image src={img_1} alt="Shadow" className='img-1' priority />
                       <div className='shadow'></div>
                    </div>
              </div>
        </section>
        <section>
          <div className='container'>
            <div className='transform_top flex'>

              {advantagesData.map((advantage, index) => (
                <div key={index} className='w-2 h-4'>
                  <div className='advantages'>
                    <div><Image src={advantage.imgSrc} alt={`${advantage.text}`} loading="lazy" /></div>
                    <span>{advantage.text}</span>
                  </div>
                </div>
              ))}

            </div>
            <div className='flex mr_bt_down_40'>
              <div className='w-7'>
                <div className='block'>
                    <h1>Вакансии для талантливых специалистов</h1>
                    <span>Компания ООО &quot;Озон Градус&quot; постоянно в поиске талантливых и целеустремленных людей. Мы предлагаем широкий спектр вакансий в различных областях. Наша компания ценит индивидуальные способности каждого сотрудника и создает комфортные условия для обучения и профессионального роста.</span>
                    
                </div>
                <div className='block'>
                    <h1>Профессиональное сопровождение</h1>
                    <span>Наша команда готова предоставить вам поддержку во время всех этапов трудоустройства и в работе. Мы ценим каждого сотрудника и делаем все возможное, чтобы создать благоприятную и эффективную рабочую среду.</span>
                    
                </div>
                <div className='block'>
                    <h1>Присоединяйтесь к нашей команде уже сегодня!</h1>
                    <span>Если вы готовы присоединиться к лидерам в своей сфере и построить успешную карьеру в ООО &quot;Озон Градус&quot;, ознакомьтесь с нашими актуальными вакансиями и отправьте нам свое резюме. Мы будем рады приветствовать вас в нашей дружной и профессиональной команде.</span>
                    <br /><br /><Image src={ozon} alt="Озон градус склад Казань" style={{ width: '100%', height: 'auto',  borderRadius: '8px'}} />
                </div>
              </div>
              <div className='w-5'>
              <div className='block text_center'>
                  <h1 className='mr_0'>Нас более 80 специалистов</h1>
              </div>
              <div className='block'>
                  <h1>Вам предстоит:</h1>
                  <span>
                      - Пройти обучение, сдать тест <br />
                      - Приемка, упаковка, сортировка товара <br />
                      - Выявление бракованных товаров<br />
                      - Выполнение заданий на ручном терминале сбора данных <br />
                      - Участие в инвентаризациях и годовых проверках. <br />
                      - Поддержание чистоты и порядка на складе в конце сменны<br />
                  </span>
                </div>
                <div className='block'>
                  <h1>Мы пpедлагаем:</h1>
                  <span>
                      - Заpaбoтoк oт 117 000₽ за 30 смен при выполнение 100% нормы! <br />
                      - Cтабильный выплаты: 2 раза в меcяц. <br />
                      - Получение авансов каждую неделю <br />
                      - Грaфик paботы: 2/2, 5/2, 6/1 (день / ночь) <br />
                      - Вахта 15, 30, 45, 60 дней на ваш выбор<br />
                      - Бесплатное горячее питание и трансфер <br />
                      - Берем с гражданством РФ и СНГ <br />
                      - Подходят и мужчины, и женщины <br />
                      - Отапливаемый теплый склад класса А+ <br />
                      - Дополнительные поощрения в виде денежных бонусов
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}