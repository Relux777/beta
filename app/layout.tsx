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
