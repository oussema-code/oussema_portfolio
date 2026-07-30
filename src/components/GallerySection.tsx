import React from 'react';
import {
  makeStyles,
  shorthands,
} from '@fluentui/react-components';

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

interface GalleryImage {
  src: string;
  alt: string;
  /** How many columns this image spans on desktop (1 or 2) */
  colSpan?: 1 | 2;
  /** How many rows this image spans on desktop (1 or 2) */
  rowSpan?: 1 | 2;
}

const ACCENT = '#C9754A';
const DARK = '#2D1B14';

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
    alt: 'Barista versant un latte art chez BeanUp',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: 'Coin lecture lumineux chez BeanUp',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
    alt: 'Grains de café fraîchement torréfiés',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
    alt: 'Intérieur chaleureux du café BeanUp',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
    alt: 'Comptoir et machines à café professionnelles',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
    alt: 'Moment de détente au coin canapé',
    colSpan: 1,
    rowSpan: 1,
  },
];

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
  section: {
    backgroundColor: '#FFFFFF',
    padding: '96px 24px',
    '@media (max-width: 767px)': {
      padding: '56px 16px',
    },
  },
  container: {
    maxWidth: '1100px',
    ...shorthands.margin('0', 'auto'),
  },

  /* ---- Heading ---- */
  headingWrap: {
    textAlign: 'center',
    marginBottom: '48px',
    '@media (max-width: 767px)': {
      marginBottom: '32px',
    },
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: 'clamp(34px, 5vw, 52px)',
    fontWeight: 600,
    color: DARK,
    lineHeight: 1.15,
    marginBottom: '12px',
  },
  titleAccent: {
    color: ACCENT,
  },
  subtitle: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 300,
    fontSize: '16px',
    color: '#7A6D63',
    letterSpacing: '0.04em',
    lineHeight: 1.6,
  },
  titleDivider: {
    width: '48px',
    height: '2px',
    backgroundColor: ACCENT,
    margin: '20px auto 0',
    ...shorthands.borderRadius('2px'),
  },

  /* ---- Bento grid ---- */
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('12px'),
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '200px',
      ...shorthands.gap('16px'),
    },
    '@media (min-width: 1024px)': {
      gridAutoRows: '240px',
      ...shorthands.gap('16px'),
    },
  },

  /* ---- Photo item ---- */
  photoItem: {
    position: 'relative',
    overflow: 'hidden',
    ...shorthands.borderRadius('12px'),
    cursor: 'pointer',
  },
  photoCol2: {
    '@media (min-width: 768px)': {
      gridColumn: 'span 2',
    },
  },
  photoRow2: {
    '@media (min-width: 768px)': {
      gridRow: 'span 2',
    },
  },

  photoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease, filter 0.4s ease',
  },
  photoOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(45, 27, 20, 0)',
    transition: 'background-color 0.4s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoItemHover: {
    ':hover': {
      [`& .${['photoImage']}`]: {
        transform: 'scale(1.06)',
      },
      [`& .${['photoOverlay']}`]: {
        backgroundColor: 'rgba(45, 27, 20, 0.25)',
      },
    },
  },

  photoIcon: {
    color: '#FFFFFF',
    fontSize: '28px',
    opacity: 0,
    transform: 'translateY(8px)',
    transition: 'opacity 0.35s ease, transform 0.35s ease',
    pointerEvents: 'none',
  },

  /* ---- Mobile: simpler stacked grid ---- */
  mobileGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    ...shorthands.gap('10px'),
  },
  mobileItem: {
    position: 'relative',
    overflow: 'hidden',
    ...shorthands.borderRadius('10px'),
    aspectRatio: '4 / 3',
  },
  mobileItemFull: {
    gridColumn: '1 / -1',
    aspectRatio: '16 / 9',
  },
});

// ---------------------------------------------------------------------------
// Desktop BentoGrid
// ---------------------------------------------------------------------------

const BentoGrid: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.grid}>
      {GALLERY_IMAGES.map((img, i) => {
        const classes = [
          styles.photoItem,
          img.colSpan === 2 && styles.photoCol2,
          img.rowSpan === 2 && styles.photoRow2,
          styles.photoItemHover,
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <div key={i} className={classes}>
            <img
              src={img.src}
              alt={img.alt}
              className={styles.photoImage}
              loading="lazy"
            />
            <div className={styles.photoOverlay}>
              <span className={styles.photoIcon}>✦</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Mobile Grid (simpler 2-col layout)
// ---------------------------------------------------------------------------

const MobileGrid: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.mobileGrid}>
      {GALLERY_IMAGES.map((img, i) => {
        const isFirst = i === 0;
        const showOnMobile = i < 5; // show 5 images on mobile to keep it tidy
        if (!showOnMobile) return null;
        return (
          <div
            key={i}
            className={`${styles.photoItem} ${styles.mobileItem} ${isFirst ? styles.mobileItemFull : ''}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
};

// ---------------------------------------------------------------------------
// GallerySection — Main component
// ---------------------------------------------------------------------------

export const GallerySection: React.FC = () => {
  const styles = useStyles();

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        {/* ---- Heading ---- */}
        <div className={styles.headingWrap}>
          <h2 className={styles.title}>
            Notre <span className={styles.titleAccent}>Ambiance</span>
          </h2>
          <p className={styles.subtitle}>
            Un aperçu de notre ambiance décontractée à Gremda
          </p>
          <div className={styles.titleDivider} aria-hidden="true" />
        </div>

        {/* ---- Desktop: bento grid (hidden on mobile) ---- */}
        <div className="hidden-sm-down">
          <BentoGrid />
        </div>

        {/* ---- Mobile: simpler grid (hidden on desktop) ---- */}
        <div className="hidden-md-up">
          <MobileGrid />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
