import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReducedMotion, useWebGLSupport } from '@/hooks/useMediaQuery';

const Scene3D = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const [Component, setComponent] = useState<React.ComponentType<{ reducedMotion: boolean }> | null>(null);

  useEffect(() => {
    import('@/components/three/EngineeringScene').then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) return null;

  return (
    <div className="absolute inset-0 opacity-30">
      <Component reducedMotion={reducedMotion} />
    </div>
  );
};

import { useState, useEffect } from 'react';

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();

  const contacts = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'devankitmishra',
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'devankitmishra',
      href: profile.github,
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="relative section-padding bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-40" />
      {webglSupported && <Scene3D reducedMotion={reducedMotion} />}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/80 to-ink-950" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4 justify-center"
        >
          <span className="w-8 h-px bg-accent-300/50" />
          Contact
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-center text-ink-100 mb-6"
        >
          Have an interesting<br />
          <span className="text-gradient-accent">problem to solve?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg text-ink-400 mb-16"
        >
          Let&apos;s build something useful.
        </motion.p>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover p-6 text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-300/5 border border-accent-300/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-300/10 group-hover:border-accent-300/20 transition-all duration-500">
                    <Icon className="w-5 h-5 text-accent-300" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-ink-500 mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-ink-200 flex items-center justify-center gap-1.5">
                    {contact.value}
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-600 group-hover:text-accent-300 transition-colors" />
                  </p>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-ink-500">
            {profile.name} — {profile.role}
          </p>
          <p className="text-xs text-ink-600">
            Built with React, TypeScript, Three.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
