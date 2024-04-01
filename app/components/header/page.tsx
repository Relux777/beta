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
      <div className='container flex justify-space align-center'>
        <div className='left flex justify-space align-center'>
          <Link href='/' className='logo'><Image src='/favicon.ico' width={20} height={20} alt='Логотип компании Озон'/ >ozon градус</Link>
        </div>
        <div className="right flex justify-space align-center">
              <button className='products'  onClick={openModal}><span>Войти</span> <i className="fa-duotone fa-right-to-bracket"></i></button>
              <div className={isModalOpen ? 'modal show' : 'modal'}>
              <div className="modal_bg" onClick={closeModal}></div>
              <div className="modal_content">
                <div className="title">Авторизация</div>
                В разработке
              </div>
            </div>
        </div>
      </div>
      <div className='container flex justify-space align-center'>
      <ul className='flex'>
      <li><Link className={`link flex justify-space align-center ${pathname === '/' ? 'active' : ''}`} href="/"><span>Главная</span><i className="fa-duotone fa-house"></i></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname && pathname.includes('/sections') ? 'active' : ''}`} href="/sections"><span>Разделы</span><i className="fa-duotone fa-folder-open"></i></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname === '/payment' ? 'active' : ''}`} href="/payment"><span>Оплата</span><i className="fa-duotone fa-wallet"></i></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname === '/routes-car' ? 'active' : ''}`} href="/routes-car"><span>Маршруты</span><i className="fa-duotone fa-car"></i></Link></li>
      </ul>
      </div>
    </header>
  )
}