import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Code2,
  FileCode,
  Database,
  Wrench,
  Braces,
  FileJson,
  Hash,
  Terminal,
  Layers,
  Server,
  Box,
  Cloud,
  Figma,
  GitBranch,
  Globe,
  Palette,
  Cpu,
  Container,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SkillIcon = {
  icon: LucideIcon;
  color: string;
};

const skillIcons: Record<string, SkillIcon> = {
  JavaScript: { icon: FileJson, color: 'text-yellow-500' },
  TypeScript: { icon: FileCode, color: 'text-blue-500' },
  Python: { icon: Terminal, color: 'text-green-500' },
  Java: { icon: Cpu, color: 'text-orange-500' },
  SQL: { icon: Database, color: 'text-cyan-500' },
  React: { icon: Braces, color: 'text-cyan-400' },
  'Next.js': { icon: Globe, color: 'text-foreground' },
  'Vue.js': { icon: Layers, color: 'text-emerald-500' },
  'Tailwind CSS': { icon: Palette, color: 'text-teal-400' },
  'HTML/CSS': { icon: Code2, color: 'text-orange-400' },
  'Node.js': { icon: Server, color: 'text-green-600' },
  Express: { icon: Box, color: 'text-foreground' },
  NestJS: { icon: Hash, color: 'text-red-500' },
  PostgreSQL: { icon: Database, color: 'text-blue-400' },
  MongoDB: { icon: Database, color: 'text-green-500' },
  Git: { icon: GitBranch, color: 'text-orange-500' },
  Docker: { icon: Container, color: 'text-blue-500' },
  AWS: { icon: Cloud, color: 'text-orange-400' },
  Vercel: { icon: Globe, color: 'text-foreground' },
  Figma: { icon: Figma, color: 'text-purple-500' },
};

const skillCategories = [
  {
    title: 'Linguagens',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Ferramentas',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const containerTransition = {
  delayChildren: 0.1,
  staggerChildren: 0.1,
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <TooltipProvider delayDuration={100}>
      <section id="habilidades" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tecnologias e ferramentas que domino
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={containerTransition}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <h3 className="text-lg font-bold text-primary mb-6 font-mono">
                  {`<${category.title}/>`}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const skillData = skillIcons[skill] || {
                      icon: Code2,
                      color: 'text-primary',
                    };
                    const IconComponent = skillData.icon;

                    return (
                      <Tooltip key={skill}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className="p-3 rounded-lg bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30 cursor-pointer transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent
                              className={`w-6 h-6 ${skillData.color}`}
                            />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-medium">{skill}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
}
