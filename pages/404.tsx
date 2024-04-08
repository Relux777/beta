import Link from 'next/link';
import type { Metadata } from 'next'
import localFont from 'next/font/local';
import '@/public/style/ReluxCode.scss';
import '@/public/style/fontawesome.min.css';
import '@/public/style/duotone.min.css';

const myFont = localFont({
  src: '../public/webfonts/gteestiprodisplay_regular.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '404 - Страница не найдена',
  description: '404 - Извините, страница, которую вы ищете, не существует.',
}

export default function Custom404() {
  return (
    <div className={myFont.className}>
      <div className='not_found' style={{ background: '#000000', color: '#a1a1a1', position: 'fixed', width: '100%', height: '100%', textAlign: 'center', fontSize: '16px', paddingTop: '10%' }}>
      <i className="fa-duotone fa-circle-exclamation fa-bounce" style={{ fontSize: '140px', color: '#ff7676' }}></i>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, страница, которую вы ищете, не существует.</p>
      <Link href="/">
        <a>Вернуться на главную страницу</a>
      </Link>
    </div>
    </div>
  );
}
