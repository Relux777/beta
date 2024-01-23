import { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Metrika } from '@/app/components/metrica_yandex/metrika';
import '../public/style/ReluxCode.scss'
import '@/public/style/Index.scss'


export const metadata: Metadata = {
  title: 'Вакансии операторов склада в компании Озон Градус | Карьерный рост и профессиональное развитие ✔️',
  description: 'Компания "Озон градус" в городе Казань приглашает операторов склада присоединиться к нашей профессиональной команде. Мы являемся ведущей компанией в своей отрасли и предлагаем множество возможностей для развития карьеры и личного профессионального роста.',
  
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
        <link rel="canonical" href="https://example.com"/>
        <meta name="yandex-verification" content="933ba147daf41364" />
      </head>
      <body className={myFont.className}>
        {children}
        <Suspense>
          <Metrika />
        </Suspense>
      </body>
    </html>
  )
}
