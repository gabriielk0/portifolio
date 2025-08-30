
import styles from './Sidebar.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img src="http://github.com/gabriielk0.png" alt="Logo do CodeConnect" className={styles.imagem}/>
      <h1 className={styles.textoPrincipal}>Gabriel de Carvalho Oliveira</h1>
      <p className={styles.textoSecundario}>
        Olá! Sou Gabriel, estudante de Ciências da Computação e estou no ulimo semestre.
        <br />
        Bem-vindo ao meu portfólio! Aqui você vai encontrar meus projetos, 
        criados com muito entusiasmo e dedicação.
        </p>
        <hr/>
      <nav>
        <ul className={styles.lista_sidebar}>
          <h3 className={styles.textoPrincipal}>Redes Sociais</h3>
          
          <li>
            <a href="#" className={styles.item__link}>
              <FaGithub />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <FaLinkedin/>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="#" className={styles.item__link}>
              <FaInstagram/>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}