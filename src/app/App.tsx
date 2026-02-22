import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { SignatureDrinks } from './components/SignatureDrinks';
import { Stats } from './components/Stats';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Menu } from './components/Menu';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: 'var(--dark-roast)' }}
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6"
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <motion.path
                    d="M40 10C23.43 10 10 23.43 10 40s13.43 30 30 30 30-13.43 30-30S56.57 10 40 10zm0 54c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24z"
                    fill="var(--caramel-accent)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="8"
                    fill="var(--caramel-accent)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  />
                </svg>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold tracking-tight"
                style={{ color: 'var(--cream-latte)', fontFamily: 'var(--font-heading)' }}
              >
                Coffee Story
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg mt-2"
                style={{ color: 'var(--caramel-accent)' }}
              >
                Brewing excellence...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="smooth-scroll-container">
        <div className="grain-overlay" />
        
        <Navbar />
        <Hero />
        <Story />
        <SignatureDrinks />
        <Stats />
        <Gallery />
        <Testimonials />
        <Menu />
        <Reservation />
        <Location />
        <Footer />
        <StickyCTA />
      </div>
    </>
  );
}
