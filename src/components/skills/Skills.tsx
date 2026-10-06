import { motion } from 'framer-motion';
import {
  Code2,
  LayoutDashboard,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillGroups, additionalTechnologies } from '@/data/skills';

const ICONS: Record<string, LucideIcon> = {
  Code2,
  LayoutDashboard,
  Server,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding bg-ink-950">
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
          Skills
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-100 mb-4"
        >
          Engineering <span className="text-gradient-accent">Ecosystem</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-ink-400 text-base sm:text-lg max-w-2xl mb-16"
        >
          Technologies and capabilities I use to build production applications —
          from frontend architecture to enterprise UI patterns.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Code2;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-card glass-card-hover p-6 ${
                  group.id === 'frontend' || group.id === 'enterprise-ui'
                    ? 'lg:col-span-1'
                    : ''
                } ${group.id === 'tools' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent-300/5 border border-accent-300/10 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-accent-300" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-ink-100">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-300 cursor-default ${
                        skill.level === 'primary'
                          ? 'bg-accent-300/5 border-accent-300/15 text-accent-200 hover:bg-accent-300/10'
                          : skill.level === 'secondary'
                            ? 'bg-white/[0.03] border-white/[0.06] text-ink-300 hover:bg-white/[0.06]'
                            : 'bg-white/[0.02] border-white/[0.04] text-ink-400'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass-card p-6"
        >
          <p className="text-xs uppercase tracking-wider text-ink-500 mb-4">
            Supporting Libraries & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {additionalTechnologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
