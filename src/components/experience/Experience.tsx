import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-ink-950">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-20" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          <span className="w-8 h-px bg-accent-300/50" />
          Experience
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-100 mb-16"
        >
          Professional <span className="text-gradient-accent">Journey</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent-300/30 via-white/5 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent-300 md:-translate-x-1/2 ring-4 ring-ink-950 z-10">
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-accent-300 animate-ping" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card glass-card-hover p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-display font-semibold text-ink-100">
                          {item.role}
                        </h3>
                        <p className="text-accent-300 font-medium text-sm mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      {item.current && (
                        <span className="badge bg-accent-300/10 border-accent-300/20 text-accent-300">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-ink-500 mb-3">
                      <span>{item.period}</span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-sm text-ink-400 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.featuredAreas && (
                      <div className="mt-4 pt-4 border-t border-white/[0.04]">
                        <p className="text-xs uppercase tracking-wider text-ink-500 mb-2">
                          Featured Areas
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.featuredAreas.map((area) => (
                            <span key={area} className="tech-tag">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
