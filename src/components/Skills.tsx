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
import type { IconType } from 'react-icons';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiFigma,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiNestjs,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { FaJava, FaPhp, FaAws, FaDatabase } from "react-icons/fa";

type SkillIcon = {
  icon: IconType;
  color: string;
};

const skillIcons: Record<string, SkillIcon> = {
  JavaScript: { icon: SiJavascript, color: 'text-yellow-500' },
  TypeScript: { icon: SiTypescript, color: 'text-blue-500' },
  Python: { icon: SiPython, color: 'text-blue-500' },
  Java: { icon: FaJava, color: 'text-orange-500' },
  SQL: { icon: FaDatabase, color: 'text-cyan-500' },
  MySQL: { icon: SiMysql, color: 'text-cyan-500' },
  React: { icon: SiReact, color: 'text-cyan-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-foreground' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-teal-400' },
  'HTML/CSS': { icon: Code2, color: 'text-orange-400' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-600' },
  NestJS: { icon: SiNestjs, color: 'text-red-500' },
  PostgreSQL: { icon: SiPostgresql, color: "text-blue-400" },
  MongoDB: { icon: SiMongodb, color: 'text-green-500' },
  Git: { icon: SiGit, color: 'text-orange-500' },
  Docker: { icon: SiDocker, color: 'text-blue-500' },
  AWS: { icon: FaAws, color: 'text-orange-400' },
  Vercel: { icon: SiVercel, color: 'text-foreground' },
  Figma: { icon: SiFigma, color: "text-purple-500" },
  PHP: { icon: FaPhp, color: 'text-green-500' },
  SQLite: { icon: SiSqlite, color: 'text-blue-300' },
};

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML/CSS', 'Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Java', 'PHP', 'Python'],
  },
  {
    title: 'Api & Dados',
    skills: [ 'MySQL', 'SQL', 'SQLite'],
  },
  {
    title: 'Ferramentas',
    skills: ['Git', 'Docker', 'Vercel', 'Figma'],
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
