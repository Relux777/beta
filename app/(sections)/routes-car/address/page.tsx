import type { Metadata } from 'next'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/map/page'), { ssr: false })

export const metadata: Metadata = {
  title: 'Наш адрес - склада OZON г. Казань | Новая тура',
  description: 'Адрес склада озон г. Казань (Новая тура, Зеленодольск, Волжск, Проспект победы, Яшлек, Салават, Столбище, Максимова)',
  generator: 'Ozon Gradus',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://ozon-gradus.ru/'),
  keywords: ['Работа город казань', 'Работа г. Казань', 'Работа г казань склад', 'Работа г. Казань склад', 'Работа Казань склад озон', 'Озон склад', 'Работа озон склад', 'Вакансия озон склад', 'Вакансия озон Казань', 'Работа г Москва склад озон', 'Работа Москва склад', 'Вакансия озон г Москва склад', 'Вакансия вахта Казань', 'Вахта от 15 смен Казань', 'Вахта г Казань', 'Вахта склад Г. Казань'],
  creator: 'Плотников Ренат Рустамович',
  openGraph: {
    title: 'Наш адрес - склада OZON г. Казань | Новая тура',
    description: 'Адрес склада озон г. Казань (Новая тура, Зеленодольск, Волжск, Проспект победы, Яшлек, Салават, Столбище, Максимова)',
    url: 'https://ozon-gradus.ru/routes-car/address',
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
    canonical: '/routes-car/address',
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
            <div className='flex'>
              <div className='w-6'>
                <div className='block'>
                    <h1>Наш адрес:</h1>
                    <span>Респ. Татарстан, р-н Зеленодольский, с. Новая Тура, 19</span> <br /><br />
                    <Map />
                  </div>
              </div>
              <div className='w-6'>
                  <div className='block'>
                    <h1>Общественный транспорт</h1>
                    <span>Для пешехода, если едет со стороны Казани: доезжает на автобусе 117 либо 104 до остановки Рынок Новая Тура. Двигается
                    параллельно рынку по дороге, по направлению к ФФ. Проходит КПП и спускается вниз (по асфальтной дороге). Здание ФФ
                    синего цвета. с розовой полоской. Спустившись вниз, кандидат увидит парковку. На ее территории стоит 2х этажное здание,
                    на нем написано БЮРО ПРОПУСКОВ. Отдел персонала находится на 2ом этаже, кабинет No6.
                    Для пешехода, если едет со стороны Зеленодольска:
                    С автовокзала Мирный, автобус No 104, до остановки Рынок Новая тура.</span>
                  </div>
                  <div className='block'>
                    <h1>Собственное авто</h1>
                    <span>Въезд со стороны трассы М-7. Поворот на Объект 784. Кандидат доезжает до пункта КПП . Звонит в Отдел персонала и
                    сообщает номер автомобиля. На территории парковки стоит 2х этажное здание, на нем написано БЮРО ПРОПУСКОВ.
                    Отдел персонала находится на 2ом этаже, кабинет No6.</span>
                  </div>
              </div>
            </div>
  )
  }
  