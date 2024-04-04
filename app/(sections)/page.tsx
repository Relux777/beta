'use client'

import { useRef } from 'react';
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));

import img_1 from '@/public/img/index/index-1.png';
import calculator from '@/public/img/index/calculator.jpg';
import best from '@/public/img/index/best_users/best.jpg';



const New_application = dynamic(() => import('@/app/components/new_application/page'))
const Calculator_block = dynamic(() => import('@/app/components/calculator/page'))


const scrollToForm = () => {
  const formElement = document.querySelector('.form');
  
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Index() {
  
  const ref = useRef(null);
  const pathname = usePathname()




  const buttonRef = useRef<HTMLButtonElement>(null);
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
                      <h1>Работа | вакансия сотрудник склада ozon - г.  Казань</h1>
                      <ul>
                        <li>Приглашаем вас присоединиться к команде профессионалов ООО Озон «Градус»</li>
                        <li>- ведущую компания в своей отрасли</li>
                        <li>- предоставляем разнообразные возможности для карьерного роста</li>
                        <li>- профессиональное развитие и дружественная рабочая среда</li>
                      </ul>
                      <button className='btn-1' ref={buttonRef} onClick={scrollToForm}>Оставить заявку <i className="fa-light fa-user-pen"></i></button>
                  </div>
                  <div className='right-info'>
                      <Image src={img_1} alt="Работа озон " className='img-1' priority />
                       <div className='shadow'></div>
                    </div>
              </div>
        </section>
        <section>
          <div className='container'>
            <div className='transform_top flex'>

            
                <div className='w-2 h-4'>
                  <div className='advantages'>
                    <i className="fa-light fa-calendar-days"></i>
                    <span>Выплаты 2 раза в месяц</span>
                  </div>
                </div>
                <div className='w-2 h-4'>
                  <div className='advantages'>
                    <i className="fa-light fa-credit-card-front"></i>
                    <span>Оплачиваемая стажировка 10 дней</span>
                  </div>
                </div>
                <div className='w-2 h-4'>
                  <div className='advantages'>
                  <i className="fa-light fa-house-user"></i>
                    <span>Обеспечим жильем и спец.одеждой</span>
                  </div>
                </div>
                <div className='w-2 h-4'>
                  <div className='advantages'>
                  <i className="fa-light fa-utensils"></i>
                    <span>Бесплатный комплексный обед за наш счёт</span>
                  </div>
                </div>
                <div className='w-2 h-4'>
                  <div className='advantages'>
                  <i className="fa-light fa-car-bus"></i>
                    <span>Бесплатный транспoрт дo/c работы</span>
                  </div>
                </div>
                <div className='w-2 h-4'>
                  <div className='advantages'>
                  <i className="fa-light fa-gift"></i>
                    <span>Различные денежные бонусы</span>
                  </div>
                </div>
              

            </div>
            <div className='flex mr_bt_down_40'>
              <div className='w-7'>
                <div className='block'>
                    <h2>Вакансии для талантливых специалистов</h2>
                    <span>Компания ООО Озон «Градус» постоянно в поиске талантливых и целеустремленных людей. Мы предлагаем широкий спектр вакансий в различных областях. Наша компания ценит индивидуальные способности каждого сотрудника и создает комфортные условия для обучения и профессионального роста.</span>
                    
                </div>
                <div className='block'>
                    <h2>Профессиональное сопровождение</h2>
                    <span>Наша команда готова предоставить вам поддержку во время всех этапов трудоустройства и в работе. Мы ценим каждого сотрудника и делаем все возможное, чтобы создать благоприятную и эффективную рабочую среду.</span>
                    
                </div>
                <div className='block'>
                    <h2>Присоединяйтесь к нашей команде уже сегодня!</h2>
                    <span>Если вы готовы присоединиться к лидерам в своей сфере и построить успешную карьеру в ООО Озон «Градус», ознакомьтесь с нашими актуальными вакансиями и отправьте нам свое резюме. Мы будем рады приветствовать вас в нашей дружной и профессиональной команде.</span>
                    
                </div>
              </div>
              <div className='w-5'>
              <div className='block text_center'>
                  <h2 className='mr_0'>Нас более 80 специалистов</h2>
              </div>
              <div className='block'>
                  <h2>Вам предстоит:</h2>
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
                  <ul>
                    <li><h2>Мы пpедлагаем:</h2></li>
                    <li>- Заpaбoтoк oт 117 000₽ за 30 смен при выполнение 100% нормы!</li>
                    <li>- Выплаты: 2 раза в меcяц</li>
                    <li>- Получение авансов каждую неделю (вахта)</li>
                    <li>- Грaфик paботы - местные: 2/2, 5/2, 6/1 (день / ночь)</li>
                    <li>- Грaфик paботы - вахта: 6/1 (день / ночь)</li>
                    <li>- Бесплатное горячее питание и трансфер</li>
                    <li>- Берём мужчин, так и женщин</li>
                    <li>- Отапливаемый теплый склад класса А+</li>
                    <li>- Дополнительные поощрения в виде денежных бонусов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h2 className='text_center'>Отправь анкету, и мы обязательно ответим в ближайшее время!</h2>
          <div className='flex'>
                <div className='w-5'>
                    <div className='block form'> 
                        <h2 className='text_center'>Новая заявка</h2>
                        <New_application />
                    </div>
                </div>
                <div className='w-7'>
                    <div className='block'>
                    <h2>Часто задаваемые вопросы</h2>
                    <div>Происходит обновление информации :(</div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
              <div className='users flex justify-center'>
                <div className='w-4 text_center'>
                  <h2>Лучшие по выработке</h2>
                  <Image src={best} alt="Лучшие в компании ozon gradus" className='img-2' /><br /><br />
                  <span>Вы поставили новый рекорд? Отпиши нам, мы внесем вас в данный список</span>
                </div>
                <div className='w-8'>
                <h2 className='text_center'>Размещение</h2>
                <div className='flex justify-center'>
                <div className='best_users'>
                    <Image src='/img/index/best_users/r_2.jpg' alt="Лучшие в компании ozon gradus" width={100} height={100} className='img-1' />
                    <div className='number'><div>1</div></div>
                    <div className='info'>
                      <h3>Маруфов Ч.А.</h3>
                      <b>Выработка: 347%</b>
                      <hr />
                      <span>Стаж: более 2 года</span>
                    </div>
                  </div>
                  <div className='best_users'>
                    <Image src='/img/index/best_users/r_1.jpg' alt="Лучшие в компании ozon gradus" width={100} height={100} className='img-1' />
                    <div className='number'><div>2</div></div>
                    <div className='info'>
                      <h3>Семенов А.В.</h3>
                      <b>Выработка: 312%</b>
                      <hr />
                      <span>Стаж: более 2 года</span>
                    </div>
                  </div>
                  <div className='best_users'>
                    <Image src='/img/index/best_users/r_3.jpg' alt="Лучшие в компании ozon gradus" width={100} height={100} className='img-1' />
                    <div className='number'><div>3</div></div>
                    <div className='info'>
                      <h3>Евдокимов В.О.</h3>
                      <b>Выработка: 302%</b>
                      <hr />
                      <span>Стаж: 1,5 года</span>
                    </div>
                  </div>
                </div>
                <h2 className='text_center mr_top_20px'>ТСЦ</h2>
                <div className='flex justify-center'>
                  <div className='best_users'>
                    <Image src='/img/index/best_users/t_1.jpg' alt="Лучшие в компании ozon gradus" width={100} height={100} className='img-1' />
                    <div className='number'><div>1</div></div>
                    <div className='info'>
                      <h3>Эва И.М.</h3>
                      <b>Выработка: 2 072 пиков</b>
                      <hr />
                      <span>Стаж: более 4 мес</span>
                    </div>
                  </div>
                  <div className='best_users'>
                    <Image src='/img/index/best_users/t_2.jpg' alt="Лучшие в компании ozon gradus" width={100} height={100} className='img-1' />
                    <div className='number'><div>2</div></div>
                    <div className='info'>
                      <h3>Салюкова А.А.</h3>
                      <b>Выработка: 1 927 пиков</b>
                      <hr />
                      <span>Стаж: более 3 мес</span>
                    </div>
                  </div>
                  <div className='best_users'>
                    <Image src='/img/index/best_users/t_2.jpg' alt="Лучшие в компании ozon gradus" width={100} height={100} className='img-1' />
                    <div className='number last'><div>3</div></div>
                    <div className='info'>
                      <h3>Валишина Н..Р</h3>
                      <b>Выработка: 1 896 пиков</b>
                      <hr />
                      <span>Стаж: более 1 года</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <h2 className='text_center'>Расчитайте свою среднюю прибыль</h2>
              <div className='flex align-center'>
              
              <div className='w-6'>
                  <div className='block calculator'>
                    <div><div></div></div>
                    <h2>Калькулятор</h2>
                    <Calculator_block />
                  </div>
                </div>
                <div className='w-6 text_center'>
                <Image src={calculator} alt="Озон градус склад Казань" loading='lazy' style={{ width: '70%', height: 'auto',  borderRadius: '8px'}} />
                </div>
              </div>
              <div className='contact_index'>
                <div className='bg bh'><div className='bh'><div className='bh'><i className='fa-brands fa-telegram'></i></div></div></div>
                <h2>Остались вопросы?</h2>
                <p>Отпишите нам <br />Мы ответим в ближайшее время!</p>
                <div className='social flex align-center'>
                <a className='flex align-center' href="https://t.me/relux1337" target="_blank" > <i className="fa-brands fa-telegram"></i></a>
                <a className='flex align-center' href="https://wa.me/89272333944" target="_blank" > <i className="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
          </div>
        </section>
    </div>
  )
}