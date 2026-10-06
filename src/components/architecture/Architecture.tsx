import { motion } from 'framer-motion';
import {
  ClipboardList,
  Blocks,
  Palette,
  Plug,
  ShieldCheck,
  Workflow,
  Rocket,
  ArrowDown,
  type LucideIcon,
} from 'lucide-react';
import { architectureLayers } from '@/data/architecture';

const ICONS: Record<string, LucideIcon> = {
  ClipboardList,
  Blocks,
  Palette,
  Plug,
  ShieldCheck,
  Workflow,
  Rocket,
};

export default function Architecture() {
  return (
    <section id="architecture" className="relative section-padding bg-ink-950">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-15" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          <span className="w-8 h-px bg-accent-300/50" />
          Approach
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-100 mb-4 max-w-3xl"
        >
          How I Think About <span className="text-gradient-accent">Engineering</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-ink-400 text-base sm:text-lg max-w-2xl mb-16"
        >
          Building production applications is more than writing components. It&apos;s a
          layered process from understanding requirements to delivering maintainable software.
        </motion.p>

        <div className="relative max-w-3xl mx-auto">
          {/* Central line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-accent-300/30 via-white/5 to-accent-300/30" />

          <div className="space-y-4">
            {architectureLayers.map((layer, i) => {
              const Icon = ICONS[layer.icon] ?? ClipboardList;
              return (
                <div key={layer.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="relative flex items-center gap-5 group"
                  >
                    {/* Node */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-ink-900 border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-accent-300/20 group-hover:bg-accent-300/5 transition-all duration-500">
                      <Icon className="w-5 h-5 text-ink-400 group-hover:text-accent-300 transition-colors duration-500" />
                    </div>

                    {/* Card */}
                    <div className="glass-card glass-card-hover p-5 flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-display font-bold text-accent-300/40">
                          0{i + 1}
                        </span>
                        <h3 className="text-base font-display font-semibold text-ink-100">
                          {layer.label}
                        </h3>
                      </div>
                      <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Arrow between layers */}
                  {i < architectureLayers.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                      className="flex justify-center py-1"
                    >
                      <ArrowDown className="w-3.5 h-3.5 text-ink-600" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
