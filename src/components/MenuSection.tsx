import React, { useState, useMemo, useCallback } from 'react';
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components';
import { menuItems } from '../data/menuItems';
import type { MenuItem } from '../data/menuItems';

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

type Category =
  | 'Tout'
  | 'Boissons Signatures'
  | 'Cafés Classiques'
  | 'Thés & Infusions'
  | 'Pâtisseries';

const CATEGORIES: Category[] = [
  'Tout',
  'Boissons Signatures',
  'Cafés Classiques',
  'Thés & Infusions',
  'Pâtisseries',
];

const ACCENT = '#C9754A';
const DARK = '#2D1B14';

/* ---------- Tiny SVG icons for text-only categories ---------- */

const CoffeeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M17 8H18.5C19.88 8 21 9.12 21 10.5C21 11.88 19.88 13 18.5 13H17"
      stroke={ACCENT}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 8H17V17C17 19.21 15.21 21 13 21H7C4.79 21 3 19.21 3 17V8Z"
      stroke={ACCENT}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5 4V6" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 4V6" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 4V6" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TeaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 13.5V12C5 8.69 7.69 6 11 6H12.5C14.09 6 15.5 6.87 16.29 8.17"
      stroke={ACCENT}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 13.5V15C17 18.31 14.31 21 11 21H10C6.69 21 4 18.31 4 15V13.5"
      stroke={ACCENT}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17 9H19C20.1 9 21 9.9 21 11V11.5C21 12.6 20.1 13.5 19 13.5H17" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3L16 5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 3L12 5" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 5H17" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const useStyles = makeStyles({
  section: {
    backgroundColor: '#FDF8F5',
    padding: '96px 24px',
    '@media (max-width: 767px)': {
      padding: '56px 16px',
    },
  },
  container: {
    maxWidth: '1100px',
    ...shorthands.margin('0', 'auto'),
  },

  /* ---- Section heading ---- */
  headingWrap: {
    textAlign: 'center',
    marginBottom: '56px',
    '@media (max-width: 767px)': {
      marginBottom: '40px',
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
    maxWidth: '520px',
    marginInline: 'auto',
    lineHeight: 1.6,
  },
  titleDivider: {
    width: '48px',
    height: '2px',
    backgroundColor: ACCENT,
    margin: '20px auto 0',
    ...shorthands.borderRadius('2px'),
  },

  /* ---- Filter pills ---- */
  filters: {
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.gap('10px'),
    marginBottom: '52px',
    flexWrap: 'wrap',
    '@media (max-width: 767px)': {
      ...shorthands.gap('6px'),
      marginBottom: '36px',
    },
  },
  filterButton: {
    ...shorthands.borderRadius('9999px'),
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 500,
    fontSize: '13px',
    letterSpacing: '0.04em',
    ...shorthands.padding('10px', '26px'),
    ...shorthands.border('1.5px', 'solid', ACCENT),
    backgroundColor: 'transparent',
    color: ACCENT,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    ':hover': {
      backgroundColor: ACCENT,
      color: '#FFFFFF',
    },
    '@media (max-width: 767px)': {
      fontSize: '11px',
      ...shorthands.padding('8px', '16px'),
    },
  },
  filterButtonActive: {
    backgroundColor: ACCENT,
    color: '#FFFFFF',
    boxShadow: '0 4px 14px rgba(201, 117, 74, 0.3)',
  },

  /* ================ PHOTO CARD GRID ================ */
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    ...shorthands.gap('24px'),
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  photoCard: {
    backgroundColor: '#FFFFFF',
    ...shorthands.borderRadius('16px'),
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
    boxShadow: '0 8px 24px rgba(45, 27, 20, 0.07)',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 40px rgba(45, 27, 20, 0.12)',
    },
  },
  photoCardImageWrap: {
    position: 'relative',
    width: '100%',
    paddingTop: '62%',
    overflow: 'hidden',
    backgroundColor: '#F0EBE5',
    flexShrink: 0,
  },
  photoCardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  photoCardBadge: {
    position: 'absolute',
    top: '14px',
    left: '14px',
    backgroundColor: ACCENT,
    color: '#FFFFFF',
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '10px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    ...shorthands.padding('5px', '14px'),
    ...shorthands.borderRadius('4px'),
    lineHeight: 1.4,
    zIndex: 2,
  },
  photoCardBody: {
    ...shorthands.padding('20px', '22px', '22px'),
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  photoCardName: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '18px',
    fontWeight: 600,
    color: DARK,
    lineHeight: 1.3,
    marginBottom: '6px',
  },
  photoCardDesc: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '13px',
    fontWeight: 400,
    color: '#7A6D63',
    lineHeight: 1.6,
    flexGrow: 1,
    marginBottom: '16px',
  },
  photoCardPriceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #F0EBE5',
    paddingTop: '14px',
  },
  photoCardPrice: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '18px',
    fontWeight: 700,
    color: ACCENT,
    lineHeight: 1.3,
  },
  photoCardIcon: {
    color: '#D4C9BE',
    fontSize: '12px',
  },

  /* ================ TEXT LIST (classics / teas) ================ */
  textList: {
    display: 'flex',
    flexDirection: 'column',
  },
  textItem: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('14px'),
    padding: '18px 0',
    borderBottom: '1px solid rgba(201, 117, 74, 0.1)',
    transition: 'background-color 0.2s ease',
    ...shorthands.borderRadius('4px'),
    ':hover': {
      backgroundColor: 'rgba(201, 117, 74, 0.04)',
    },
  },
  textItemIconWrap: {
    flexShrink: 0,
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(201, 117, 74, 0.1)',
    ...shorthands.borderRadius('50%'),
    marginTop: '2px',
  },
  textItemBody: {
    flexGrow: 1,
    minWidth: 0,
  },
  textItemNameRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '12px',
    marginBottom: '4px',
  },
  textItemName: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '17px',
    fontWeight: 600,
    color: DARK,
    lineHeight: 1.35,
    flexShrink: 0,
  },
  textItemDots: {
    flexGrow: 1,
    minWidth: '12px',
    height: '1px',
    borderBottom: '1.5px dotted rgba(201, 117, 74, 0.25)',
    marginBottom: '6px',
  },
  textItemPrice: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    color: ACCENT,
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  textItemDesc: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '13px',
    fontWeight: 400,
    color: '#7A6D63',
    lineHeight: 1.55,
    maxWidth: '480px',
  },

  emptyMessage: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '16px',
    color: '#7A6D63',
    textAlign: 'center',
    ...shorthands.padding('48px', '24px'),
    gridColumn: '1 / -1',
  },

  /* ---- Decorative section divider ---- */
  sectionDivider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    margin: '56px 0 48px',
    '@media (max-width: 767px)': {
      margin: '40px 0 32px',
    },
  },
  dividerLine: {
    flexGrow: 1,
    height: '1px',
    backgroundColor: 'rgba(201, 117, 74, 0.2)',
    maxWidth: '160px',
  },
  dividerIcon: {
    color: ACCENT,
    fontSize: '14px',
    opacity: 0.5,
    flexShrink: 0,
  },
  dividerLabel: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '10px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: ACCENT,
    opacity: 0.6,
    flexShrink: 0,
    padding: '0 4px',
  },

  /* ---- Category section separator ---- */
  categoryBlock: {
    marginBottom: '40px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  textCategoryBlock: {
    marginBottom: '40px',
    '&:last-child': {
      marginBottom: 0,
    },
    padding: '32px',
    backgroundColor: '#FBF6EE',
    ...shorthands.borderRadius('16px'),
    '@media (max-width: 767px)': {
      padding: '20px 16px',
    },
  },
  categoryTitle: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '22px',
    fontWeight: 600,
    color: DARK,
    marginBottom: '6px',
  },
  categorySubtitle: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: ACCENT,
    marginBottom: '20px',
  },
});

