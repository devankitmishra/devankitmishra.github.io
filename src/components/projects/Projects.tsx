import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  ExternalLink,
  Github,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import { professionalWork } from "@/data/professionalWork";
import { personalProjects } from "@/data/projects";

type Tab = "professional" | "personal";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("personal");

  return (
    <section id="work" className="relative section-padding bg-ink-950">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-15" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          <span className="w-8 h-px bg-accent-300/50" />
          Work Showcase
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-ink-100 mb-12"
        >
          Projects & <span className="text-gradient-accent">Work</span>
        </motion.h2>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 rounded-full bg-ink-900/60 border border-white/[0.04] w-fit mb-10">
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "personal"
                ? "bg-accent-300 text-ink-950"
                : "text-ink-400 hover:text-ink-100"
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            Personal Projects
          </button>
          <button
            onClick={() => setActiveTab("professional")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === "professional"
                ? "bg-accent-300 text-ink-950"
                : "text-ink-400 hover:text-ink-100"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Professional Work
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "professional" ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-5"
            >
              {professionalWork.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover p-6 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start justify-between mb-4">
                    <span className="badge bg-accent-300/5 border-accent-300/15 text-accent-300">
                      <Briefcase className="w-3 h-3" />
                      {project.category}
                    </span>
                    {project.confidential && (
                      <Lock className="w-4 h-4 text-ink-600" />
                    )}
                  </div>

                  <h3 className="text-xl font-display font-semibold text-ink-100 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-sm text-ink-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-ink-500">
                        Role
                      </span>
                      <p className="text-sm text-ink-200 mt-0.5">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-ink-500">
                        Key Engineering Areas
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.keyAreas.map((area) => (
                          <span key={area} className="tech-tag">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 glass-card p-6 flex items-center gap-4"
              >
                <Lock className="w-5 h-5 text-ink-600 flex-shrink-0" />
                <p className="text-sm text-ink-500">
                  Professional projects represent real enterprise work. Details
                  are generalized to protect confidential client information. No
                  internal URLs, APIs, or proprietary architecture are exposed.
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {personalProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover p-6 group"
                >
                  <span className="badge bg-white/[0.04] border-white/[0.06] text-ink-300 mb-4">
                    <FolderOpen className="w-3 h-3" />
                    {project.category}
                  </span>

                  <h3 className="text-lg font-display font-semibold text-ink-100 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-sm text-ink-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-ink-500">
                      Key Areas
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.keyAreas.map((area) => (
                        <span key={area} className="tech-tag">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent-300 hover:text-accent-200 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-ink-100 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
              >
                <Github className="w-8 h-8 text-ink-600 mb-3" />
                <p className="text-sm text-ink-500 mb-3">
                  More projects on GitHub
                </p>
                <a
                  href="https://github.com/devankitmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-4 py-2"
                >
                  Visit GitHub
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
