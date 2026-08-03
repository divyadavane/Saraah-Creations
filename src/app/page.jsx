'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlayCircle, Award, Star, Film, Sparkles, ExternalLink } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SplitText from '@/components/animations/SplitText';
import { TiltCard } from '@/components/ui/be-ui-tilt-card';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* 1. CINEMATIC HERO SECTION (FULL LANDING PAGE RED CAMERA RIG BACKGROUND) */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/abcd.png"
            alt="Film crew operating a RED Digital Cinema camera"
            fill
            priority
            unoptimized
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroTextWrapper}>
            <h1 className={`${styles.heroHeading} kinetic-hover`}>
              <SplitText
                text="VISION."
                tag="span"
                textAlign="left"
                className={styles.heroWordVision}
                charClassName="text-emerald-shimmer"
                delay={30}
                duration={0.8}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                text="EMOTION."
                tag="span"
                textAlign="left"
                className={styles.heroWordEmotion}
                charClassName=""
                delay={40}
                duration={0.8}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                text="IMPACT."
                tag="span"
                textAlign="left"
                className={styles.heroWordImpact}
                charClassName="text-fire-gradient"
                delay={50}
                duration={0.8}
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h1>



            <motion.div
              className={styles.heroButtons}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ marginTop: '5.5rem' }}
            >
              <Button href="/portfolio" variant="primary" size="lg" icon style={{ padding: '1.25rem 3rem', fontSize: '1.05rem' }}>
                VIEW OUR WORK
              </Button>
            </motion.div>
          </div>
        </div>

        <div className={styles.heroScrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot}></div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CINEMATIC SHOWCASE — AARTI (MARATHI FEATURE FILM) */}
      <section className={styles.featuredShowcase} id="projects">
        <div className={`container ${styles.featuredShowcaseInner}`}>
          {/* Left: Text Column */}
          <div className={styles.featuredTextCol}>
            <span className={`glass-badge ${styles.featuredBadge}`}>FEATURED MARATHI CINEMA RELEASE</span>
            <h2 className={`${styles.featuredTitle} text-fire-gradient kinetic-hover`}>
              Aarti: The Unknown Love Story
            </h2>
            <p className={styles.featuredSub}>
              Written, Produced & Directed by <strong>Sarika Mahesh Mene</strong> • <em>Marathi Feature Film</em>
            </p>
            <p className={styles.featuredDesc}>
              An emotionally resonant Marathi feature film based on the real-life story of Sunny Pawar and Aarti Makwana — a gripping narrative of courage, loyalty, and unconditional love.
            </p>

            {/* Ratings Row */}
            <div className={styles.ratingsRow}>
              <div className={styles.ratingChip}>
                <Star className={styles.ratingIcon} size={18} />
                <div>
                  <span className={styles.ratingValue}>8.0</span>
                  <span className={styles.ratingLabel}>IMDb</span>
                </div>
              </div>
              <div className={styles.ratingChip}>
                <Film className={styles.ratingIcon} size={18} />
                <div>
                  <span className={styles.ratingValue}>7.8</span>
                  <span className={styles.ratingLabel}>BookMyShow</span>
                </div>
              </div>
            </div>

            <div className={styles.featuredCtas}>
              <Button href="/portfolio" variant="primary" size="md" icon>
                View Film Details
              </Button>
              <Button href="/press" variant="secondary" size="md">
                Press & Media
              </Button>
            </div>
          </div>

          {/* Right: Poster Image */}
          <div className={styles.featuredPosterWrap}>
            <Image
              src="/images/aarti-poster.png"
              alt="Aarti The Unknown Love Story Official Poster"
              width={480}
              height={600}
              className={styles.featuredPosterImg}
              priority
            />
            <div className={styles.posterGlow}></div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE FILMMAKER SECTION */}
      <section className={styles.aboutFilmmakerSection} id="founder">
        <div className="container">
          <div className={styles.aboutFilmmakerGrid}>
            {/* Left: Sarika's Portrait Poster */}
            <div className={styles.filmmakerImageWrap}>
              <Image
                src="/images/founder-sarika.png"
                alt="Sarika Mahesh Mene - Founder & Creative Director"
                width={500}
                height={650}
                className={styles.filmmakerImg}
                priority
              />
            </div>

            {/* Right: Bio Text & Laurels */}
            <div className={styles.filmmakerText}>
              <h2 className={`${styles.filmmakerTitle} kinetic-hover text-champagne-gold glow-text-gold`}>ABOUT THE FILMMAKER</h2>
              <p className={styles.filmmakerQuote}>
                "I'm a film director who believes in the power of storytelling. Every frame I create is driven by emotion, authenticity, and a deep curiosity about human nature."
              </p>
              <p className={styles.filmmakerDesc}>
                <strong>Sarika Mahesh Mene</strong> is the Founder and Creative Director of Saraah Creation. With a passion for meaningful storytelling, she brings together filmmaking, advertising, graphics, sales and marketing under one creative platform.
              </p>
              
              {/* Laurel Awards */}
              <div className={styles.filmmakerLaurels}>
                <div className={styles.laurelCard}>
                  <Award className={styles.laurelIcon} size={28} />
                  <div className={styles.laurelText}>
                    <span className={styles.laurelCategory}>OFFICIAL SELECTION</span>
                    <span className={styles.laurelFest}>Indian Film Festival</span>
                    <span className={styles.laurelYear}>2017</span>
                  </div>
                </div>
                <div className={styles.laurelCard}>
                  <Award className={styles.laurelIcon} size={28} />
                  <div className={styles.laurelText}>
                    <span className={styles.laurelCategory}>BEST DIRECTOR</span>
                    <span className={styles.laurelFest}>CineQuest Film Festival</span>
                    <span className={styles.laurelYear}>2017</span>
                  </div>
                </div>
                <div className={styles.laurelCard}>
                  <Award className={styles.laurelIcon} size={28} />
                  <div className={styles.laurelText}>
                    <span className={styles.laurelCategory}>OFFICIAL SELECTION</span>
                    <span className={styles.laurelFest}>Lift-Off Global Network</span>
                    <span className={styles.laurelYear}>2017</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-4)' }}>
                <Link href="/about" className={styles.featuredLink}>
                  MORE ABOUT ME <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. UPCOMING AUDITIONS SECTION */}
      <section className={styles.auditionsSection} id="auditions">
        <div className={styles.auditionsGlow}></div>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <TiltCard max={6} glare={true} className="max-w-[820px] mx-auto overflow-visible">
              <div className={styles.auditionsBox}>
                {/* Top decorative line */}
                <div className={styles.auditionsTopLine}></div>

                <div className={styles.auditionsBadge}>
                  <Sparkles size={14} className={styles.auditionsBadgeIcon} />
                  <span>CASTING CALL NOW OPEN</span>
                </div>

                <h2 className={styles.auditionsTitle}>
                  Upcoming Auditions
                </h2>
                <h3 className={styles.auditionsTitleAccent}>
                  & Talent Hunt
                </h3>

                <p className={styles.auditionsSub}>
                  We're scouting fresh & experienced talent for upcoming feature films, commercial ads, and creative projects. If you have a passion for performing — we want to hear from you.
                </p>

                <div className={styles.auditionsDivider}></div>

                <div className={styles.auditionsDetails}>
                  <div className={styles.auditionTag}>
                    <span className={styles.auditionTagEmoji}>🎬</span>
                    <span>Lead & Supporting Roles</span>
                  </div>
                  <div className={styles.auditionTag}>
                    <span className={styles.auditionTagEmoji}>🎙️</span>
                    <span>Voiceover & Dubbing</span>
                  </div>
                  <div className={styles.auditionTag}>
                    <span className={styles.auditionTagEmoji}>✨</span>
                    <span>Fresh Faces Welcome</span>
                  </div>
                </div>

                <div className={styles.auditionsCtaWrap}>
                  <a
                    href="https://forms.gle/xWzzjY1peo3Ua6oT8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.auditionsBtn}
                  >
                    <span className={styles.auditionsBtnText}>Apply For Auditions</span>
                    <span className={styles.auditionsBtnArrow}>→</span>
                    <span className={styles.auditionsBtnShimmer}></span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FOOTER QUOTE BANNER */}
      <section className={styles.quoteBanner}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <h2 className={`${styles.quoteText} text-emerald-shimmer glow-text-green kinetic-hover`}>
              "Cinema is not just what you see, it's what you feel."
            </h2>
            <p className={styles.quoteAuthor}>
              - Sarika Mahesh Mene
            </p>
          </ScrollReveal>
        </div>
        
        {/* Background Film Strip Images for Quote Banner */}
        <div className={styles.quoteFilmStrip}>
        </div>
      </section>
    </>
  );
}
