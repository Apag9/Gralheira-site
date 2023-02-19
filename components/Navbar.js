import Link from 'next/link'
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ulnav}>
        <li>
          <Link href="/">
            <p>Início</p>
          </Link>
        </li>

        <li>
          <Link href="/historia" >
            <p>História</p>
          </Link>
        </li>
        
        <li>
          <Link href="/establecimentos" >
            <p>Establecimentos</p>
          </Link>
        </li>
        <li>
          <Link href="/noticias" >
            <p>Notícias</p>
          </Link>
        </li>

        <li>
          <Link href="/Eventos" >
            <p>Eventos</p>
          </Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar
