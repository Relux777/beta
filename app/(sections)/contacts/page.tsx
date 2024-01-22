import type { Metadata } from 'next'
import Image from 'next/image'

import vk from '@/public/img/index/vk.svg';
import telegram from '@/public/img/index/telegram.svg';
import whatsapp from '@/public/img/index/whatsapp.svg';
import mail from '@/public/img/index/mail.svg';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/map/page'), { ssr: false })

export const metadata: Metadata = {
  title: 'Контент 4',
  description: 'Generated by create next app',
}

export default function GeneralInfo() {
  return (
    <div className='content'>
      <section>
          <div className='container'>
            <div className='flex'>
              <div className='w-7'>
                <div className='block'>
                  <h1>Наш адресс:</h1>
                  <span>Респ. Татарстан, р-н Зеленодольский, с. Новая Тура, 19</span> <br /><br />
                  <Map />
                </div>
              </div>
              <div className='w-5'>
                  <div className='block'>
                      <h1 className='text_center'>Наши контакты</h1>
                      <div className='flex align-center justify-space text_center'>
                        <div className='w-3'><a className='contact' href="https://t.me/relux1337" target="_blank" rel="noopener noreferrer"><Image src={telegram} alt="Телеграм" /><span>Телеграм</span></a></div>
                        <div className='w-3'><a className='contact' href="https://wa.me/89272333944" target="_blank" rel="noopener noreferrer"><Image src={whatsapp} alt="Whatsapp" /><span>Whatsapp</span></a></div>
                        <div className='w-3'><a className='contact' href="https://vk.com/relux1337" target="_blank" rel="noopener noreferrer"><Image src={vk} alt="ВКонтакте" /><span>ВКонтакте</span></a></div>
                        <div className='w-3'><a className='contact' href="https://e.mail.ru/compose/?to=relux.company@mail.ru" target="_blank" rel="noopener noreferrer"><Image src={mail} alt="Майл" /><span>Mail.ru</span></a></div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  