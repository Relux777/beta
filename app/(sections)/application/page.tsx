import type { Metadata } from 'next'
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
import news from '@/public/img/news/1.jpg';

export const metadata: Metadata = {
  title: 'Новая анкета - Вакансия OZON комплектовщик склада Г.Казань',
  description: 'Информация о выплатах на складе в компании Озон Градус г.Казань за различные участки',
  generator: 'Ozon Gradus',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://ozon-gradus.ru/'),
  keywords: ['Работа город казань', 'Работа г. Казань', 'Работа г казань склад', 'Работа г. Казань склад', 'Работа Казань склад озон', 'Озон склад', 'Работа озон склад', 'Вакансия озон склад', 'Вакансия озон Казань', 'Работа г Москва склад озон', 'Работа Москва склад', 'Вакансия озон г Москва склад', 'Вакансия вахта Казань', 'Вахта от 15 смен Казань', 'Вахта г Казань', 'Вахта склад Г. Казань'],
  creator: 'Плотников Ренат Рустамович',
  openGraph: {
    title: 'Новая анкета - Вакансия OZON комплектовщик склада Г.Казань',
    description: 'Информация о выплатах на складе в компании Озон Градус г.Казань за различные участки',
    url: 'https://ozon-gradus.ru/payment',
    siteName: 'ozon-gradus.ru',
    images: [
      {
        url: 'https://sun9-78.userapi.com/impg/RvKUInLLcG62G_Ew7f6OYKDRltie6qIDkqdfAw/_SuL6b9ukKM.jpg?size=1280x960&quality=95&sign=80eaa3d3857a35ed6e4c7ccae934828e&c_uniq_tag=w5FL5nveHZauC2ijOWDs37GHiVw2or8vqEdB9x5IS-g&type=album', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://sun9-78.userapi.com/impg/RvKUInLLcG62G_Ew7f6OYKDRltie6qIDkqdfAw/_SuL6b9ukKM.jpg?size=1280x960&quality=95&sign=80eaa3d3857a35ed6e4c7ccae934828e&c_uniq_tag=w5FL5nveHZauC2ijOWDs37GHiVw2or8vqEdB9x5IS-g&type=album', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Вакансия оператор склада, складная логистика г.Казань озон',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: '/application',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function GeneralInfo() {
  return (
    <div className='content'>
      <section>
          <div className='container'>
          <h2 className='text_center'>Последние новости</h2>
            <div className='flex justify-center'>
              <div className='w-3'>
                <div className='news'>
                <Image src={news} alt="Озон градус склад Казань" loading='lazy' style={{ width: '100%', height: 'auto' }} />
                  <div className='info'>
                  <div className='date'>1 июня 2024 года</div>
                  <h2>Изменение ставок</h2>
                  <div className='text'>С 1 июня стартуют новые ставки (повышение)</div>
                  </div>
                </div>
              </div>
              <div className='w-3'>
                <div className='news'>
                <Image src={news} alt="Озон градус склад Казань" loading='lazy' style={{ width: '100%', height: 'auto' }} />
                  <div className='info'>
                  <div className='date'>1 июня 2024 года</div>
                  <h2>Изменение ставок</h2>
                  <div className='text'>С 1 июня стартуют новые ставки (повышение)</div>
                  </div>
                </div>
              </div>
              <div className='w-3'>
                <div className='news'>
                <Image src={news} alt="Озон градус склад Казань" loading='lazy' style={{ width: '100%', height: 'auto' }} />
                  <div className='info'>
                  <div className='date'>1 июня 2024 года</div>
                  <h2>Изменение ставок</h2>
                  <div className='text'>С 1 июня стартуют новые ставки (повышение)</div>
                  </div>
                </div>
              </div>
              <div className='w-3'>
                <div className='news'>
                <Image src={news} alt="Озон градус склад Казань" loading='lazy' style={{ width: '100%', height: 'auto' }} />
                  <div className='info'>
                  <div className='date'>1 июня 2024 года</div>
                  <h2>Изменение ставок</h2>
                  <div className='text'>С 1 июня стартуют новые ставки (повышение)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  