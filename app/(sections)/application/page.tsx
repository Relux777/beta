import type { Metadata } from 'next'
import dynamic from 'next/dynamic';

const New_application = dynamic(() => import('@/app/components/new_application/page'))
const Accordians = dynamic(() => import('@/app/components/accordion/page'))

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
          <div className="block info text_center"><h1 className="mr_0">Отправь анкету, и мы обязательно ответим в ближайшее время!</h1></div>
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
                    <Accordians />
                    </div>
                </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  