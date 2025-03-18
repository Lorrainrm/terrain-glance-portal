
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyDetails from '@/components/PropertyDetails';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import LocationMap from '@/components/LocationMap';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    
    // Setup reveal animations for elements with the reveal-animation class
    const setupRevealAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      document.querySelectorAll('.reveal-animation').forEach((el) => {
        observer.observe(el);
      });
    };

    setupRevealAnimations();
    
    // Cleanup
    return () => {
      document.querySelectorAll('.reveal-animation').forEach((el) => {
        el.classList.remove('active');
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PropertyDetails />
        <Gallery />
        <VideoSection />
        <LocationMap />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
