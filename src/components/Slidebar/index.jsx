
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img src="http://github.com/gabriielk0.png" alt="Logo do CodeConnect" className={styles.imagem}/>
      <nav>
        <ul className={styles.lista_sidebar}>
          <h1 className={styles.textoPrincipal}>Gabriel de Carvalho Oliveira</h1>
          <li>
            <a href="#" className={styles.item__link}>
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src="{Feed}" alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src="{Account}" alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src="{Info}" alt="" />
              <span>Sobre Nós</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <img src="{Logout}" alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}