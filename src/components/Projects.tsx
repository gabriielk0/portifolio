import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'Plataforma completa de e-commerce com carrinho, checkout e painel administrativo. Desenvolvido com React, Node.js e PostgreSQL.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com/gabrielcarvalho/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
  },
  {
    title: 'Task Manager',
    description:
      'Aplicação de gerenciamento de tarefas com autenticação, colaboração em equipe e notificações em tempo real.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    githubUrl: 'https://github.com/gabrielcarvalho/task-manager',
    liveUrl: 'https://task-manager-demo.vercel.app',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Dashboard interativo para visualização de dados com gráficos dinâmicos e exportação de relatórios.',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/gabrielcarvalho/dashboard',
    liveUrl: 'https://dashboard-demo.vercel.app',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
  },
  {
    title: 'Blog Platform',
    description:
      'Sistema de blog com editor rich text, SEO otimizado e sistema de comentários integrado.',
    technologies: ['Next.js', 'MDX', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/gabrielcarvalho/blog',
    liveUrl: 'https://blog-demo.vercel.app',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
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
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

                  {/* Action buttons overlay */}
                  <div className="absolute top-3 right-3 flex gap-2">
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
                      <TooltipContent>
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
                      <TooltipContent>
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
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
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
