import Image from 'next/image'
import linewave from '../../../public/img/index/line_wave.svg';
import styles from './style.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={linewave}  alt="linewave" height={150} style={{width: '100%',}} priority />
      <div className={styles.footer_content}>
        <div className='container'>
          text
        </div>
      </div>
</footer>
  )
}