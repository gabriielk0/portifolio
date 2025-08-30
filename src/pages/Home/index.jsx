import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaPhp,
  FaLaravel,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiJupyter } from 'react-icons/si';
import { AiOutlineGlobal } from 'react-icons/ai';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main class={styles.body}>
      <section>
        <h2 class={`${styles.titulo} ${styles.animate_fade_in}`}>
          🛠️ Tecnologias & Ferramentas
        </h2>
        <div class={styles.card_session}>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaHtml5 class={`${styles.imagem} ${styles.icon_html}`} />
            <h3>HTML5</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaCss3Alt class={`${styles.imagem} ${styles.icon_css}`} />
            <h3>CSS3</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <IoLogoJavascript class={`${styles.imagem} ${styles.icon_js}`} />
            <h3>JavaScript</h3>
            <p>Especialista</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaReact class={`${styles.imagem} ${styles.icon_react}`} />
            <h3>React</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaPython class={`${styles.imagem} ${styles.icon_python}`} />
            <h3>Python</h3>
            <p>Intermediário</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <SiJupyter class={`${styles.imagem} ${styles.icon_jupyter}`} />
            <h3>Jupyter</h3>
            <p>Intermediário</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaPhp class={`${styles.imagem} ${styles.icon_php}`} />
            <h3>PHP</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaLaravel class={`${styles.imagem} ${styles.icon_laravel}`} />
            <h3>Laravel</h3>
            <p>Avançado</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class={`${styles.titulo} ${styles.animate_fade_in}`}>
          🚀 Meus Projetos
        </h2>
        <div class={styles.project_session}>
          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div>
              <img
                src="https://i.imgur.com/jpgajvz.jpeg"
                alt="Dashboard administrativo moderno com gráficos e métricas em tempo real para gestão de negócios"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3>Não Tenhais Medo</h3>
            <p>
                Um sistema para gerir as informações de encontros de jovens em Paroquias
            </p>
            <div class={styles.tech_tags}>
              <span class={`${styles.tech_tag} ${styles.tech_tag_php}`}>
                PHP
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_laravel}`}>
                Laravel
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_sqlite}`}>
                SQLite
              </span>
              
            </div>
            <div class={styles.project_link_session}>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <FaGithub class={styles.project_icon} />
                Github
              </a>
            </div>
          </div>

          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div>
              <img
                src="https://placehold.co/600x400"
                alt="Aplicativo mobile de e-commerce com interface limpa e carrinho de compras intuitivo"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">E-commerce Mobile</h3>
            <p class="text-sm opacity-90 mb-3">
              Aplicativo de compras com carrinho, pagamentos e sistema de
              avaliações integrado.
            </p>
            <div class={styles.tech_tags}>
              <span class={`${styles.tech_tag} ${styles.tech_tag_native}`}>
                React Native
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_firebase}`}>
                Firebase
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_stripe}`}>
                Stripe
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_alura}`}>
                Alura
              </span>
            </div>
            <div class={styles.project_link_session}>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <FaGithub class={styles.project_icon} />
                Github
              </a>
            </div>
          </div>

          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div>
              <img
                src="https://placehold.co/600x400"
                alt="Interface de blog moderno com layout responsivo e sistema de comentários em tempo real"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Plataforma de Blog</h3>
            <p class="text-sm opacity-90 mb-3">
              Sistema de publicação de artigos com editor rich-text e
              comentários em tempo real.
            </p>
            <div class={styles.tech_tags}>
              <span class={`${styles.tech_tag} ${styles.tech_tag_next}`}>
                Next.js
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_postgres}`}>
                PostgreSQL
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_prisma}`}>
                Prisma
              </span>
            </div>
            <div class={styles.project_link_session}>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <FaGithub class={styles.project_icon} />
                Github
              </a>
            </div>
          </div>

          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div>
              <img
                src="https://placehold.co/600x400"
                alt="Dashboard analítico com visualizações de dados e métricas de performance para tomada de decisão"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p class="text-sm opacity-90 mb-3">
              Ferramenta de análise de dados com gráficos interativos e
              relatórios personalizáveis.
            </p>
            <div class={styles.tech_tags}>
              <span class={`${styles.tech_tag} ${styles.tech_tag_vue}`}>
                Vue.js
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_d3}`}>
                D3.js
              </span>
              <span class={`${styles.tech_tag} ${styles.tech_tag_express}`}>
                Express
              </span>
            </div>
            <div class={styles.project_link_session}>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a href="#" class={`${styles.project_link} ${styles.glass_effect}`}>
                <FaGithub class={styles.project_icon} />
                Github
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class={`${styles.jornada_section} ${styles.animate_fade_in}`}>
        <h2 class={`${styles.titulo} ${styles.animate_fade_in}`}>
          📖 Minha Jornada
        </h2>
        <div class={styles.jornada_container}>
          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Início da Jornada (2018)</h3>
              <p class={styles.jornada_description}>
                Meu primeiro contato com programação foi através de cursos
                online de HTML e CSS. A paixão por criar interfaces e ver o
                código ganhar vida me motivou a seguir nesta área.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Primeiro Projeto Real (2019)</h3>
              <p class={styles.jornada_description}>
                Desenvolvi meu primeiro site freelance para um pequeno negócio
                local. A experiência de trabalhar com clientes reais me ensinou
                muito sobre prazos e expectativas.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Especialização (2020-2021)</h3>
              <p class={styles.jornada_description}>
                Me aprofundei em JavaScript, React e Node.js. Participei de
                bootcamps intensivos e construí projetos complexos que
                solidificaram meu conhecimento em desenvolvimento full-stack.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Atualmente (2022-2023)</h3>
              <p class={styles.jornada_description}>
                Trabalhando como desenvolvedor freelancer, focando em criar
                soluções escaláveis e de alta qualidade. Continuo aprendendo
                novas tecnologias e melhorando minhas habilidades
                constantemente.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Futuro</h3>
              <p class={styles.jornada_description}>
                Planejo me especializar em arquitetura de software e machine
                learning, sempre buscando criar impacto positivo através da
                tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
