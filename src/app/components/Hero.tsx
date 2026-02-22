import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.15,
        duration: 20,
        ease: 'none',
      });
    }
  }, []);

  const words = ["Where", "Every", "Cup", "Tells", "a", "Story"];

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-clip">
      <motion.div
        ref={imageRef}
        style={{ y }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/images/hero-cafe-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center max-w-6xl mb-16"
        >
          <div className="mb-8 overflow-hidden">
            <motion.div className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4">
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  initial={{ y: 200, opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8 + wordIndex * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold"
                  style={{
                    color: 'var(--cream-latte)',
                    textShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(198, 134, 66, 0.3)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ backgroundColor: 'var(--caramel-accent)' }}
            />
            <p
              className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-16 font-light tracking-wide"
              style={{ color: 'var(--cream-latte)', fontFamily: 'var(--font-body)' }}
            >
              Crafted with passion, served with heart
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="group relative px-12 py-5 sm:px-16 sm:py-6 text-lg sm:text-xl font-bold tracking-wide overflow-hidden"
              style={{
                backgroundColor: 'var(--caramel-accent)',
                color: 'var(--dark-roast)',
                border: 'none',
                borderRadius: '60px',
                cursor: 'pointer',
                boxShadow: '0 20px 60px rgba(198, 134, 66, 0.4)',
              }}
            >
              <motion.span
                className="absolute inset-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                }}
              />
              <span className="relative z-10">Explore Our Menu</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="absolute bottom-12 sm:bottom-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: 'var(--caramel-accent)' }}
            >
              Scroll
            </span>
            <ChevronDown size={32} color="var(--caramel-accent)" strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
            animate={{
              y: [0, -40 - Math.random() * 40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
}
