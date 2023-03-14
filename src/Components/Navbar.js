import Link from 'next/Link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div>
                <h1>PokeDex</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}