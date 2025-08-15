import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar(){
    return(
        <nav className={styles.container}>
            <Link to="/Home" className={styles.links}>Home</Link>
            <Link to="/Projetos" className={styles.links}>Projetos</Link>
            <Link to="/Curriculo" className={styles.links}>Curriculo</Link>
        </nav>
    )
}