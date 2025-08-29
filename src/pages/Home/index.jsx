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
import styles from './Home.module.css';

export default function Home() {
  return (
    <main class={styles.body}>
      <section class="mb-12">
        <h2 class={`${styles.titulo} ${styles.animate_fade_in}`}>
          🛠️ Tecnologias & Ferramentas
        </h2>
        <div class={styles.card_session}>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaHtml5 class={styles.imagem} />
            <h3>HTML5</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaCss3Alt class={styles.imagem} />
            <h3>CSS3</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <IoLogoJavascript class={styles.imagem} />
            <h3>JavaScript</h3>
            <p>Especialista</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaReact class={styles.imagem} />
            <h3>React</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaPython class={styles.imagem} />
            <h3>Python</h3>
            <p>Intermediário</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <SiJupyter class={styles.imagem} />
            <h3>Jupyter</h3>
            <p>Intermediário</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaPhp class={styles.imagem} />
            <h3>PHP</h3>
            <p>Avançado</p>
          </div>
          <div class={`${styles.glass_effect} ${styles.tech_card}`}>
            <FaLaravel class={styles.imagem} />
            <h3>Laravel</h3>
            <p>Avançado</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class={`${styles.titulo} ${styles.animate_fade_in}`}>
          🚀 Meus Projetos
        </h2>
        <div class={styles.project_session}>
          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div class="mb-4 rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Dashboard administrativo moderno com gráficos e métricas em tempo real para gestão de negócios"
                class="w-full h-48 object-cover"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Sistema de Gestão</h3>
            <p class="text-sm opacity-90 mb-3">
              Plataforma completa para gerenciamento de projetos e tarefas com
              dashboard interativo.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-500/20 rounded text-xs">
                React
              </span>
              <span class="px-2 py-1 bg-green-500/20 rounded text-xs">
                Node.js
              </span>
              <span class="px-2 py-1 bg-purple-500/20 rounded text-xs">
                MongoDB
              </span>
            </div>
            <a
              href="#"
              class="text-blue-300 hover:text-blue-200 text-sm font-medium"
            >
              Ver projeto →
            </a>
          </div>

          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div class="mb-4 rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Aplicativo mobile de e-commerce com interface limpa e carrinho de compras intuitivo"
                class="w-full h-48 object-cover"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">E-commerce Mobile</h3>
            <p class="text-sm opacity-90 mb-3">
              Aplicativo de compras com carrinho, pagamentos e sistema de
              avaliações integrado.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-400/20 rounded text-xs">
                React Native
              </span>
              <span class="px-2 py-1 bg-red-500/20 rounded text-xs">
                Firebase
              </span>
              <span class="px-2 py-1 bg-yellow-500/20 rounded text-xs">
                Stripe
              </span>
            </div>
            <a
              href="#"
              class="text-blue-300 hover:text-blue-200 text-sm font-medium"
            >
              Ver projeto →
            </a>
          </div>

          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div class="mb-4 rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Interface de blog moderno com layout responsivo e sistema de comentários em tempo real"
                class="w-full h-48 object-cover"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Plataforma de Blog</h3>
            <p class="text-sm opacity-90 mb-3">
              Sistema de publicação de artigos com editor rich-text e
              comentários em tempo real.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-600/20 rounded text-xs">
                Next.js
              </span>
              <span class="px-2 py-1 bg-gray-500/20 rounded text-xs">
                PostgreSQL
              </span>
              <span class="px-2 py-1 bg-green-600/20 rounded text-xs">
                Prisma
              </span>
            </div>
            <a
              href="#"
              class="text-blue-300 hover:text-blue-200 text-sm font-medium"
            >
              Ver projeto →
            </a>
          </div>

          <div class={`${styles.project_card} ${styles.glass_effect}`}>
            <div class="mb-4 rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/600x400"
                alt="Dashboard analítico com visualizações de dados e métricas de performance para tomada de decisão"
                class="w-full h-48 object-cover"
                onerror="this.style.backgroundColor='#2d3748'"
              />
            </div>
            <h3 class="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p class="text-sm opacity-90 mb-3">
              Ferramenta de análise de dados com gráficos interativos e
              relatórios personalizáveis.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-purple-600/20 rounded text-xs">
                Vue.js
              </span>
              <span class="px-2 py-1 bg-orange-500/20 rounded text-xs">
                D3.js
              </span>
              <span class="px-2 py-1 bg-teal-500/20 rounded text-xs">
                Express
              </span>
            </div>
            <a
              href="#"
              class="text-blue-300 hover:text-blue-200 text-sm font-medium"
            >
              Ver projeto →
            </a>
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
