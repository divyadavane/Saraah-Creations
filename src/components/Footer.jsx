'use client';

import Link from 'next/link';
import { Play, Camera, Globe, Video, Share2, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Auditions', href: '/#auditions' },
  { name: 'Press & Media', href: '/press' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Film Production', href: '/services#film' },
  { name: 'Advertising', href: '/services#advertising' },
  { name: 'Graphics & Branding', href: '/services#graphics' },
  { name: 'Sales Solutions', href: '/services#sales' },
  { name: 'Marketing', href: '/services#marketing' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goldLine}></div>
      <div className={`container ${styles.footerContent}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Play size={12} fill="var(--parrot-green)" color="var(--parrot-green)" />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>SARRAAH</span>
              <span className={styles.logoSub}>CREATION</span>
            </div>
          </Link>
          <p className={styles.tagline}>
            Film Production • Advertising • Graphics • Sales • Marketing
          </p>
          <p className={styles.founded}>Founded by <strong>Sarika Mahesh Mene</strong></p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}><Camera size={18} /></a>
            <a href="https://youtube.com/@sarikamenepresesnts-saraah818?si=zVgF96TWQ3QxIUbJ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialIcon}><Video size={18} /></a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><Share2 size={18} /></a>
            <a href="#" aria-label="Website" className={styles.socialIcon}><Globe size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.footerLink}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul>
            {services.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.footerLink}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Get in Touch</h4>
          <div className={styles.contactItem}>
            <Mail size={16} className={styles.contactIcon} />
            <a href="mailto:sarrahcreation.2025@gmail.com">sarrahcreation.2025@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <Phone size={16} className={styles.contactIcon} />
            <a href="tel:+919867741226">+91 98677 41226</a>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={16} className={styles.contactIcon} />
            <span>Vile Parle, Mumbai, Maharashtra, India</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p>© {new Date().getFullYear()} Saraah Creation. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
