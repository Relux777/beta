import styles from './style.module.scss';
import Link from 'next/link'
import Image from 'next/image';
import Icons from '@/public/favicon.ico';
import telegram from '@/public/img/index/telegram.svg';
import whatsapp from '@/public/img/index/whatsapp.svg';
import linewave from '../../../public/img/index/line_wave.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image className='wave' src={linewave}  alt="Line footer wave" height={150} style={{width: '100%',}} priority />
      <div className={styles.footer_content}>
        <div className='container'>
          <div className='flex'>
            <div className='w-5'>
              <div className={`${styles.logo} logo_2 flex`}>
                <Image src={Icons} width={20} height={20} alt='Логотип компании Озон'/ >
                <b className='logo'>Озон Градуc</b>
              </div>
              <div className='info'>
              <p>© 2024 ООО Озон «Градус» - вакансия оператора склада г. Казань.</p>
              <ul>
              <li>Соглашения</li>
              <li><Link href='/agreements/'>Пользовательское соглашение</Link></li>
              <li><Link href='/agreements/privacy'>Политика конфиденциальности</Link></li>
              </ul>
              </div>
            </div>
            <div className='w-2 h-3'>
              <ul>
                <li>Разделы</li>
                <li><Link href='/'>Главная</Link></li>
                <li><Link href='/sections'>Разделы</Link></li>
                <li><Link href='/payment'>Оплата</Link></li>
                <li><Link href='/routes-car'>Маршруты</Link></li>
              </ul>
            </div>
            <div className='w-2 h-3'>
              <ul>
                <li>Клиентам</li>
                <li><a>О компании</a></li>
                <li><a href="#">Отзывы</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Вопросы и ответы</a></li>
              </ul>
            </div>
            <div className='w-3 h-6 coll_center'>
              <ul>
                <li>Колл-центр</li>
                <li><a href="https://e.mail.ru/compose/?to=relux.company@mail.ru">relux.company@mail.ru</a> - сотрудничество</li>
                <li><a href="tel:+79272333944">8 (927) 233-39-44</a> - обратный звонок</li>
                <li>Ежедневно с 10:00 - 22:00</li>
              </ul>
              <p>Есть вопросы? Пишите:</p>
             <div className='flex center'>
                <div><a className='contact' href="https://t.me/relux1337" target="_blank" rel="noopener noreferrer"><Image src={telegram} alt="Телеграм" /><span>Телеграм</span></a></div>
                <div><a className='contact' href="https://wa.me/89272333944" target="_blank" rel="noopener noreferrer"><Image src={whatsapp} alt="Whatsapp" /><span>Whatsapp</span></a></div>
             </div>
            </div>
          </div>
        </div>
      </div>
</footer>
  )
}