import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Desenvolvedor Full Stack",
    company: "Empresa Atual",
    description: "Desenvolvimento de aplicações web modernas utilizando React, Node.js e TypeScript. Liderança técnica em projetos de alta complexidade.",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Desenvolvedor Front-end",
    company: "Empresa Anterior",
    description: "Criação de interfaces responsivas e acessíveis. Implementação de testes automatizados e boas práticas de desenvolvimento.",
    icon: Code,
  },
  {
    year: "2022",
    title: "Início na Programação",
    company: "Estudos & Projetos Pessoais",
    description: "Início da jornada como desenvolvedor, aprendendo fundamentos de programação e desenvolvendo projetos pessoais.",
    icon: GraduationCap,
  },
];

export function Career() {
  return (
    <section id="carreira" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Minha Trajetória</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O caminho que me trouxe até aqui
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-effect -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card rounded-xl p-6 hover-lift">
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-primary font-mono text-sm font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary/80 font-medium text-sm mb-3">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
