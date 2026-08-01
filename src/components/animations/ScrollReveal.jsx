'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.2,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      variants={variants[variant] || variants.fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
