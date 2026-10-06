import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { Award } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section className="relative section-padding bg-ink-950">
      <div className="absolute inset-0 bg-radial-fade opacity-30" />
      <div className="relative section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              <span className="w-8 h-px bg-accent-300/50" />
              Education
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-ink-100 mb-10"
            >
              Academic <span className="text-gradient-accent">Background</span>
            </motion.h2>

            <div className="space-y-5">
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card glass-card-hover p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-300/5 border border-accent-300/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-accent-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-display font-semibold text-ink-100">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-ink-300 mt-0.5">{item.institution}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-ink-500">
                        <span>{item.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.field}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="section-label mb-4"
            >
              <span className="w-8 h-px bg-accent-300/50" />
              Certifications
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-ink-100 mb-10"
            >
              Continuous <span className="text-gradient-accent">Learning</span>
            </motion.h2>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card glass-card-hover p-4 flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-300/5 border border-accent-300/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-300/10 transition-colors duration-500">
                    <Award className="w-4 h-4 text-accent-300" />
                  </div>
                  <p className="text-sm font-medium text-ink-200">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
