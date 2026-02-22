import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  useEffect(() => {
    if (sectionRef.current) {
      const images = sectionRef.current.querySelectorAll('.story-image');
      
      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          { 
            clipPath: index % 2 === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
            scale: 1.2,
          },
          {
            clipPath: 'inset(0 0% 0 0%)',
            scale: 1,
            duration: 1.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              end: 'top 30%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section 
      id="story"
      ref={sectionRef} 
      className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-8 lg:px-12 overflow-clip w-full" 
      style={{ backgroundColor: 'var(--cream-latte)' }}
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, var(--caramel-accent) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--terracotta-highlight) 0%, transparent 50%)',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 w-full px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 sm:mb-32 lg:mb-40"
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
            style={{ color: 'var(--dark-roast)' }}
          >
            Our Story
          </h2>
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto font-light leading-relaxed"
            style={{ color: 'var(--espresso-brown)', opacity: 0.9 }}
          >
            A journey of passion, quality, and community
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-32 lg:space-y-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="story-image relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1764002673510-4b2b0ee38078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc3MTU3NjkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cozy cafe interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:pl-8"
            >
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--caramel-accent)' }} />
              <h3 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ color: 'var(--dark-roast)' }}
              >
                Crafted with Love
              </h3>
              <p 
                className="text-lg sm:text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--espresso-brown)', opacity: 0.85 }}
              >
                Since 2018, we've been dedicated to bringing you the finest coffee experience. Every bean is carefully selected, every cup is expertly crafted, and every moment in our café is designed to feel like home.
              </p>
              <p 
                className="text-lg sm:text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--espresso-brown)', opacity: 0.85 }}
              >
                Our master baristas have spent years perfecting their craft, ensuring that each beverage tells its own unique story. From the first sip to the last, we want you to taste the difference that passion makes.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:pr-8 order-2 lg:order-1"
            >
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--caramel-accent)' }} />
              <h3 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                style={{ color: 'var(--dark-roast)' }}
              >
                Community First
              </h3>
              <p 
                className="text-lg sm:text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--espresso-brown)', opacity: 0.85 }}
              >
                We believe coffee is more than just a drink—it's a catalyst for connection, creativity, and conversation. Our café is a gathering place where friendships are formed and ideas come to life.
              </p>
              <p 
                className="text-lg sm:text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--espresso-brown)', opacity: 0.85 }}
              >
                Supporting local farmers, sustainable practices, and ethical sourcing isn't just good business—it's the right thing to do. We're proud to be a part of a global community that values quality and integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <div className="story-image relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1771159978458-3df74f41a918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwbWFraW5nJTIwY29mZmVlfGVufDF8fHx8MTc3MTUwODk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Barista making coffee"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
