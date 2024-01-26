import type { Metadata } from 'next'
import Image from 'next/image'
import photo_1 from '@/public/img/sections/razmeshchenie/photo_1.jpg';
import photo_2 from '@/public/img/sections/razmeshchenie/photo_2.jpg';
import photo_3 from '@/public/img/sections/razmeshchenie/photo_3.jpg';
import photo_4 from '@/public/img/sections/razmeshchenie/photo_4.jpg';
import photo_5 from '@/public/img/sections/razmeshchenie/photo_5.jpg';
import photo_6 from '@/public/img/sections/razmeshchenie/photo_6.jpg';
import photo_7 from '@/public/img/sections/razmeshchenie/photo_7.jpg';
import photo_8 from '@/public/img/sections/razmeshchenie/photo_8.jpg';
import photo_9 from '@/public/img/sections/razmeshchenie/photo_9.jpg';
import photo_10 from '@/public/img/sections/razmeshchenie/photo_10.jpg';
import photo_11 from '@/public/img/sections/razmeshchenie/photo_11.jpg';
import photo_12 from '@/public/img/sections/razmeshchenie/photo_12.jpg';
import photo_13 from '@/public/img/sections/razmeshchenie/photo_13.jpg';
import photo_14 from '@/public/img/sections/razmeshchenie/photo_14.jpg';
import photo_15 from '@/public/img/sections/razmeshchenie/photo_15.jpg';
import photo_16 from '@/public/img/sections/razmeshchenie/photo_16.jpg';
import photo_17 from '@/public/img/sections/razmeshchenie/photo_17.jpg';
import photo_18 from '@/public/img/sections/razmeshchenie/photo_18.jpg';
import photo_19 from '@/public/img/sections/razmeshchenie/photo_19.jpg';

export const metadata: Metadata = {
  title: 'Подбор',
  description: 'Работа озон склады г.Казань - памятка Подбор',
}

export default function GenerlInfo() {
    return (
      <>
        <h1>Подбор</h1>
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
          <Image src={photo_15} alt="Shadow" loading="lazy" />
          <Image src={photo_16} alt="Shadow" loading="lazy" />
          <Image src={photo_17} alt="Shadow" loading="lazy" />
          <Image src={photo_18} alt="Shadow" loading="lazy" />
          <Image src={photo_19} alt="Shadow" loading="lazy" />
        </div>
      </>
    )
  }
  