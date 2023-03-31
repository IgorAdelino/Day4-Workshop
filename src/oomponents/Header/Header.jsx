import { Link } from 'react-router-dom'

import styles from './Header.module.css'
function Header(){

    return(
        <header className={styles.cabecalho}>
            <h1>Pokémon</h1>
            <nav className={styles.menu}>

                <ul>

                    <li><Link to="/" >Home</Link></li>
                    <li> <Link to="/pokemon">Pokemon</Link> </li>

                </ul>
            </nav>
        
        </header>
    )
}

export default Header