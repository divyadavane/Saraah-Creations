'use client';

import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './about.module.css';

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={styles.heroHeading}>About Saraah Creation</h1>
            <p className={styles.heroSub}>
              A premium creative agency and production house uniting cinematic storytelling, design excellence, and business-focused marketing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STORY & PHILOSOPHY */}
      <section className="section">
        <div className="container">
          <div className={styles.grid2}>
            <ScrollReveal variant="slideLeft">
              <div className={styles.storyContent}>
                <SectionHeading
                  label="OUR STORY"
                  title="Where Creativity Meets Business Strategy"
                  align="left"
                />
                <p>
                  Saraah Creation was established with a single foundational vision: to create visual experiences that move people emotionally while driving measurable growth for brands and businesses.
                </p>
                <p>
                  Founded by <strong>Sarika Mahesh Mene</strong>, Saraah Creation breaks down traditional silos between filmmaking, graphic design, advertising, and strategic marketing. We operate as a single creative house capable of managing a project from raw imagination to high-impact execution.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight">
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid var(--gold)', boxShadow: 'var(--shadow-xl)' }}>
                <Image
                  src="/images/film-production.png"
                  alt="Saraah Creation Film Production"
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.grid2}>
            <ScrollReveal variant="fadeUp" delay={0}>
              <div className={styles.cardBox}>
                <h4>OUR VISION</h4>
                <h3>Cinematic Excellence & Commercial Impact</h3>
                <p>
                  To be recognized as a benchmark creative house where every film, brand identity, and marketing campaign is crafted with technical perfection, emotional resonance, and commercial value.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <div className={styles.cardBox}>
                <h4>OUR MISSION</h4>
                <h3>Transforming Concepts into Unforgettable Media</h3>
                <p>
                  To empower film producers, brands, and businesses with compelling visual assets, razor-sharp campaign strategies, and seamless end-to-end execution.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="PHILOSOPHY & VALUES"
            title="What Drives Every Production"
            align="center"
          />
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>✨</div>
              <h3>Uncompromising Craft</h3>
              <p>No shortcuts or retakes when it comes to visual storytelling excellence.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Strategic Purpose</h3>
              <p>Every pixel, frame, and campaign decision is grounded in real business targets.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Client Partnership</h3>
              <p>Collaborative, transparent creative director leadership from concept to launch.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Bold Innovation</h3>
              <p>Pushing aesthetic boundaries with cutting-edge production tools and techniques.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button href="/contact" variant="primary" size="lg" icon>
              Work With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
