import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import { filmData, pressArticles, mediaInterviews } from '@/data/press';
import { TiltCard } from '@/components/ui/be-ui-tilt-card';
import styles from './press.module.css';

export default function Press() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={`${styles.heroHeading} kinetic-hover`}>Press & Media Reference</h1>
            <p className={styles.heroSub}>
              Public coverage, critic reviews, film ratings, and national media coverage for Sarika Mahesh Mene and Saraah Creation's film productions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* AUDIENCE & CRITIC RATINGS */}
          <SectionHeading
            label="PUBLIC RATINGS"
            title="Film Performance & Reception"
            subtitle="Aarti: The Unknown Love Story, written and directed by Sarika Mahesh Mene."
            align="center"
          />

          <div className={styles.ratingGrid}>
            {filmData.ratings.map((r, i) => (
              <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                <div className={styles.ratingCard}>
                  <div className={styles.ratingScore}>{r.rating}</div>
                  <div className={styles.ratingSource}>{r.source}</div>
                  <div className={styles.ratingVotes}>({r.votes})</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* FILM FEATURE SPOTLIGHT */}
          <ScrollReveal variant="fadeUp">
            <TiltCard className={styles.filmSpotlight} max={8}>
              <div className={styles.filmSpotlightGrid}>
                {/* Poster Image */}
                <div className={styles.filmPosterWrap}>
                  <Image
                    src="/images/aarti-poster.png"
                    alt="Aarti: The Unknown Love Story Official Movie Poster"
                    width={320}
                    height={400}
                    className={styles.filmPosterImg}
                    priority
                  />
                </div>

                {/* Details */}
                <div>
                  <span className={`${styles.filmBadge} glass-badge`}>FEATURED FILM PRODUCTION</span>
                  <h2 className={styles.filmTitle}>{filmData.title}</h2>
                  <div className={styles.filmRoles}>
                    Director, Writer & Producer: <strong>{filmData.director}</strong> • Banner: <strong>{filmData.banner}</strong>
                  </div>
                  <p className={styles.filmInspirationText}>
                    {filmData.inspiration} Written, produced, and directed under the Saraah Creation banner, this emotionally powerful drama earned strong audience reviews for its heart-wrenching real life story and cinematography.
                  </p>

                  <div className={styles.endorseList}>
                    {filmData.endorsements.map((e, idx) => (
                      <div key={idx} className={styles.endorseItem}>
                        <span className={styles.starIcon}>★</span>
                        <span>{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* PRESS & MEDIA ARTICLES */}
          <SectionHeading
            label="NEWS COVERAGE"
            title="Press Articles & Publications"
            subtitle="Coverage across major national publications including Hindustan Times, Scroll.in, Mid-Day, and Filmfare."
            align="center"
          />

          <div className={styles.articlesGrid}>
            {pressArticles.map((article, index) => (
              <ScrollReveal key={article.id} variant="fadeUp" delay={index * 0.1}>
                <div className={styles.articleCard}>
                  <div>
                    <div className={styles.articleOutlet}>{article.outlet}</div>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  </div>
                  <div className={styles.articleCategory}>{article.category} • {article.date}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* VIDEO & TV INTERVIEWS */}
          <div style={{ marginTop: '5rem' }}>
            <SectionHeading
              label="BROADCASTS & INTERVIEWS"
              title="Video & Television Coverage"
              align="center"
            />
            <div className={styles.articlesGrid}>
              {mediaInterviews.map((item, idx) => (
                <ScrollReveal key={item.id} variant="fadeUp" delay={idx * 0.1}>
                  <div className={styles.articleCard} style={{ height: '100%' }}>
                    <div>
                      <div className={styles.articleOutlet}>{item.type}</div>
                      <h4 className={styles.articleTitle}>{item.title}</h4>
                      <p className={styles.articleExcerpt}>{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* HASHTAGS & SOCIAL REFERENCE */}
          <div className={styles.hashtagBox}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', marginBottom: '1rem' }}>
              Official Social Hashtags
            </h3>
            <div>
              <span className={styles.hashtagTag}>#AartiTheUnknownLoveStory</span>
              <span className={styles.hashtagTag}>#SaraahCreation</span>
              <span className={styles.hashtagTag}>#SarikaMene</span>
              <span className={styles.hashtagTag}>#SarikaMaheshMene</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Button href="/contact" variant="primary" size="lg" icon>
              Media & PR Enquiries
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
