import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Оплата - сотрудника склада OZON  - г. Казань | Новая тура',
  description: 'Информация о выплатах на складе в компании Озон Градус г.Казань за различные участки',
  generator: 'Ozon Gradus',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://ozon-gradus.ru/'),
  keywords: ['Работа город казань', 'Работа г. Казань', 'Работа г казань склад', 'Работа г. Казань склад', 'Работа Казань склад озон', 'Озон склад', 'Работа озон склад', 'Вакансия озон склад', 'Вакансия озон Казань', 'Работа г Москва склад озон', 'Работа Москва склад', 'Вакансия озон г Москва склад', 'Вакансия вахта Казань', 'Вахта от 15 смен Казань', 'Вахта г Казань', 'Вахта склад Г. Казань'],
  creator: 'Плотников Ренат Рустамович',
  openGraph: {
    title: 'Оплата - сотрудника склада OZON  - г. Казань | Новая тура',
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
    canonical: '/payment',
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
            <div className='flex'>
              <div className='w-4 bonus'>
                <div className='block flex'>
                <i className="fa-duotone fa-people-simple"></i>
                  <div>
                    <h3>Приведи друга</h3>
                    <span>Человек, который пришёл от вас и отработал от <b>10</b> смен = <b>3 000</b>₽ вам!</span>
                  </div>
                </div>
              </div>
              <div className='w-4 bonus'>
                <div className='block bonus flex'>
                <i className="fa-regular fa-watch"></i>
                  <div>
                    <h3>Быстрая перевахтовка</h3>
                    <span>Если вы перевахтовываетесь за <b>7</b> дней на <b>2</b> вахту вам - <b>3 000</b>₽, на <b>3</b> вахту - <b>4 000</b>₽.</span>
                  </div>
                </div>
              </div>
              <div className='w-4 bonus'>
                <div className='block bonus flex'>
                <i className="fa-duotone fa-building-columns"></i>
                  <div>
                    <h3>Информация</h3>
                    <span>Выплаты происходят на карту без учёта налога! Налог составляет <b>6%</b></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
            <div className='w-8'>
              <div className='block'>
                <h1>Обновление</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Кол-во пиков</th>
                      <th className='text_center'>сумма за пик</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className='text_center'> 0 - 4 000</td><td className='text_center'>60 копеек</td></tr>
                    <tr><td className='text_center'>4 000 - 6 000</td><td className='text_center'>70 копеек</td></tr>
                    <tr><td className='text_center'>6 000 - более</td><td className='text_center'>80 копеек</td></tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className='w-4'>
              <div className='block'>
                <h1>Непрофильные операции</h1>
                <table className='non_table'>
                  <thead>
                    <tr>
                      <th>Операция</th>
                      <th className='text_center'>сумма</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Стажер (1-4 дня)</td><td>2 500 рублей</td></tr>
                    <tr><td>Перемещение ОУП</td><td>2 500 рублей</td></tr>
                    <tr><td>Отгрузка без ТСД</td><td>2 800 рублей</td></tr>
                    <tr><td>Отгрузка с ТСД</td><td>3 400 рублей</td></tr>
                    <tr><td>Непрофиль ОУП</td><td>2 200 рублей</td></tr>
                    <tr><td>Непрофиль производство</td><td>2 200 рублей</td></tr>
                    <tr><td>Непрофиль ТМЦ</td><td>2 200 рублей</td></tr>
                    <tr><td>ТМЦ</td><td>2 300 рублей</td></tr>       
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  