'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Play, Camera, Film } from 'lucide-react';
import { Youtube, Linkedin } from '@/components/ui/SocialIcons';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Auditions', href: '/#auditions' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!isHomePage ? styles.nonHomeNav : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`container ${styles.navContent}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Play size={14} fill="var(--parrot-green)" color="var(--parrot-green)" />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>SARAAH</span>
              <span className={styles.logoSub}>CREATION</span>
            </div>
          </Link>

          {/* Desktop Nav - Center */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
                <span className={styles.navLinkLine}></span>
              </Link>
            ))}
          </div>

          {/* Right Actions: Social Icons & Theme Toggle */}
          <div className={styles.socialNav}>
            <ThemeToggle showLabel={true} />
            <a href="https://youtube.com/@sarikamenepresesnts-saraah818?si=zVgF96TWQ3QxIUbJ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}><Youtube size={18} /></a>
            <a href="https://www.linkedin.com/in/sarikamene?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}><Linkedin size={18} /></a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileMenuContent}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <ThemeToggle showLabel={true} />
                </div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link
                    href="/contact"
                    className={styles.mobileCta}
                    onClick={() => setMobileOpen(false)}
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
              <div className={styles.mobileFooter}>
                <p>Film • Advertising • Graphics • Sales • Marketing</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

