import styles from './Navbar.module.css';

export default function Navbar(){
    return(
        <nav className={styles.container}>
            <a href="#" className={styles.links}>Home</a>
            <a href="#" className={styles.links}>Projetos</a>
            <a href="#" className={styles.links}>Curriculo</a>
        </nav>
    )
}