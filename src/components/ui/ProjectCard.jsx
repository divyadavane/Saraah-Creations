import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, category, description, gradient, image, index = 0 }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.imageWrap} style={{ background: image ? 'none' : gradient }}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : null}
        <div className={styles.imageOverlay}>
          <span className={styles.categoryBadge}>{category}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  );
}
