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
            <div className='flex'>
                <div className='w-12'>
                <ul className='horizontal_menu flex'>
                    <li><Link className={`link flex justify-space align-center ${pathname === '/routes-car' ? 'active' : ''}`} href="/routes-car"><span>Маршруты</span></Link></li>
                    <li><Link className={`link flex justify-space align-center ${pathname && pathname.includes('/routes-car/address') ? 'active' : ''}`} href="/routes-car/address"><span>Наш адрес</span></Link></li>
                </ul>  
                </div>
            </div>
          {children}
        </div>
        </section>
        </div>
    )
  }