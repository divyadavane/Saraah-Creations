'use client';

import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, cycleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={styles.symbolBtn} style={{ opacity: 0.5 }}>
        <Moon size={18} />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={cycleTheme}
      className={styles.symbolBtn}
      title={isDark ? 'Switch to Light Mode ☀️' : 'Switch to Dark Onyx Mode 🌙'}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Onyx Mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={styles.iconWrapper}
        >
          {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-emerald-400" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
