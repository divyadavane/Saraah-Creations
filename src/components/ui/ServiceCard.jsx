'use client';

import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description, index = 0, color = 'green' }) {
  return (
    <motion.div
      className={`${styles.card} ${styles[color]}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.iconWrap}>
        <span className={styles.iconInner}>{icon}</span>
      </div>
      <div className={styles.number}>0{index + 1}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.bottomLine}></div>
    </motion.div>
  );
}
