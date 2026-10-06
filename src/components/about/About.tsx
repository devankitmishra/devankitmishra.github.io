import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';

export default function About() {
  const aboutParagraphs = profile.about.split('\n\n');

  const stats = [
    { label: 'Current Role', value: 'Software Engineer', icon: Briefcase },
    { label: 'Company', value: 'iServeU', icon: Briefcase },
    { label: 'Location', value: 'Bhubaneswar, India', icon: MapPin },
    { label: 'Education', value: 'MCA, IGIT Sarang', icon: GraduationCap },
  ];

  return (
    <section id="about" className="relative section-padding bg-ink-950">
      <div className="absolute inset-0 bg-radial-fade opacity-50" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          <span className="w-8 h-px bg-accent-300/50" />
          About
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-[1.2] text-ink-100"
            >
              Turning complex business requirements into{' '}
              <span className="text-gradient-accent">intuitive, maintainable interfaces</span>.
            </motion.h2>

            <div className="mt-8 space-y-4">
              {aboutParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-base sm:text-lg text-ink-400 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2 text-ink-500">
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-xs uppercase tracking-wider">{stat.label}</span>
                      </div>
                      <p className="text-sm font-medium text-ink-200">{stat.value}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-5 border-t border-white/[0.04]">
                <p className="text-xs uppercase tracking-wider text-ink-500 mb-3">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Enterprise Apps',
                    'LOS Platforms',
                    'Fintech Portals',
                    'Microfrontends',
                    'React Architecture',
                    'Digital Workflows',
                  ].map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
