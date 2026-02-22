import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const pulse = document.getElementById('cta-pulse');
      if (pulse) {
        pulse.classList.add('animate-pulse-once');
        setTimeout(() => {
          pulse.classList.remove('animate-pulse-once');
        }, 1000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-6 right-6 z-50 hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  id="cta-pulse"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: 'var(--caramel-accent)', opacity: 0.4 }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const el = document.querySelector('#reservation');
                    if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="relative flex items-center gap-3 px-8 py-4 rounded-full shadow-2xl"
                  style={{
                    backgroundColor: 'var(--caramel-accent)',
                    color: 'var(--dark-roast)',
                  }}
                >
                  <ShoppingBag size={24} />
                  <span className="font-bold text-lg">Order Now</span>
                </motion.button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--dark-roast)' }}
                >
                  <X size={14} color="var(--cream-latte)" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4"
              style={{ backgroundColor: 'var(--dark-roast)' }}
            >
              <div className="max-w-md mx-auto relative">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const el = document.querySelector('#reservation');
                    if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full shadow-2xl"
                  style={{
                    backgroundColor: 'var(--caramel-accent)',
                    color: 'var(--dark-roast)',
                  }}
                >
                  <ShoppingBag size={24} />
                  <span className="font-bold text-lg">Order Now</span>
                </motion.button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--espresso-brown)' }}
                >
                  <X size={16} color="var(--cream-latte)" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse-once {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0; }
        }
        .animate-pulse-once {
          animation: pulse-once 1s ease-out;
        }
      `}</style>
    </>
  );
}
