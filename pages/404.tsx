import Link from 'next/link';
import '@/public/style/ReluxCode.scss';
import '@/public/style/Index.scss';
import '@/public/style/duotone.min.css';


export default function Custom404() {
  return (
    <div className='not_found' style={{ background: '#000000', color: '#a1a1a1', position: 'fixed', width: '100%', height: '100%', textAlign: 'center', fontSize: '16px', paddingTop: '10%' }}>
      <i className="fa-duotone fa-circle-exclamation fa-bounce" style={{ fontSize: '140px', color: '#ff7676' }}></i>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, страница, которую вы ищете, не существует.</p>
      <Link href="/">
        <a>Вернуться на главную страницу</a>
      </Link>
    </div>
  );
}
