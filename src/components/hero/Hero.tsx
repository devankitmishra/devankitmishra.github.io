import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Download, ChevronDown } from 'lucide-react';
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
    <div className="absolute inset-0">
      <Component reducedMotion={reducedMotion} />
    </div>
  );
};

const FallbackVisual = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-80 h-80">
      <div className="absolute inset-0 rounded-full border border-accent-300/10 animate-pulse-slow" />
      <div className="absolute inset-8 rounded-full border border-accent-300/15 animate-pulse-slow" />
      <div className="absolute inset-16 rounded-full border border-accent-300/20 animate-pulse-slow" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-300/30 to-accent-600/10 blur-2xl animate-pulse-slow" />
      </div>
      {['React', 'MongoDB', 'API', 'Database', 'Express'].map((label, i) => (
        <div
          key={label}
          className="absolute text-xs font-display font-semibold text-accent-300/50"
          style={{
            top: `${50 + 45 * Math.sin((i / 5) * Math.PI * 2)}%`,
            left: `${50 + 45 * Math.cos((i / 5) * Math.PI * 2)}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  </div>
);

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();
  const [titleIndex, setTitleIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % profile.rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  useEffect(() => {
    const hideScrollIndicator = () => setHasScrolled(true);
    window.addEventListener('scroll', hideScrollIndicator, { passive: true, once: true });
    return () => window.removeEventListener('scroll', hideScrollIndicator);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ink-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/30 to-ink-950" />

      {/* 3D scene */}
      {webglSupported && <Scene3D reducedMotion={reducedMotion} />}
      {!webglSupported && <FallbackVisual />}

      {/* Content */}
      <div className="relative z-10 section-container flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="badge bg-accent-300/5 border-accent-300/20 text-accent-300 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-300 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight text-shadow-glow"
        >
          <span className="text-gradient-ink">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-gradient-accent"
            >
              {profile.rotatingTitles[titleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-ink-400 leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button onClick={scrollToWork} className="btn-primary">
            View My Work
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Let&apos;s Connect
            <Mail className="w-4 h-4" />
          </button>
        </motion.div>

        {profile.resumeAvailable && (
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-4 text-sm text-ink-500 hover:text-accent-300 transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Download Resume
          </motion.a>
        )}
      </div>
      

      {/* Scroll indicator: shown once per page load, then fades out after scrolling. */}
      <AnimatePresence>
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={reducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-1 text-ink-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
