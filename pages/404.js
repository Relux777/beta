import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='not_found'>
      <i class="fa-duotone fa-circle-exclamation fa-bounce"></i>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, страница, которую вы ищете, не существует.</p>
      <Link href="/">
        <a>Вернуться на главную страницу</a>
      </Link>
    </div>
  );
}