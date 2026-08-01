'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TextReveal({
  text,
  className = '',
  tag = 'h2',
  delay = 0,
  staggerDelay = 0.03,
  once = true,
  style = {},
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const Tag = motion[tag] || motion.h2;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em', perspective: '1000px', ...style }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
