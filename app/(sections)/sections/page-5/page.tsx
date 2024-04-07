import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Подбор - склад OZON  г. Казань | Новая тура',
  description: 'Памятка - Подбор. Работа озон склад г. Казань',
  generator: 'Ozon Gradus',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://ozon-gradus.ru/'),
  keywords: ['Работа город казань', 'Работа г. Казань', 'Работа г казань склад', 'Работа г. Казань склад', 'Работа Казань склад озон', 'Озон склад', 'Работа озон склад', 'Вакансия озон склад', 'Вакансия озон Казань', 'Работа г Москва склад озон', 'Работа Москва склад', 'Вакансия озон г Москва склад', 'Вакансия вахта Казань', 'Вахта от 15 смен Казань', 'Вахта г Казань', 'Вахта склад Г. Казань'],
  creator: 'Плотников Ренат Рустамович',
  openGraph: {
    title: 'Подбор  - склад OZON  г. Казань | Новая тура',
    description: 'Памятка - Подбор. Работа озон склад г. Казань',
    url: 'https://ozon-gradus.ru/sections/page-5',
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
    canonical: '/sections/page-5',
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

export default function GenerlInfo() {
    return (
      <>
        <h1>Подбор</h1>
        <div className='text_center img-w50'>
        {Array.from({ length: 19 }, (_, index) => index + 1).map((photoNumber) => (
          <Image
            key={photoNumber}
            src={`/img/sections/tsc/photo_${photoNumber}.jpg`}
            width={500}
            height={500}
            alt="Подбор фото для сдачи экзамена"
            {...(photoNumber === 1 ? {} : { priority: false })}
            {...(photoNumber === 1 ? { loading: 'eager' } : { loading: 'lazy' })}
          />
        ))}
        </div>
      </>
    )
  }
  