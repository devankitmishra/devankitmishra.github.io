import { motion } from 'framer-motion';
import {
  Building2,
  FileText,
  CreditCard,
  Boxes,
  PenTool,
  type LucideIcon,
} from 'lucide-react';
import { whatIBuild } from '@/data/whatIBuild';

const ICONS: Record<string, LucideIcon> = {
  Building2,
  FileText,
  CreditCard,
  Boxes,
  PenTool,
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative section-padding bg-ink-950">
      <div className="absolute inset-0 bg-radial-fade opacity-40" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          <span className="w-8 h-px bg-accent-300/50" />
          What I Build
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-100 mb-4"
        >
          Categories of <span className="text-gradient-accent">Engineering Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-ink-400 text-base sm:text-lg max-w-2xl mb-16"
        >
          The types of production applications I build as a frontend-focused software engineer.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIBuild.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Building2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`glass-card glass-card-hover p-7 group relative overflow-hidden ${
                  i === 0 ? 'lg:col-span-2' : ''
                } ${i === 4 ? 'lg:col-span-1' : ''}`}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent-300/5 blur-3xl group-hover:bg-accent-300/10 transition-colors duration-700" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-300/5 border border-accent-300/10 flex items-center justify-center group-hover:bg-accent-300/10 group-hover:border-accent-300/20 transition-all duration-500">
                      <Icon className="w-5 h-5 text-accent-300" />
                    </div>
                    <span className="text-4xl font-display font-bold text-white/[0.04] group-hover:text-accent-300/10 transition-colors duration-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-ink-100 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-ink-400 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