// ---------------------------------------------------------------------------
// PhotoCard — for items with images (Signatures, Pastries)
// ---------------------------------------------------------------------------

interface PhotoCardProps {
  item: MenuItem;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ item }) => {
  const styles = useStyles();
  return (
    <div className={styles.photoCard}>
      <div className={styles.photoCardImageWrap}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.photoCardImage}
          loading="lazy"
        />
        {item.isSignature && (
          <span className={styles.photoCardBadge}>Signature</span>
        )}
      </div>
      <div className={styles.photoCardBody}>
        <h3 className={styles.photoCardName}>{item.name}</h3>
        <p className={styles.photoCardDesc}>{item.description}</p>
        <div className={styles.photoCardPriceRow}>
          <span className={styles.photoCardPrice}>{item.price}</span>
          <span className={styles.photoCardIcon}>✦</span>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// TextRow — for text-only items (Classics, Teas)
// ---------------------------------------------------------------------------

interface TextRowProps {
  item: MenuItem;
  icon: 'coffee' | 'tea';
}

const TextRow: React.FC<TextRowProps> = ({ item, icon }) => {
  const styles = useStyles();
  return (
    <div className={styles.textItem}>
      <div className={styles.textItemIconWrap}>
        {icon === 'coffee' ? <CoffeeIcon /> : <TeaIcon />}
      </div>
      <div className={styles.textItemBody}>
        <div className={styles.textItemNameRow}>
          <span className={styles.textItemName}>{item.name}</span>
          <span className={styles.textItemDots} aria-hidden="true" />
          <span className={styles.textItemPrice}>{item.price}</span>
        </div>
        <p className={styles.textItemDesc}>{item.description}</p>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// SectionDivider — decorative separator between photo & text sections
// ---------------------------------------------------------------------------

interface SectionDividerProps {
  label: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  const styles = useStyles();
  return (
    <div className={styles.sectionDivider} role="separator" aria-orientation="horizontal">
      <span className={styles.dividerLine} aria-hidden="true" />
      <span className={styles.dividerIcon} aria-hidden="true">✦</span>
      <span className={styles.dividerLabel}>{label}</span>
      <span className={styles.dividerIcon} aria-hidden="true">✦</span>
      <span className={styles.dividerLine} aria-hidden="true" />
    </div>
  );
};

// ---------------------------------------------------------------------------
// CategoryBlock — renders one category in its optimal style
// ---------------------------------------------------------------------------

interface CategoryBlockProps {
  category: string;
  items: MenuItem[];
  isTextSection?: boolean;
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({ category, items, isTextSection = false }) => {
  const styles = useStyles();

  // Determine display style
  const hasPhotos = items.some((i) => i.image.length > 0);
  const isClassic = category === 'Cafés Classiques';

  return (
    <div className={isTextSection ? styles.textCategoryBlock : styles.categoryBlock}>
      <h3 className={styles.categoryTitle}>{category}</h3>
      <p className={styles.categorySubtitle}>
        {category === 'Boissons Signatures'
          ? 'Nos recettes maison'
          : category === 'Pâtisseries'
            ? 'Frais chaque matin'
            : category === 'Cafés Classiques'
              ? 'Les indémodables'
              : 'Pour les moments calmes'}
      </p>

      {hasPhotos ? (
        <div className={styles.photoGrid}>
          {items.map((item) => (
            <PhotoCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={styles.textList}>
          {items.map((item) => (
            <TextRow
              key={item.id}
              item={item}
              icon={isClassic ? 'coffee' : 'tea'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// MenuSection — Main component
// ---------------------------------------------------------------------------

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Tout');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Tout') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // When "Tout" is selected, group items by category
  const grouped = useMemo(() => {
    if (activeCategory !== 'Tout') return null;
    const groups: Record<string, MenuItem[]> = {};
    menuItems.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [activeCategory]);

  const styles = useStyles();

  const handleFilterClick = useCallback(
    (cat: Category) => setActiveCategory(cat),
    [],
  );

  return (
    <section id="menu" className={styles.section}>
      <div className={styles.container}>
        {/* ---- Heading ---- */}
        <div className={styles.headingWrap}>
          <h2 className={styles.title}>
            Notre <span className={styles.titleAccent}>Carte</span>
          </h2>
          <p className={styles.subtitle}>
            Boissons signatures, classiques et pâtisseries &mdash; le meilleur du café à Sfax
          </p>
          <div className={styles.titleDivider} aria-hidden="true" />
        </div>

        {/* ---- Filter pills ---- */}
        <div className={styles.filters} role="tablist" aria-label="Catégories de menu">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={mergeClasses(
                styles.filterButton,
                activeCategory === cat && styles.filterButtonActive,
              )}
              onClick={() => handleFilterClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---- Content ---- */}
        {activeCategory === 'Tout' && grouped ? (
          // Photos first, then text — clean visual flow
          <>
            {/* ---- Photo categories ---- */}
            {(['Boissons Signatures', 'Pâtisseries'] as const).map(
              (cat) =>
                grouped[cat] &&
                grouped[cat].length > 0 && (
                  <CategoryBlock
                    key={cat}
                    category={cat}
                    items={grouped[cat]}
                  />
                ),
            )}

            {/* ---- Decorative divider ---- */}
            <SectionDivider label="À Siroter" />

            {/* ---- Text categories ---- */}
            {(['Cafés Classiques', 'Thés & Infusions'] as const).map(
              (cat) =>
                grouped[cat] &&
                grouped[cat].length > 0 && (
                  <CategoryBlock
                    key={cat}
                    category={cat}
                    items={grouped[cat]}
                    isTextSection
                  />
                ),
            )}
          </>
        ) : filteredItems.length === 0 ? (
          <p className={styles.emptyMessage}>
            Aucun article trouvé dans cette catégorie.
          </p>
        ) : (
          <CategoryBlock
            category={activeCategory}
            items={filteredItems}
          />
        )}
      </div>
    </section>
  );
};

export default MenuSection;
