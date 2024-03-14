import type { Metadata } from 'next'
import Image from 'next/image'
import photo_1 from '@/public/img/sections/mus/photo_1.jpg';
import photo_2 from '@/public/img/sections/mus/photo_2.jpg';
import photo_3 from '@/public/img/sections/mus/photo_3.jpg';
import photo_4 from '@/public/img/sections/mus/photo_4.jpg';
import photo_5 from '@/public/img/sections/mus/photo_5.jpg';
import photo_6 from '@/public/img/sections/mus/photo_6.jpg';
import photo_7 from '@/public/img/sections/mus/photo_7.jpg';
import photo_8 from '@/public/img/sections/mus/photo_8.jpg';
import photo_9 from '@/public/img/sections/mus/photo_9.jpg';
import photo_10 from '@/public/img/sections/mus/photo_10.jpg';
import photo_11 from '@/public/img/sections/mus/photo_11.jpg';
import photo_12 from '@/public/img/sections/mus/photo_12.jpg';
import photo_13 from '@/public/img/sections/mus/photo_13.jpg';
import photo_14 from '@/public/img/sections/mus/photo_14.jpg';

export const metadata: Metadata = {
  title: 'Многоуровневая сортировка (МУС)- склад OZON  г. Казань | Новая тура',
  description: 'Памятка - Многоуровневая сортировка (МУС). Работа озон склад г. Казань',
}

export default function GenerlInfo() {
    return (
      <>
      <h1>Многоуровневая сортировка (МУС)</h1>
      <div className='text_center img-w50'>
          <Image src={photo_1} alt="Shadow" loading="lazy" />
          <Image src={photo_2} alt="Shadow" loading="lazy" />
          <Image src={photo_3} alt="Shadow" loading="lazy" />
          <Image src={photo_4} alt="Shadow" loading="lazy" />
          <Image src={photo_5} alt="Shadow" loading="lazy" />
          <Image src={photo_6} alt="Shadow" loading="lazy" />
          <Image src={photo_7} alt="Shadow" loading="lazy" />
          <Image src={photo_8} alt="Shadow" loading="lazy" />
          <Image src={photo_9} alt="Shadow" loading="lazy" />
          <Image src={photo_10} alt="Shadow" loading="lazy" />
          <Image src={photo_11} alt="Shadow" loading="lazy" />
          <Image src={photo_12} alt="Shadow" loading="lazy" />
          <Image src={photo_13} alt="Shadow" loading="lazy" />
          <Image src={photo_14} alt="Shadow" loading="lazy" />
        </div>
      </>
    )
  }
  