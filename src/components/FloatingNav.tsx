import React, { useEffect, useState } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const ACCENT = '#C9754A';
const DARK = '#2D1B14';

const useStyles = makeStyles({
  wrapper: {
    position: 'fixed',
    bottom: '28px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease',
  },
  wrapperVisible: {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateX(-50%) translateY(0)',
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    backdropFilter: 'blur(16px) saturate(1.4)',
    WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
    ...shorthands.borderRadius('9999px'),
    boxShadow: '0 4px 24px rgba(45, 27, 20, 0.10), 0 1px 4px rgba(45, 27, 20, 0.06)',
    ...shorthands.border('1px', 'solid', 'rgba(201, 117, 74, 0.15)'),
    ...shorthands.padding('6px', '8px'),
    '@media (max-width: 767px)': {
      ...shorthands.padding('5px', '6px'),
    },
  },

  link: {
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: '12px',
    fontWeight: 600,
    color: DARK,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    ...shorthands.padding('8px', '18px'),
    ...shorthands.borderRadius('9999px'),
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    ':hover': {
      backgroundColor: ACCENT,
      color: '#FFFFFF',
    },
    '@media (max-width: 767px)': {
      fontSize: '10px',
      ...shorthands.padding('6px', '12px'),
    },
  },
  linkActive: {
    backgroundColor: ACCENT,
    color: '#FFFFFF',
  },

  dot: {
    width: '3px',
    height: '3px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: 'rgba(201, 117, 74, 0.25)',
    flexShrink: 0,
  },
});

// ---------------------------------------------------------------------------
// Nav items
// ---------------------------------------------------------------------------

const NAV_ITEMS = [
  { label: 'Carte', href: '#menu' },
  { label: 'Histoire', href: '#story' },
  { label: 'Galerie', href: '#gallery' },
] as const;

// ---------------------------------------------------------------------------
// FloatingNav
// ---------------------------------------------------------------------------

export const FloatingNav: React.FC = () => {
  const styles = useStyles();
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Show the nav after scrolling past the hero
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -20% 0px' },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveId(id);
  };

  return (
    <div
      className={`${styles.wrapper} ${visible ? styles.wrapperVisible : ''}`}
      aria-label="Navigation rapide"
      role="navigation"
    >
      <nav className={styles.nav}>
        {NAV_ITEMS.map((item, i) => {
          const id = item.href.replace('#', '');
          return (
            <React.Fragment key={item.href}>
              {i > 0 && <span className={styles.dot} aria-hidden="true" />}
              <a
                href={item.href}
                className={`${styles.link} ${activeId === id ? styles.linkActive : ''}`}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingNav;
