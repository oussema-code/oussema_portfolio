import React from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

const ACCENT = '#C9754A';
const DARK = '#2D1B14';

const useStyles = makeStyles({
  section: {
    backgroundColor: '#FBF6EE',
    padding: '100px 5%',
    '@media (max-width: 768px)': {
      padding: '60px 24px',
    },
  },
  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '48px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '32px',
    },
  },

  /* ---- Left: text ---- */
  textCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 2,
  },
  label: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: ACCENT,
    marginBottom: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    '::before': {
      content: "''",
      display: 'inline-block',
      width: '24px',
      height: '1.5px',
      backgroundColor: ACCENT,
    },
  },
  heading: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(32px, 4vw, 46px)',
    fontWeight: 600,
    color: DARK,
    lineHeight: 1.15,
    marginBottom: '20px',
    marginTop: 0,
  },
  headingAccent: {
    color: ACCENT,
    fontStyle: 'italic',
  },
  bodyText: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 300,
    fontSize: '15px',
    lineHeight: 1.85,
    color: '#555555',
    marginBottom: '18px',
    maxWidth: '480px',
  },

  /* ---- Quote (larger, with decorative mark) ---- */
  quoteWrap: {
    position: 'relative',
    marginTop: '20px',
    paddingLeft: '28px',
    ...shorthands.borderLeft('3px', 'solid', ACCENT),
  },
  quoteMark: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '56px',
    lineHeight: 0.7,
    color: ACCENT,
    opacity: 0.35,
    display: 'block',
    marginBottom: '-4px',
  },
  quoteText: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
    fontSize: '19px',
    lineHeight: 1.6,
    color: DARK,
    margin: 0,
  },

  /* ---- Right: image ---- */
  imageCol: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrap: {
    position: 'relative',
    width: '100%',
    maxWidth: '540px',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow:
      '0 20px 60px rgba(45, 27, 20, 0.15), 0 8px 20px rgba(45, 27, 20, 0.08)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.6s ease',
    ':hover': {
      transform: 'scale(1.04)',
    },
  },

  /* ---- Decorative frame behind image ---- */
  decorFrame: {
    position: 'absolute',
    top: '-16px',
    left: '-16px',
    width: '100%',
    height: '100%',
    ...shorthands.border('2px', 'solid', ACCENT),
    borderRadius: '16px',
    zIndex: -1,
    opacity: 0.3,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  decorDot: {
    position: 'absolute',
    bottom: '-12px',
    right: '-12px',
    width: '24px',
    height: '24px',
    backgroundColor: ACCENT,
    borderRadius: '50%',
    opacity: 0.25,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
});

const StorySection: React.FC = () => {
  const styles = useStyles();

  return (
    <section id="story" className={styles.section}>
      <div className={styles.container}>
        {/* Left — Text */}
        <div className={styles.textCol}>
          <span className={styles.label}>Notre Histoire</span>
          <h2 className={styles.heading}>
            Votre Coin{' '}
            <span className={styles.headingAccent}>Café à Sfax</span>
          </h2>
          <p className={styles.bodyText}>
            BeanUp est né d'une idée simple : créer un vrai lieu de vie
            dans le quartier de Gremda. Pas de chichis, pas de prétention —
            juste un bon café, une ambiance chill, et un endroit où on se
            sent chez soi.
          </p>
          <p className={styles.bodyText}>
            Que vous soyez team espresso serré, latte glacé ou thé à la
            menthe bien chargé, on prépare chaque boisson comme on l'aime :
            avec soin, sans stress. C'est ça l'esprit BeanUp — un café de
            quartier où tout le monde connaît ton nom... et ta commande.
          </p>

          {/* Quote */}
          <div className={styles.quoteWrap}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.quoteText}>
              Là où les matins commencent bien et les après-midis
              s&rsquo;étirent.
            </p>
          </div>
        </div>

        {/* Right — Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80"
              alt="Ambiance chill du café BeanUp à Sfax — coin détente et convivialité"
              loading="lazy"
            />
            <div className={styles.decorFrame} aria-hidden="true" />
            <div className={styles.decorDot} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
