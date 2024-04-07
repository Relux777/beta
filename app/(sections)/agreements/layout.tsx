'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react';

export default function AgreementsLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname()

    return (
        <div className='content'>
        <section>
          <div className='container'>
          <ul className='horizontal_menu flex'>
            <li><Link className={`link flex justify-space align-center ${pathname === '/agreements' ? 'active' : ''}`} href="/agreements"><span>Пользовательское соглашение</span></Link></li>
            <li><Link className={`link flex justify-space align-center ${pathname && pathname.includes('/agreements/privacy') ? 'active' : ''}`} href="/agreements/privacy"><span>Политика конфиденциальности</span></Link></li>
          </ul>   
          {children}
        </div>
        </section>
        </div>
    )
  }