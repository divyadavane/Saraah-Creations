'use client';

import ScrollReveal from '../animations/ScrollReveal';
import styles from './SectionHeading.module.css';

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
  light = false,
  className = '',
}) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${light ? styles.light : ''} ${className}`}>
      {label && (
        <ScrollReveal variant="fadeUp" delay={0}>
          <span className={styles.label}>{label}</span>
        </ScrollReveal>
      )}
      <ScrollReveal variant="fadeUp" delay={0.1}>
        <h2 className={styles.title}>{title}</h2>
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" delay={0.15}>
        <div className={styles.goldLine}></div>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className={styles.subtitle}>{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
