import { useState } from 'react';
import styles from './Sidebar.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão hambúrguer para mobile */}
      <button
        className={styles.hamburger}
        onClick={toggleSidebar}
        aria-label="Menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Overlay para fechar a sidebar quando clicar fora */}
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar} />}

      <aside className={`${styles.aside} ${isOpen ? styles.aside_open : ''}`}>
        <img
          src="http://github.com/gabriielk0.png"
          alt="Logo do CodeConnect"
          className={styles.imagem}
        />
        <h1 className={styles.textoPrincipal}>Gabriel de Carvalho Oliveira</h1>
        <p className={styles.textoSecundario}>
          Olá! Sou Gabriel, estudante de Ciências da Computação e estou no ulimo
          semestre.
          <br />
          Bem-vindo ao meu portfólio! Aqui você vai encontrar meus projetos,
          criados com muito entusiasmo e dedicação.
        </p>
        <hr />
        <nav>
          <h3 className={styles.textoPrincipal}>Redes Sociais</h3>
          <ul className={styles.lista_sidebar}>
            

            <li>
              <a href="#" className={styles.item__link} onClick={toggleSidebar}>
                <FaGithub />
                <span>Github</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.item__link} onClick={toggleSidebar}>
                <FaLinkedin />
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.item__link} onClick={toggleSidebar}>
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
