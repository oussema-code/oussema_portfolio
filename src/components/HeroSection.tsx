import React, { useCallback } from 'react';
import { makeStyles, Button } from '@fluentui/react-components';

const ACCENT = '#C9754A';

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */
const useStyles = makeStyles({
  /* ---------- Root container ---------- */
  hero: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D1B14',
  },

  /* ---------- Background video ---------- */
  mediaWrap: {
    position: 'absolute',
    inset: '0',
    zIndex: '0',
    overflow: 'hidden',
  },
  bgVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  /* ---------- Dark overlay ---------- */
  overlay: {
    position: 'absolute',
    inset: '0',
    zIndex: '1',
    background:
      'linear-gradient(to bottom, rgba(45,27,20,0.3) 0%, rgba(45,27,20,0.5) 40%, rgba(45,27,20,0.85) 100%)',
  },

  /* ---------- Centered content ---------- */
  content: {
    position: 'relative',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 24px',
    maxWidth: '880px',
    width: '100%',
  },

  /* ---------- Brand title ---------- */
  title: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontWeight: 700,
    color: '#FFFFFF',
    fontSize: 'clamp(2.6rem, 10vw, 6.5rem)',
    lineHeight: 1.05,
    margin: '0 0 12px 0',
    letterSpacing: '-0.02em',
    textShadow: '0 4px 40px rgba(0,0,0,0.5)',
  },

  /* ---------- Subtitle ---------- */
  subtitle: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(0.65rem, 1.4vw, 1rem)',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    margin: '0 0 22px 0',
    opacity: 0.8,
  },

  /* ---------- Decorative divider ---------- */
  divider: {
    width: '60px',
    height: '1px',
    backgroundColor: '#FFFFFF',
    marginBottom: '36px',
    opacity: 0.5,
    flexShrink: '0',
  },

  /* ---------- CTA button ---------- */
  cta: {
    borderRadius: '9999px !important',
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif !important",
    fontWeight: '600 !important',
    fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
    textTransform: 'uppercase !important',
    letterSpacing: '0.08em !important',
    paddingLeft: '36px !important',
    paddingRight: '36px !important',
    paddingTop: '14px !important',
    paddingBottom: '14px !important',
    backgroundColor: ACCENT + ' !important',
    color: '#FFFFFF !important',
    border: 'none !important',
    cursor: 'pointer',
    transition: 'background-color 0.35s ease, transform 0.25s ease, box-shadow 0.35s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    ':hover': {
      backgroundColor: '#B05E3A !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
    },
    ':active': {
      backgroundColor: '#9A4E2E !important',
      transform: 'translateY(0)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    },
    ':focus-visible': {
      outline: '2px solid ' + ACCENT,
      outlineOffset: '3px',
    },
  },

  /* ---------- Scroll-down arrow container ---------- */
  scrollWrap: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '3',
  },

  /* ---------- Scroll-down arrow ---------- */
  scrollArrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    cursor: 'pointer',
    color: '#FFFFFF',
    opacity: 0.65,
    transition: 'opacity 0.3s ease',
    animationName: {
      '0%': { transform: 'translateY(0)', opacity: '0.5' },
      '50%': { transform: 'translateY(8px)', opacity: '1' },
      '100%': { transform: 'translateY(0)', opacity: '0.5' },
    },
    animationDuration: '2.2s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
    ':hover': {
      opacity: '1',
    },
    ':focus-visible': {
      outline: '2px solid #FFFFFF',
      outlineOffset: '3px',
      borderRadius: '50%',
    },
  },

  /* ---------- Screen-reader only utility ---------- */
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
});

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const HeroSection: React.FC = () => {
  const styles = useStyles();

  const handleScrollToMenu = useCallback(() => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleArrowKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleScrollToMenu();
      }
    },
    [handleScrollToMenu],
  );

  return (
    <section className={styles.hero} aria-label="Accueil BeanUp">
      {/* ---- Background video ---- */}
      <div className={styles.mediaWrap}>
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
          aria-hidden="true"
        >
          <source src="/hero_coffe_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ---- Overlay ---- */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ---- Content ---- */}
      <div className={styles.content}>
        <h1 className={styles.title}>BeanUp</h1>

        <p className={styles.subtitle}>Coffee Shop &amp; Détente &mdash; Sfax</p>

        <div className={styles.divider} aria-hidden="true" />

        <Button
          className={styles.cta}
          onClick={handleScrollToMenu}
          aria-label="Découvrir la carte"
        >
          Découvrir la Carte
        </Button>
      </div>

      {/* ---- Scroll-down indicator ---- */}
      <div className={styles.scrollWrap}>
        <span
          className={styles.scrollArrow}
          role="button"
          tabIndex={0}
          aria-label="Découvrir notre carte"
          onClick={handleScrollToMenu}
          onKeyDown={handleArrowKeyDown}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.srOnly}>Menu</span>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
