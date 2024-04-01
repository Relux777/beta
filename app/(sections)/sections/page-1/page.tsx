import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Многоуровневая сортировка (МУС) - склад OZON  г. Казань | Новая тура',
  description: 'Памятка - Многоуровневая сортировка (МУС). Работа озон склад г. Казань',
}

export default function GenerlInfo() {
    return (
      <>
      <h1>Многоуровневая сортировка (МУС)</h1>
      <div className='text_center img-w50'>
      {Array.from({ length: 14 }, (_, index) => index + 1).map((photoNumber) => (
          <Image
            key={photoNumber}
            src={`/img/sections/tsc/photo_${photoNumber}.jpg`}
            width={500}
            height={500}
            alt="Многоуровневая сортировка (МУС) фото для сдачи экзамена"
            {...(photoNumber === 1 ? {} : { priority: false })}
            {...(photoNumber === 1 ? { loading: 'eager' } : { loading: 'lazy' })}
          />
        ))}
        </div>
      </>
    )
  }
  