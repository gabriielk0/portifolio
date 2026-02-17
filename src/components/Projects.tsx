import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  SiPhp,
  SiLaravel,
  SiSqlite,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiD3Dotjs,
  SiJavascript,
} from 'react-icons/si';

const AluraIcon = () => {
  return (
    <div
      className="w-6 h-6 flex items-center justify-center rounded-md
      bg-muted text-muted-foreground
      transition-colors duration-150 ease-in-out
      group-hover:bg-blue-900 
      group-hover:text-white"
    >
      <span className="font-lato font-light text-white text-sm leading-none">
        a
      </span>
    </div>
  );
};

const techIcons: Record<string, { icon: JSX.Element; className: string }> = {
  PHP: {
    icon: <SiPhp />,
    className:
      'text-muted-foreground group-hover:text-indigo-400 transition-colors',
  },
  JavaScript: {
    icon: <SiJavascript />,
    className:
      'text-muted-foreground group-hover:text-yellow-400 transition-colors',
  },
  Laravel: {
    icon: <SiLaravel />,
    className:
      'text-muted-foreground group-hover:text-red-500 transition-colors',
  },
  SQLite: {
    icon: <SiSqlite />,
    className:
      'text-muted-foreground group-hover:text-blue-700 transition-colors',
  },
  'Next.js': {
    icon: <SiNextdotjs />,
    className:
      'text-muted-foreground group-hover:text-foreground transition-colors',
  },
  TypeScript: {
    icon: <SiTypescript />,
    className:
      'text-muted-foreground group-hover:text-blue-500 transition-colors',
  },
  Prisma: {
    icon: <SiPrisma />,
    className:
      'text-muted-foreground group-hover:text-slate-500 transition-colors',
  },
  Tailwind: {
    icon: <SiTailwindcss />,
    className:
      'text-muted-foreground group-hover:text-cyan-500 transition-colors',
  },
  React: {
    icon: <SiReact />,
    className:
      'text-muted-foreground group-hover:text-cyan-400 transition-colors',
  },
  'D3.js': {
    icon: <SiD3Dotjs />,
    className:
      'text-muted-foreground group-hover:text-orange-500 transition-colors',
  },
  Express: {
    icon: <SiExpress />,
    className:
      'text-muted-foreground group-hover:text-foreground transition-colors',
  },
  MongoDB: {
    icon: <SiMongodb />,
    className:
      'text-muted-foreground group-hover:text-green-600 transition-colors',
  },
  Supabase: {
    icon: <SiSupabase />,
    className:
      'text-emerald-400 group-hover:text-emerald-500 transition-colors',
  },
  Vercel: {
    icon: <SiVercel />,
    className:
      'text-muted-foreground group-hover:text-foreground transition-colors',
  },
  Alura: {
    icon: <AluraIcon />,
    className: 'text-muted-foreground',
  },
};

const projects = [
  {
    title: 'Não Tenhais Medo',
    description:
      'Um sistema para gerir as informações de encontros de jovens em Paroquias',
    technologies: ['PHP', 'Laravel', 'SQLite'],
    githubUrl: 'https://github.com/n0va1s/pnsl-ntm.git',
    liveUrl: 'https://pnsl.fe.digital',
    image: 'https://i.imgur.com/IsneH1v.jpeg',
  },
  {
    title: 'Space App',
    description:
      'Galeria de imagens do espaço que reúne fotos de estrelas, galáxias, luas e nebulosas organizadas para visualização.',
    technologies: ['Alura', 'React', 'JavaScript'],
    githubUrl: 'https://github.com/gabriielk0/space-app',
    liveUrl: 'https://space-app-kappa-blond.vercel.app/',
    image: 'https://i.imgur.com/HMOHXoP.png',
  },
  {
    title: 'Fokus',
    description:
      'Aplicação inspirada na técnica Pomodoro que auxilia na organização do tempo por meio de ciclos de 25 minutos de foco intercalados com pausas estratégicas, promovendo maior produtividade e concentração',
    technologies: ['Alura', 'React', 'JavaScript'],
    githubUrl: 'https://github.com/gabriielk0/fokus',
    liveUrl: 'https://fokus-chi-lac.vercel.app/',
    image: 'https://i.imgur.com/MZcBuCN.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <TooltipProvider delayDuration={100}>
      <section id="projetos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Alguns dos projetos que desenvolvi
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="glass-card rounded-xl hover-lift group"
              >
                {/* Project Image */}
                <div className="relative h-48">
                  {/* Container da imagem (com overflow) */}
                  <div className="absolute inset-0 overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent rounded-t-xl" />

                  {/* Action buttons overlay */}
                  <div className="absolute top-3 right-3 flex gap-2 z-50">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="h-9 w-9 bg-background/80 backdrop-blur-sm hover:bg-background border border-border/50"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver repositório no GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Ver Repositório</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          className="h-9 w-9 bg-primary/90 backdrop-blur-sm hover:bg-primary"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver site ao vivo"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Ver Site</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 text-xl">
                    {project.technologies.map((tech) => {
                      const techData = techIcons[tech];
                      if (!techData) return null;

                      return (
                        <Tooltip key={tech}>
                          <TooltipTrigger asChild>
                            <div className="p-2 rounded-lg bg-card border border-border hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-muted">
                              {React.cloneElement(techData.icon, {
                                size: 22,
                                className: techData.className,
                              })}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tech}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
}
