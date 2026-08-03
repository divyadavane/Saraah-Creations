'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Film, Award, Calendar, Globe, Clapperboard } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SplitText from '@/components/animations/SplitText';
import Button from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import styles from './portfolio.module.css';

const aarti = projectsData[0];

export default function Portfolio() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={`${styles.heroHeading} text-fire-gradient kinetic-hover`}>
              Our Work
            </h1>
            <p className={styles.heroSub}>
              Every frame tells a story. Explore the cinematic journey of Saraah Creation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AARTI: FULL CINEMATIC SHOWCASE */}
      <section className={styles.filmShowcase}>
        <div className="container">
          {/* Film Header */}
          <div className={styles.filmHeader}>
            <ScrollReveal variant="fadeUp">
              <span className={`glass-badge ${styles.filmBadge}`}>DIRECTORIAL DEBUT • FEATURE FILM</span>
              <h2 className={`${styles.filmTitle} text-champagne-gold glow-text-gold kinetic-hover`}>
                Aarti: The Unknown Love Story
              </h2>
              <p className={styles.filmByline}>
                Written, Produced & Directed by <strong>Sarika Mahesh Mene</strong>
              </p>
            </ScrollReveal>
          </div>

          {/* Main Content Grid */}
          <div className={styles.filmGrid}>
            {/* Poster Column */}
            <ScrollReveal variant="slideLeft">
              <div className={styles.posterSection}>
                <div className={styles.posterFrame}>
                  <Image
                    src="/images/aarti-poster.png"
                    alt="Aarti The Unknown Love Story Official Poster"
                    width={480}
                    height={600}
                    className={styles.posterImage}
                    priority
                  />
                  <div className={styles.posterOverlay}></div>
                </div>

                {/* Ratings below poster */}
                <div className={styles.ratingsGrid}>
                  <div className={styles.ratingCardGold}>
                    <Star className={styles.ratingStarIcon} size={20} />
                    <span className={styles.ratingNumber}>8.0</span>
                    <span className={styles.ratingPlatform}>IMDb</span>
                    <span className={styles.ratingDetail}>26 Verified Ratings</span>
                  </div>
                  <div className={styles.ratingCardGreen}>
                    <Film className={styles.ratingStarIcon} size={20} />
                    <span className={styles.ratingNumber}>7.8</span>
                    <span className={styles.ratingPlatform}>BookMyShow</span>
                    <span className={styles.ratingDetail}>Audience Reviews</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Details Column */}
            <ScrollReveal variant="slideRight">
              <div className={styles.detailsSection}>
                {/* Synopsis */}
                <div className={styles.detailBlock}>
                  <h3 className={`${styles.detailHeading} text-emerald-shimmer`}>Synopsis</h3>
                  <p className={styles.detailText}>
                    An emotionally resonant feature film based on the real-life story of Sunny Pawar and Aarti Makwana. A gripping narrative of courage, loyalty, and unconditional love set against the backdrop of everyday struggles. This powerful tale captures the essence of human resilience and the bonds that define us.
                  </p>
                </div>

                {/* Film Details Meta */}
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} className={styles.metaIcon} />
                    <div>
                      <span className={styles.metaLabel}>Year</span>
                      <span className={styles.metaValue}>2017</span>
                    </div>
                  </div>
                  <div className={styles.metaItem}>
                    <Globe size={16} className={styles.metaIcon} />
                    <div>
                      <span className={styles.metaLabel}>Language</span>
                      <span className={styles.metaValue}>Marathi</span>
                    </div>
                  </div>
                  <div className={styles.metaItem}>
                    <Clapperboard size={16} className={styles.metaIcon} />
                    <div>
                      <span className={styles.metaLabel}>Genre</span>
                      <span className={styles.metaValue}>Drama / Romance</span>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className={styles.detailBlock}>
                  <h3 className={`${styles.detailHeading} text-champagne-gold`}>Milestones & Recognition</h3>
                  <ul className={styles.milestoneList}>
                    <li className={styles.milestoneItem}>
                      <Award size={16} className={styles.milestoneIcon} />
                      <span>Official poster unveiled by former Maharashtra CM <strong>Manohar Joshi</strong></span>
                    </li>
                    <li className={styles.milestoneItem}>
                      <Award size={16} className={styles.milestoneIcon} />
                      <span>Blessings from legendary actress <strong>Waheeda Rehman</strong></span>
                    </li>
                    <li className={styles.milestoneItem}>
                      <Star size={16} className={styles.milestoneIcon} />
                      <span>IMDb Audience Rating of <strong>8.0/10</strong> with 26 verified ratings</span>
                    </li>
                    <li className={styles.milestoneItem}>
                      <Film size={16} className={styles.milestoneIcon} />
                      <span>BookMyShow rating of <strong>7.8/10</strong></span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className={styles.detailCtas}>
                  <Button href="/press" variant="gold" size="lg" icon>
                    Read Press & Media
                  </Button>
                  <Button href="/contact" variant="secondary" size="lg">
                    Start a Project With Us
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Coming Soon */}
          <div className={styles.comingSoon}>
            <ScrollReveal variant="fadeUp">
              <div className={styles.comingSoonCard}>
                <h3 className={`${styles.comingSoonTitle} kinetic-hover`}>
                  More Projects Coming Soon
                </h3>
                <p className={styles.comingSoonText}>
                  We're working on exciting new productions. Stay tuned for upcoming films, campaigns, and creative projects.
                </p>
                <Button href="/contact" variant="primary" size="md" icon>
                  Discuss Your Project
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
