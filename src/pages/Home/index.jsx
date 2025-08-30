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
      <div>
        <h1 className={styles.titulo_pagina}>Meu Portifolio</h1>
      </div>

      <section>
        <h2 class={`${styles.titulo} ${styles.animate_fade_in}`}>
          🛠️ Tecnologias & Ferramentas
        </h2>
        <div class={styles.card_session}>
          <a href="https://cursos.alura.com.br/degree/certificate/a06d1d2c-8cb4-4081-9f88-aeab4bb173ab?lang=pt_BR"
            target='_blank' 
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaHtml5 class={`${styles.imagem} ${styles.icon_html}`} />
            <h3>HTML5</h3>
            <p>Avançado</p>
          </a>
          <a href='https://cursos.alura.com.br/degree/certificate/a06d1d2c-8cb4-4081-9f88-aeab4bb173ab?lang=pt_BR'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaCss3Alt class={`${styles.imagem} ${styles.icon_css}`} />
            <h3>CSS3</h3>
            <p>Avançado</p>
          </a>
          <a href='https://cursos.alura.com.br/degree/certificate/b5250a44-d755-472a-906d-5f02b6a69ccc?lang=pt_BR'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <IoLogoJavascript class={`${styles.imagem} ${styles.icon_js}`} />
            <h3>JavaScript</h3>
            <p>Avançado</p>
          </a>
          <a href='https://cursos.alura.com.br/degree/certificate/4914b96b-beac-4461-a7bb-550253d755c8?lang=pt_BR'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaReact class={`${styles.imagem} ${styles.icon_react}`} />
            <h3>React</h3>
            <p>Avançado</p>
          </a>
          <a href='#'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaPython class={`${styles.imagem} ${styles.icon_python}`} />
            <h3>Python</h3>
            <p>Iniciante</p>
          </a>
          <a href='#'
            target='_blank' 
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <SiJupyter class={`${styles.imagem} ${styles.icon_jupyter}`} />
            <h3>Jupyter</h3>
            <p>Iniciante</p>
          </a>
          <a href='https://www.dio.me/certificate/OVGKY8H3/share'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaGithub class={`${styles.imagem} ${styles.icon_github}`} />
            <h3>GitHub</h3>
            <p>Intermediário</p>
          </a>
          <a href='#'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaPhp class={`${styles.imagem} ${styles.icon_php}`} />
            <h3>PHP</h3>
            <p>Intermediário</p>
          </a>
          <a href='#'
            target='_blank'
            class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaLaravel class={`${styles.imagem} ${styles.icon_laravel}`} />
            <h3>Laravel</h3>
            <p>Intermediário</p>
          </a>
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
              Um sistema para gerir as informações de encontros de jovens em
              Paroquias
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
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a
                href="https://github.com/n0va1s/pnsl-ntm.git"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
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
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
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
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
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
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
                <AiOutlineGlobal class={styles.project_icon} />
                Vercel
              </a>
              <a
                href="#"
                class={`${styles.project_link} ${styles.glass_effect}`}
                target="_blank"
              >
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
              <h3 class={styles.jornada_title}>Início da Jornada (2019)</h3>
              <p class={styles.jornada_description}>
                Meu primeiro contato com a programação foi por meio de cursos
                online de HTML e CSS. A possibilidade de transformar ideias em
                interfaces visuais e ver o código ganhar vida despertou em mim
                uma paixão imediata. Além disso, enxerguei na programação a
                chance de ter liberdade para trabalhar de qualquer lugar, o que
                reforçou ainda mais meu desejo de seguir nesse caminho.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Interesse na Carreira (2020)</h3>
              <p class={styles.jornada_description}>
                Motivado a transformar esse interesse em profissão, participei
                do PAS (Programa de Avaliação Seriada), processo seletivo da
                UnB, e conquistei uma vaga em Engenharia da Computação. No
                entanto, por questões de localização e disponibilidade, não
                consegui dar continuidade a esse curso e precisei abrir mão da
                oportunidade. Mesmo assim, minha vontade de ingressar na área
                não diminuiu.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>
                Inicio da especialização (2022)
              </h3>
              <p class={styles.jornada_description}>
                Sem desistir do meu objetivo, iniciei minha graduação em Ciência
                da Computação pela Cruzeiro do Sul Virtual. O formato de ensino
                a distância me permitiu equilibrar trabalho e estudos,
                garantindo que eu pudesse me dedicar à área sem comprometer
                minha saúde e desempenho. Foi nesse período que comecei a
                desenvolver meus primeiros projetos reais.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>
                Primeira Experiência Profissional, Estágio(2025)
              </h3>
              <p class={styles.jornada_description}>
                Durante três anos, atuei como auxiliar administrativo em uma
                construtora. Nesse tempo, participei de atividades na igreja,
                onde conheci pessoas da área de tecnologia que me incentivaram a
                seguir em frente. Esse networking abriu portas e, finalmente,
                conquistei minha primeira vaga como estagiário no Serpro, onde
                iniciei minha trajetória prática no desenvolvimento de sistemas.
              </p>
            </div>
          </div>

          <div class={styles.jornada_item}>
            <div class={styles.jornada_dot}></div>
            <div class={styles.jornada_content}>
              <h3 class={styles.jornada_title}>Futuro</h3>
              <p class={styles.jornada_description}>
                Atualmente, me preparo para concluir a graduação em Ciência da
                Computação no final de 2025. Minha meta é seguir crescendo como
                desenvolvedor de sistemas, participando de projetos que me
                desafiem e expandam meu conhecimento. Graças às conexões que
                construí, já iniciei iniciativas em equipe, o que me trouxe
                ainda mais experiência e motivação para o futuro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
