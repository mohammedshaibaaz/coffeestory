import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Coffee, Star, Award, Calendar } from 'lucide-react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  { 
    value: 50000, 
    suffix: '+', 
    label: 'Cups Served',
    icon: <Coffee size={48} strokeWidth={2} />,
  },
  { 
    value: 5, 
    suffix: '★', 
    label: 'Star Reviews',
    icon: <Star size={48} strokeWidth={2} />,
  },
  { 
    value: 25, 
    suffix: '+', 
    label: 'Signature Blends',
    icon: <Award size={48} strokeWidth={2} />,
  },
  { 
    value: 8, 
    suffix: '', 
    label: 'Years Serving',
    icon: <Calendar size={48} strokeWidth={2} />,
  },
];

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2500;
        const steps = 80;
        const increment = stat.value / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = stat.value;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current);
              return newCounts;
            });
          }
        }, duration / steps);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-8 lg:px-12 overflow-clip w-full"
      style={{ 
        background: 'linear-gradient(135deg, var(--espresso-brown) 0%, var(--dark-roast) 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-full h-full opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, var(--caramel-accent) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--terracotta-highlight) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 sm:mb-32"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-1.5 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: 'var(--caramel-accent)' }}
          />
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8"
            style={{ color: 'var(--cream-latte)' }}
          >
            Our Impact
          </h2>
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light"
            style={{ color: 'var(--caramel-accent)', opacity: 0.9 }}
          >
            Numbers that tell our story of excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative p-10 sm:p-12 rounded-3xl backdrop-blur-md overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(245, 235, 221, 0.08)',
                border: '2px solid rgba(245, 235, 221, 0.15)',
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(198, 134, 66, 0.15) 0%, transparent 70%)',
                }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="mb-6"
                  style={{ color: 'var(--caramel-accent)' }}
                  animate={isInView ? { 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.5 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 tabular-nums"
                  style={{ color: 'var(--caramel-accent)' }}
                >
                  {counts[index].toLocaleString()}
                  <span className="ml-1">{stat.suffix}</span>
                </motion.div>
                
                <div 
                  className="text-xl sm:text-2xl font-medium tracking-wide"
                  style={{ color: 'var(--cream-latte)', opacity: 0.9 }}
                >
                  {stat.label}
                </div>
              </div>

              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: 'var(--caramel-accent)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
