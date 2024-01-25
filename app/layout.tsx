import { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Metrika } from '@/app/components/metrica_yandex/metrika';
import '../public/style/ReluxCode.scss'
import '@/public/style/Index.scss'
import { Analytics } from '@vercel/analytics/react';


export const metadata: Metadata = {
  title: 'Работа на складе OZON - Вакансии операторов склада в компании Озон Градус',
  description: 'Вакансия работника склада OZON! Компания "Озон градус" в городе Казань приглашает операторов склада присоединиться к нашей профессиональной команде. Мы являемся ведущей компанией в своей отрасли и предлагаем множество возможностей для развития карьеры и личного профессионального роста.',
  
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
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.ozon-gradus.ru"/>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://www.ozon-gradus.ru/">
        <meta property="og:title" content="Работа на складе OZON - Вакансии операторов склада в компании Озон Градус" />
        <meta
          property="og:description"
          content="Вакансия работника склада OZON! Компания 'Озон градус' в городе Казань приглашает операторов склада присоединиться к нашей профессиональной команде. Мы являемся ведущей компанией в своей отрасли и предлагаем множество возможностей для развития карьеры и личного профессионального роста."
        />
        <meta
          property="og:image"
          content="https://sun9-78.userapi.com/impg/RvKUInLLcG62G_Ew7f6OYKDRltie6qIDkqdfAw/_SuL6b9ukKM.jpg?size=1280x960&quality=95&sign=80eaa3d3857a35ed6e4c7ccae934828e&c_uniq_tag=w5FL5nveHZauC2ijOWDs37GHiVw2or8vqEdB9x5IS-g&type=album"
        />
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
