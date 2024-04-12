import { Suspense } from 'react';
import localFont from 'next/font/local';
import '@/public/style/ReluxCode.scss';
import '@/public/style/Index.scss';
import '@/public/style/fontawesome.min.css';
import '@/public/style/light.min.css';
import '@/public/style/duotone.min.css';
import '@/public/style/brands.min.css';
import { YandexAnalytics } from '@/app/components/metrika/YandexAnalytics';
import { GoogleAnalytics } from '@/app/components/metrika/GoogleAnalytics';



const myFont = localFont({
  src: '../public/webfonts/gteestiprodisplay_regular.otf',
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
        <meta name="google-adsense-account" content="ca-pub-6594048679075960"></meta>
        <script src="https://yandex.ru/ads/system/context.js" async />
      </head>
      <body className={myFont.className}>
        {children}
        <Suspense>
          <GoogleAnalytics />
          <YandexAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
