
import styles from './Sidebar.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Sidebar() {

  return (
    <>
      <aside className={`${styles.aside}`}>
        <div>
          <h1 className={styles.titulo_pagina}>Meu Portifolio</h1>
        </div>
        <div className={styles.perfil}>
          <img
            src="http://github.com/gabriielk0.png"
            alt="Logo do CodeConnect"
            className={styles.imagem}
            />
          <div>
            <h1 className={styles.textoPrincipal}>Gabriel de Carvalho Oliveira</h1>
            <p className={styles.textoSecundario}>
              Olá! Sou Gabriel, estudante de Ciências da Computação e estou no ulimo
              semestre.
              <br />
              Bem-vindo ao meu portfólio! Aqui você vai encontrar meus projetos,
              criados com muito entusiasmo e dedicação.
            </p>
            <p className={styles.textoSecundarioResp}>
              <strong>Estudante de Ciência da Computação </strong>
              <br />
              (último semestre)
              <br />
              <strong>Bem-vindo ao meu portfólio! </strong>
            </p>
            <hr/>
            <nav>
              <h3 className={styles.subtitulo}>Redes Sociais</h3>
              <ul className={styles.lista_sidebar}>
                <li>
                  <a href="#" className={styles.item__link}>
                    <FaGithub />
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.item__link} >
                    <FaLinkedin />
                    <span>Linkedin</span>
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.item__link}>
                    <FaInstagram />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </aside>
    </>
  );
}
