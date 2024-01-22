'use client'

import Link from 'next/link'
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
                    <Link className={`products flex justify-space align-center ${pathname === '/sections' ? 'active' : ''}`} href="/sections"><span>Войти</span></Link>
                    <Link className={`products flex justify-space align-center ${pathname === '/sections/page-1' ? 'active' : ''}`} href="/sections/page-1"><span>asfasf</span></Link>
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
