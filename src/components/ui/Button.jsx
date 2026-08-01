'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticWrapper from '../animations/MagneticWrapper';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon = false,
  className = '',
  ...props
}) {
  const classNames = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  const inner = (
    <>
      <span className={styles.btnText}>{children}</span>
      {icon && (
        <motion.span
          className={styles.btnIcon}
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <MagneticWrapper strength={0.15}>
        <motion.a
          href={href}
          className={classNames}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          {...props}
        >
          {inner}
        </motion.a>
      </MagneticWrapper>
    );
  }

  return (
    <MagneticWrapper strength={0.15}>
      <motion.button
        className={classNames}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      >
        {inner}
      </motion.button>
    </MagneticWrapper>
  );
}
