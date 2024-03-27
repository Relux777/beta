'use client'
 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import HomeIcon from '@/app/components/image/Home'
import OzonTableIcon from '@/app/components/image/OzonTable'
import PayIcon from '@/app/components/image/Pay'
import CarIcon from '@/app/components/image/Car'

const Forum = dynamic(() => import('@/app/components/forum/page'), { ssr: false })


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

// <Link className={`link flex justify-space align-center ${pathname === '/login' ? 'active' : ''}`} href="/login"><span>Войти</span><Image src={login} alt="login" /></Link>
  return (
    <header className={`${pathname === '/' ? 'index_head' : ''}`}>
      <div className='container flex justify-space align-center'>
        <div className='left flex justify-space align-center'>
          <div className='logo'>ozon градус</div>
        </div>
        <div className="right flex justify-space align-center">
            <button className='products' onClick={openModal}><span>Оставить заявку</span></button>
            <div className={isModalOpen ? 'modal show' : 'modal'}>
              <div className="modal_bg" onClick={closeModal}></div>
              <div className="modal_content">
                <div className="title">Новая заявка</div>
                <Forum />
              </div>
            </div>
        </div>
      </div>
      <div className='container flex justify-space align-center'>
      <ul className='flex'>
      <li><Link className={`link flex justify-space align-center ${pathname === '/' ? 'active' : ''}`} href="/"><span>Главная</span><HomeIcon width='20' height='20' /></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname && pathname.includes('/sections') ? 'active' : ''}`} href="/sections"><span>Разделы</span><OzonTableIcon width='20' height='20' /></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname === '/payment' ? 'active' : ''}`} href="/payment"><span>Оплата</span><PayIcon width='20' height='20' /></Link></li>
      <li><Link className={`link flex justify-space align-center ${pathname === '/routes-car' ? 'active' : ''}`} href="/routes-car"><span>Маршруты</span><CarIcon width='20' height='20' /></Link></li>
      </ul>
      </div>
    </header>
  )
}