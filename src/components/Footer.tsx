import React from 'react';
import { makeStyles } from '@fluentui/react-components';
import { MapPinRegular, PhoneRegular, MailRegular } from '@fluentui/react-icons';

const ACCENT = '#C9754A';
const DARK = '#2D1B14';

/* ──────────────────────────────────────────────────────────────
 * Styles
 * ────────────────────────────────────────────────────────────── */
const useStyles = makeStyles({
  footer: {
    backgroundColor: DARK,
    color: '#FFFFFF',
    fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '56px 24px 32px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    '@media screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '48px',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },

  /* ── Column 1 – Brand ── */
  brandName: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '28px',
    fontWeight: 700,
    color: '#FFFFFF',
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    marginBottom: '4px',
  },
  addressText: {
    fontSize: '14px',
    color: '#BFBFBF',
    lineHeight: 1.65,
    margin: 0,
  },
  mapLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: 500,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    textDecorationColor: 'rgba(255,255,255,0.35)',
    transition: 'text-decoration-color 0.2s ease',
    ':hover': {
      textDecorationColor: '#FFFFFF',
    },
  },
  mapIcon: {
    fontSize: '16px',
    lineHeight: 1,
  },

  /* ── Column 2 – Hours ── */
  sectionHeading: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    color: ACCENT,
    margin: 0,
    marginBottom: '4px',
  },
  hoursRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    fontSize: '14px',
    color: '#BFBFBF',
    lineHeight: 1.9,
  },
  hoursDay: {
    fontWeight: 500,
  },
  hoursTime: {
    textAlign: 'right' as const,
    whiteSpace: 'nowrap',
  },
  hoursDivider: {
    border: 'none',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    margin: '2px 0',
  },

  /* ── Column 3 – Contact ── */
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#BFBFBF',
    lineHeight: 1.6,
  },
  contactIcon: {
    fontSize: '16px',
    color: ACCENT,
    flexShrink: 0,
    lineHeight: 1,
  },
  contactLink: {
    color: '#BFBFBF',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#FFFFFF',
    },
  },

  /* ── Social row ── */
  socialRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '4px',
    paddingTop: '4px',
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    ':hover': {
      color: ACCENT,
    },
  },
  socialIcon: {
    width: '18px',
    height: '18px',
  },

  /* ── WhatsApp button ── */
  whatsappWrapper: {
    marginTop: '8px',
  },
  whatsappLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: ACCENT,
    backgroundColor: 'transparent',
    border: '1.5px solid ' + ACCENT,
    borderRadius: '9999px',
    padding: '10px 24px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.25s ease, color 0.25s ease',
    ':hover': {
      backgroundColor: ACCENT,
      color: '#FFFFFF',
    },
  },
  whatsappIcon: {
    width: '16px',
    height: '16px',
  },

  /* ── Bottom bar ── */
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    marginTop: '48px',
    padding: '20px 24px',
    textAlign: 'center' as const,
  },
  copyright: {
    fontSize: '12px',
    color: '#888888',
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.3px',
    margin: 0,
  },
});

/* ──────────────────────────────────────────────────────────────
 * Inline SVG icons
 * ────────────────────────────────────────────────────────────── */
const InstagramIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-6.03a9 9 0 1 1 3.38 3.38L3 21z" />
    <path d="M9 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H9z" strokeWidth="1.2" />
    <path d="M9 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H9z" strokeWidth="1.2" />
  </svg>
);

/* ──────────────────────────────────────────────────────────────
 * Component
 * ────────────────────────────────────────────────────────────── */
const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* ===== Column 1 – Brand & Location ===== */}
          <div className={styles.column}>
            <div className={styles.brandName}>BeanUp</div>
            <p className={styles.addressText}>
              route gremda km 6
              <br />
              Sfax, Tunisie
            </p>
            <a
              href="https://maps.google.com/?q=Route+Gremda+Km+6+Sfax+Tunisie"
              className={styles.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinRegular className={styles.mapIcon} />
              Voir sur Google Maps
            </a>
          </div>

          {/* ===== Column 2 – Hours ===== */}
          <div className={styles.column}>
            <h3 className={styles.sectionHeading}>Horaires d&rsquo;Ouverture</h3>

            <div className={styles.hoursRow}>
              <span className={styles.hoursDay}>Lun&ndash;Sam</span>
              <span className={styles.hoursTime}>07h00 &ndash; 19h00</span>
            </div>

            <hr className={styles.hoursDivider} />

            <div className={styles.hoursRow}>
              <span className={styles.hoursDay}>Dimanche</span>
              <span className={styles.hoursTime}>08h00 &ndash; 13h00</span>
            </div>
          </div>

          {/* ===== Column 3 – Contact & Social ===== */}
          <div className={styles.column}>
            <h3 className={styles.sectionHeading}>Contact</h3>

            <div className={styles.contactRow}>
              <PhoneRegular className={styles.contactIcon} />
              <a href="tel:+21671234567" className={styles.contactLink}>
                +216 71 234 567
              </a>
            </div>

            <div className={styles.contactRow}>
              <MailRegular className={styles.contactIcon} />
              <a href="mailto:bonjour@beanup.tn" className={styles.contactLink}>
                bonjour@beanup.tn
              </a>
            </div>

            {/* Social links */}
            <div className={styles.socialRow}>
              <a
                href="#"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className={styles.socialIcon}>
                  <InstagramIcon />
                </span>
                Instagram
              </a>
              <a
                href="#"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className={styles.socialIcon}>
                  <FacebookIcon />
                </span>
                Facebook
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className={styles.whatsappWrapper}>
              <a
                href="#"
                className={styles.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
              >
                <span className={styles.whatsappIcon}>
                  <WhatsAppIcon />
                </span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; 2026 BeanUp. Tous droits r&eacute;serv&eacute;s.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
