import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Оплата',
  description: 'Информация о выплатах на складе в компании Озон Градус г.Казань за различные участки'
}

export default function GeneralInfo() {
  return (
    <div className='content'>
      <section>
          <div className='container'>
            <div className='flex'>
              <div className='w-4'>
                Происходит обновление информации
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  