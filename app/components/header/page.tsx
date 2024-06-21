'use client'
 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {

  // Link active class add
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={`${pathname === '/' ? 'index_head' : ''}`}>
      <div className='container flex justify-space align-center menu-top'>
        <div className='left flex justify-space align-center'>
          <Link href='/' className='logo'><Image src='/favicon.ico' width={20} height={20} alt='Логотип компании Озон'/ >ozon градус</Link>
        </div>
        <div className="right flex justify-space align-center">
              <button className='products'  onClick={openModal}><span>г. Казань</span> <i className="fa-duotone fa-location-dot"></i></button>
              <div className={isModalOpen ? 'modal show' : 'modal'}>
              <div className="modal_bg" onClick={closeModal}></div>
              <div className="modal_content">
                <div className="title">Выберите город</div>
                <select name="" id="">
                  <option value="" >Республика татарстан, г. Казань</option>
                </select>
              </div>
            </div>
        </div>
      </div>
      <div className='container flex justify-space align-center menu-header'>
      <ul className='flex'>
      <li><Link className={`link flex justify-space align-center ${pathname === '/' ? 'active' : ''}`} href="/"><i className="fa-duotone fa-house"></i><span>Главная</span></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname && pathname.includes('/sections') ? 'active' : ''}`} href="/sections"><i className="fa-duotone fa-folder-open"></i><span>Разделы</span></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname === '/payment' ? 'active' : ''}`} href="/payment"><i className="fa-duotone fa-wallet"></i><span>Оплата</span></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname && pathname.includes('/routes-car') ? 'active' : ''}`}  href="/routes-car"><i className="fa-duotone fa-car"></i><span>Маршруты</span></Link></li>
      </ul>
      </div>
    </header>
  )
}