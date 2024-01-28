import type { Metadata } from 'next'
import Image from 'next/image'
import img_1 from '@/public/img/payment/ico_1.svg';
import img_2 from '@/public/img/payment/ico_2.svg';
import img_3 from '@/public/img/payment/ico_3.svg';

export const metadata: Metadata = {
  title: 'Оплата',
  description: 'Информация о выплатах на складе в компании Озон Градус г.Казань за различные участки'
}

export default function GeneralInfo() {
  return (
    <div className='content'>
      <section>
          <div className='container'>
            <div className='flex'>
              <div className='w-4'>
                <div className='block bonus flex'>
                  <Image src={img_1} alt="ico" className='img-1' width={40}/>
                  <div>
                    <h3>Приведи друга</h3>
                    <span>Человек, который пришёл от вас и отработал от <b>10</b> смен = <b>3 000</b> рублей вам!</span>
                  </div>
                </div>
              </div>
              <div className='w-4'>
                <div className='block bonus flex'>
                  <Image src={img_2} alt="ico" className='img-1' width={40}/>
                  <div>
                    <h3>Быстрая перевахтовка</h3>
                    <span>Если вы перевахтовываетесь за <b>7</b> дней на <b>2</b> вахту вам - <b>3 000</b>₽, на <b>3</b> вахту - <b>4 000</b>₽.</span>
                  </div>
                </div>
              </div>
              <div className='w-4'>
                <div className='block bonus flex'>
                  <Image src={img_3} alt="ico" className='img-1' width={40}/>
                  <div>
                    <h3>Информация</h3>
                    <span>Выплаты происходят <b>2</b> раза в месяц на карту через <b>'Мой налог'</b> без учёта налога! Налог 6%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
            <div className='w-4'>
              <div className='block'>
                <h1>Инвентаризация</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Кол-во пиков</th>
                      <th className='text_center'>сумма за процент</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className='text_center'> 0 - 4 000</td><td className='text_center'>60 копеек</td></tr>
                    <tr><td className='text_center'>4 000 - 6 000</td><td className='text_center'>70 копеек</td></tr>
                    <tr><td className='text_center'>6 000 - более</td><td className='text_center'>80 копеек</td></tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className='w-4'>
              <div className='block'>
                <h1>Все операции</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Ставки</th>
                      <th className='text_center'>сумма за процент</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className='text_center'> 0 - 70%</td><td className='text_center'>34 ₽</td></tr>
                    <tr><td className='text_center'>70% - 100%</td><td className='text_center'>37 ₽</td></tr>
                    <tr><td className='text_center'>100% - 150%</td><td className='text_center'>39 ₽</td></tr>
                    <tr><td className='text_center'>150% - более</td><td className='text_center'>41 ₽</td></tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div className='w-4'>
              <div className='block'>
                <h1>Непрофильные операции</h1>
                <table className='non_table'>
                  <thead>
                    <tr>
                      <th>Операция</th>
                      <th className='text_center'>сумма</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Непрофиль Производство</td><td>2 000 ₽</td></tr>
                    <tr><td>Непрофиль ОУП</td><td>2 000 ₽</td></tr>
                    <tr><td>Непрофиль ТМЦ</td><td>2 000 ₽</td></tr>
                    <tr><td>КроссДок</td><td>2 200 ₽</td></tr>
                    <tr><td>ЗПХ</td><td>2 300 ₽</td></tr>
                    <tr><td>Отгрузка без ТСД</td><td>2 400 ₽</td></tr>
                    <tr><td>Отгрузка с ТСД</td><td>3 000 ₽</td></tr>
                    <tr><td>ТСЦ</td><td>3 000 ₽</td></tr>
                    <tr><td>МУС</td><td>3 000 ₽</td></tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
  }
  