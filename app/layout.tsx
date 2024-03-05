import { Suspense } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../public/style/ReluxCode.scss';
import '@/public/style/Index.scss';
import { Metrika } from '@/app/components/metrica_yandex/metrika';

import { GoogleAnalytics } from '@/app/components/metrica_yandex/GoogleAnalytics';


export const metadata: Metadata = {
  title: 'Работа | Вакансия сотрудника склада OZON  - г. Казань | Новая тура',
  description: 'Вакансия оператор склада от прямого работадателя.Вахта (15, 30, 45 дней и более) город Казань / Москва. Компания ООО Озон Градус - отзывы. Складная логистика'
}

const myFont = localFont({
  src: '../public/font/gteestiprodisplay_regular.otf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="all" />
<meta name="google-site-verification" content="25rznoP6S5Uuvc8k9IR6FaMEG7Yj8icY9OqfZz2utx4" />

        <meta name="keywords" content="Работа на складе, Вакансии оператора склада, Озон Градус, Вакансии складской логистики, Казань, Новая тура, Складская работа в Казани, Оператор складской логистики, Работа в ООО Озон Градус в Казани, Озон Градус вакансии, Работа в городе Казань, Присоединяйтесь к команде Озон Градус, Вакансии склада в Казани, Работа на складе в Озон Градус, Вакансии складского работника" />
        <meta name="owner" content="relux.company@mail.ru"/>
        <meta name="author" lang="ru" content="Плотников Ренат Рустамович"/>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="content-language" content="ru"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ozon-gradus.ru/" />
        <meta property="og:title" content="Работа | Вакансия сотрудником склада OZON  - г. Казань | Новая тура" />
        <meta property="og:description" content="Вакансия оператор склада от прямого работадателя. Вахта (15, 30, 45 дней и более) город Казань / Москва. Компания ООО Озон Градус - отзывы. Складная логистика" />
        <meta property="og:image" content="https://sun9-78.userapi.com/impg/RvKUInLLcG62G_Ew7f6OYKDRltie6qIDkqdfAw/_SuL6b9ukKM.jpg?size=1280x960&quality=95&sign=80eaa3d3857a35ed6e4c7ccae934828e&c_uniq_tag=w5FL5nveHZauC2ijOWDs37GHiVw2or8vqEdB9x5IS-g&type=album" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={myFont.className}>
        {children}
        <Suspense>
          <GoogleAnalytics />
          <Metrika />
        </Suspense>
      </body>
    </html>
  )
}
