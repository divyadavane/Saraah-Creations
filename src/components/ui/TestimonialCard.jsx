'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ quote, name, role, index = 0 }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Quote size={28} className={styles.quoteIcon} />
      <p className={styles.quote}>{quote}</p>
      <div className={styles.divider}></div>
      <div className={styles.author}>
        <div className={styles.avatar}>{name.charAt(0)}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
