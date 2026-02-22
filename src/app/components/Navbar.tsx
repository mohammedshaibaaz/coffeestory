import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reserve', href: '#reservation' },
    { label: 'Contact', href: '#location' },
  ];

  const scrollTo = (hash: string) => {
    try {
      const el = document.querySelector(hash);
      if (el) {
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // fallback: change location hash
        window.location.hash = hash;
      }
    } catch (e) {
      window.location.hash = hash;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12 lg:py-6"
      style={{
        backgroundColor: isScrolled ? 'rgba(28, 28, 28, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        borderBottom: isScrolled ? '1px solid rgba(198, 134, 66, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Coffee size={32} color="var(--caramel-accent)" strokeWidth={2.5} />
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'var(--cream-latte)', fontFamily: 'var(--font-heading)' }}
          >
            Coffee Story
          </span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="relative text-lg font-medium tracking-wide group"
              style={{ color: 'var(--cream-latte)' }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: 'var(--caramel-accent)' }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('#reservation')}
          className="hidden lg:block px-8 py-3 rounded-full font-semibold tracking-wide transition-all"
          style={{
            backgroundColor: 'var(--caramel-accent)',
            color: 'var(--dark-roast)',
            boxShadow: '0 4px 20px rgba(198, 134, 66, 0.3)',
          }}
        >
          Order Online
        </motion.button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X size={28} color="var(--cream-latte)" />
          ) : (
            <Menu size={28} color="var(--cream-latte)" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-6 pt-6"
            style={{ borderTop: '1px solid rgba(198, 134, 66, 0.2)' }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    scrollTo(item.href);
                  }}
                  className="text-xl font-medium py-3 px-4 rounded-xl transition-all"
                  style={{
                    color: 'var(--cream-latte)',
                    backgroundColor: 'rgba(198, 134, 66, 0.1)',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollTo('#reservation');
                }}
                className="w-full py-4 rounded-full font-semibold text-lg mt-2"
                style={{
                  backgroundColor: 'var(--caramel-accent)',
                  color: 'var(--dark-roast)',
                }}
              >
                Order Online
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
