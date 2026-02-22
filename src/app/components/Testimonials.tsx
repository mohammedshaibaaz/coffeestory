import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    image: 'https://images.unsplash.com/photo-1760551937527-2bc6cfe45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBjYWZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNTc2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'This café has become my daily sanctuary. The attention to detail in every cup is extraordinary. The baristas remember my order and always greet me with a smile.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1661675040895-a4bd398e910c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBoYXBweSUyMGNvZmZlZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTU3NjkyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: "I've tried coffee shops around the world, but nothing compares to the quality and atmosphere here. It's the perfect place for morning meetings or afternoon focus sessions.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer Park',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1643816831186-b2427a8f9f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUzOTQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    text: 'The aesthetic, the flavors, the vibe—everything is perfection. Their seasonal drinks are creative and delicious. This is where I bring all my clients to impress them.',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-clip w-full"
      style={{ backgroundColor: 'var(--espresso-brown)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: 'var(--cream-latte)' }}
          >
            What Our Guests Say
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl"
            style={{ color: 'var(--caramel-accent)' }}
          >
            Real stories from real coffee lovers
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl min-w-0"
                    style={{ 
                      backgroundColor: 'var(--dark-roast)',
                      border: '2px solid var(--caramel-accent)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                      <div className="relative flex-shrink-0">
                        <div 
                          className="absolute -inset-2 rounded-full"
                          style={{ backgroundColor: 'var(--caramel-accent)', opacity: 0.3 }}
                        />
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                          style={{ border: '3px solid var(--caramel-accent)' }}
                          loading="lazy"
                        />
                      </div>

                      <div className="text-center sm:text-left flex-1 min-w-0">
                        <h3 
                          className="text-2xl sm:text-3xl font-bold mb-2"
                          style={{ color: 'var(--cream-latte)' }}
                        >
                          {testimonial.name}
                        </h3>
                        <p 
                          className="text-lg mb-3"
                          style={{ color: 'var(--caramel-accent)' }}
                        >
                          {testimonial.role}
                        </p>
                        <div className="flex gap-1 justify-center sm:justify-start">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              fill="var(--caramel-accent)" 
                              color="var(--caramel-accent)" 
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote 
                      className="text-xl sm:text-2xl leading-relaxed italic"
                      style={{ color: 'var(--cream-latte)' }}
                    >
                      "{testimonial.text}"
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all duration-300"
                style={{
                  width: currentIndex === index ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  backgroundColor: currentIndex === index ? 'var(--caramel-accent)' : 'var(--cream-latte)',
                  opacity: currentIndex === index ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
