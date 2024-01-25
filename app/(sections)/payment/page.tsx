import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Оплата',
  description: 'Информация о выплатах в компании Озон Градус за различные участки'
}

export default function GeneralInfo() {
  return (
    <div className='content'>
      <section>
          <div className='container'>
            Обновление информации
          </div>
      </section>
    </div>
  )
  }
  