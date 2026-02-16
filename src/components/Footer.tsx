import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/gabriielk0', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/gabriel-carvalho-o/',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/gabriiel.code/',
    label: 'Instagram',
  },
  { icon: Mail, href: 'mailto:oliveiracgabriel052@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* CTA */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Vamos <span className="gradient-text">trabalhar juntos</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full glass-card hover:border-primary/50 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" />{' '}
            por{' '}
            <span className="text-primary font-medium">Gabriel Carvalho</span>
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
