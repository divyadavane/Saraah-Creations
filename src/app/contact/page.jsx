'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Camera, Globe } from 'lucide-react';
import { Youtube, Linkedin } from '@/components/ui/SocialIcons';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import { Card3D } from '@/components/ui/3d-card';
import styles from './contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Film Production',
    budget: 'Standard',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "bb5bed91-c83f-46a9-b73c-6c0c61dc7365", // Replace this with your Access Key from web3forms.com
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          subject: `New Business Enquiry: ${formData.service} from ${formData.name}`,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Submission error:", result);
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Unable to send message at this time. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={`${styles.heroHeading} text-platinum-edge kinetic-hover`}>Let's Create Together</h1>
            <p className={styles.heroSub}>
              Have a film concept, advertising campaign, brand identity, or sales strategy to discuss? Reach out to Saraah Creation today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* ENQUIRY FORM */}
            <ScrollReveal variant="slideLeft">
              <div className={styles.formCard}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', marginBottom: '1.5rem', color: '#FDFCF8' }}>
                  Project Enquiry
                </h3>

                {submitted ? (
                  <div className={styles.successMessage}>
                    🎉 Thank you! Your message has been received. Our creative team will get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarika Mene"
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className={styles.input}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 98677 41226"
                          className={styles.input}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Primary Service Needed</label>
                        <select
                          className={styles.select}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="Film Production">Film Production</option>
                          <option value="Advertising">Advertising & Ad Films</option>
                          <option value="Graphics & Branding">Graphics & Branding</option>
                          <option value="Sales Solutions">Sales Solutions</option>
                          <option value="Marketing Strategy">Marketing Strategy</option>
                        </select>
                      </div>

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Estimated Budget</label>
                        <select
                          className={styles.select}
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="Standard">Standard Package</option>
                          <option value="Premium">Premium Commercial</option>
                          <option value="Enterprise">Full Creative Retainer</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Project Brief / Message</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your story, campaign objectives, timeline, or vision..."
                        className={styles.textarea}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <Button type="submit" variant="primary" size="lg" icon={!submitting} disabled={submitting} style={{ width: '100%', justifyContent: 'center' }}>
                      {submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* DIRECT CONTACT INFO */}
            <ScrollReveal variant="slideRight">
              <Card3D style={{ perspective: "1000px" }}>
                <div className={styles.infoCard}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', marginBottom: '1rem' }}>
                    Direct Contact
                  </h3>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}><Mail size={22} /></div>
                    <div>
                      <div className={styles.infoTitle}>Business Enquiry Email</div>
                      <div className={styles.infoText}>
                        <a href="mailto:sarrahcreation.2025@gmail.com" style={{ color: 'var(--parrot-green)', fontWeight: '600' }}>
                          sarrahcreation.2025@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}><Phone size={22} /></div>
                    <div>
                      <div className={styles.infoTitle}>Phone / WhatsApp</div>
                      <div className={styles.infoText}>
                        <a href="tel:+919867741226">+91 98677 41226</a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}><MapPin size={22} /></div>
                    <div>
                      <div className={styles.infoTitle}>Studio Location</div>
                      <div className={styles.infoText}>
                        Saraah Creation Studios,<br />
                        Vile Parle, Mumbai, Maharashtra, India
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(122, 201, 67, 0.15)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                    <div className={styles.infoTitle} style={{ marginBottom: '0.75rem' }}>Follow Saraah Creation</div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <a href="https://youtube.com/@sarikamenepresesnts-saraah818?si=zVgF96TWQ3QxIUbJ" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube"><Youtube size={18} /></a>
                      <a href="https://www.linkedin.com/in/sarikamene?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={18} /></a>
                      <a href="#" className={styles.socialLink} aria-label="Instagram"><Camera size={18} /></a>
                      <a href="#" className={styles.socialLink} aria-label="Website"><Globe size={18} /></a>
                    </div>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
