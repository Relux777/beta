import { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Metrika } from '@/app/components/metrica_yandex/metrika';
import '../public/style/ReluxCode.scss'
import '@/public/style/Index.scss'
import { Analytics } from '@vercel/analytics/react';


export const metadata: Metadata = {
  title: 'Работа на складе OZON - Вакансии операторов склада в компании ооо "Озон Градус" город Казань / Новая тура',
  description: 'Ищите работу на складе OZON в городе Казань? Компания ооо "Озон Градус" предлагает вакансии операторов склада. Присоединяйтесь к нам и станьте частью команды в городе Казань / Новая тура. Наша вакансия складской логистики ждет вас.',
  
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

        <meta name="keywords" content="Работа на складе, Вакансии оператора склада, Озон Градус, Вакансии складской логистики, Казань, Новая тура, Складская работа в Казани, Оператор складской логистики, Работа в ООО Озон Градус в Казани, Озон Градус вакансии, Работа в городе Казань, Присоединяйтесь к команде Озон Градус, Вакансии склада в Казани, Работа на складе в Озон Градус, Вакансии складского работника" />
        <meta name="owner" content="relux.company@mail.ru"/>
        <meta name="author" lang="ru" content="Плотников Ренат Рустамович"/>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="content-language" content="ru"/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ozon-gradus.ru/" />
        <meta property="og:title" content="Работа на складе OZON - Вакансии операторов склада в компании Озон Градус город Казань / Новая тура" />
        <meta property="og:description" content="Ищите работу на складе OZON в городе Казань? Компания ооо Озон Градус предлагает вакансии операторов склада. Присоединяйтесь к нам и станьте частью команды в городе Казань / Новая тура. Наша вакансия складской логистики ждет вас." />
        <meta property="og:image" content="https://sun9-78.userapi.com/impg/RvKUInLLcG62G_Ew7f6OYKDRltie6qIDkqdfAw/_SuL6b9ukKM.jpg?size=1280x960&quality=95&sign=80eaa3d3857a35ed6e4c7ccae934828e&c_uniq_tag=w5FL5nveHZauC2ijOWDs37GHiVw2or8vqEdB9x5IS-g&type=album" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={myFont.className}>
        {children}
        <Suspense>
          <Analytics />
          <Metrika />
        </Suspense>
      </body>
    </html>
  )
}
