import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import FloatingNav from './components/FloatingNav';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for fade-in animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <div className="section-fade-in">
        <MenuSection />
      </div>
      <div className="section-fade-in">
        <StorySection />
      </div>
      <div className="section-fade-in">
        <GallerySection />
      </div>
      <Footer />
      <FloatingNav />
    </>
  );
}

export default App;
