'use client'

import Link from 'next/link'
import Image from 'next/image'
import ozon_table from '@/public/img/index/ozon_table.svg';
import { usePathname } from 'next/navigation'


export default function Content({
    children, 
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()
    return (
          <div className='content'>
            <section>
                <div className='container'>
                <div className='flex'>
                  <div className='w-3'>
                  <menu>
                    <Link className={`flex block-ozon mr_bt_10 align-center ${pathname === '/sections' ? 'active' : ''}`} href="/sections">
                      <div className='ico flex align-center justify-center'><Image src={ozon_table} alt='озон иконка'/></div>
                      <span>Размещение</span>
                    </Link>
                    <Link className={`flex block-ozon mr_bt_10 align-center ${pathname === '/sections/page-1' ? 'active' : ''}`} href="/sections/page-1">
                      <div className='ico flex align-center justify-center'><Image src={ozon_table} alt='озон иконка'/></div>
                      <span>Сортировка (МУС)</span>
                    </Link>
                    <Link className={`flex block-ozon mr_bt_10 align-center ${pathname === '/sections/page-2' ? 'active' : ''}`} href="/sections/page-2">
                      <div className='ico flex align-center justify-center'><Image src={ozon_table} alt='озон иконка'/></div>
                      <span>Отгрузка</span>
                    </Link>
                    <Link className={`flex block-ozon mr_bt_10 align-center ${pathname === '/sections/page-3' ? 'active' : ''}`} href="/sections/page-3">
                      <div className='ico flex align-center justify-center'><Image src={ozon_table} alt='озон иконка'/></div>
                      <span>ТСЦ</span>
                    </Link>
                    <Link className={`flex block-ozon mr_bt_10 align-center ${pathname === '/sections/page-4' ? 'active' : ''}`} href="/sections/page-4">
                      <div className='ico flex align-center justify-center'><Image src={ozon_table} alt='озон иконка'/></div>
                      <span>КроссДок</span>
                    </Link>
                    <Link className={`flex block-ozon mr_bt_10 align-center ${pathname === '/sections/page-1' ? 'active' : ''}`} href="/sections/page-1">
                      <div className='ico flex align-center justify-center'><Image src={ozon_table} alt='озон иконка'/></div>
                      <span>Подбор</span>
                    </Link>
                  </menu>
                  </div>
                  <div className='w-9'>
                    <div className='block'>
                      {children}
                    </div>
                  </div>
                </div> 
                </div>
              </section>
          </div>
    )
  }
