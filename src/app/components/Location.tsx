import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const openingHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 7:00 PM' },
];

export function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section 
      id="location"
      ref={sectionRef} 
      className="py-24 px-4 sm:px-6 lg:px-8 w-full overflow-clip"
      style={{ backgroundColor: 'var(--espresso-brown)' }}
    >
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
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
            Visit Us
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl"
            style={{ color: 'var(--caramel-accent)' }}
          >
            Your new favorite spot awaits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div 
              className="rounded-2xl p-8 shadow-xl"
              style={{ backgroundColor: 'var(--dark-roast)' }}
            >
              <h3 
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--caramel-accent)' }}
              >
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} color="var(--caramel-accent)" className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--cream-latte)' }}>Address</p>
                    <p style={{ color: 'var(--cream-latte)', opacity: 0.8 }}>
                      123 Coffee Lane<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} color="var(--caramel-accent)" className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--cream-latte)' }}>Phone</p>
                    <p style={{ color: 'var(--cream-latte)', opacity: 0.8 }}>
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} color="var(--caramel-accent)" className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1" style={{ color: 'var(--cream-latte)' }}>Email</p>
                    <p style={{ color: 'var(--cream-latte)', opacity: 0.8 }}>
                      hello@coffeestory.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-8 shadow-xl"
              style={{ backgroundColor: 'var(--dark-roast)' }}
            >
              <h3 
                className="text-3xl font-bold mb-6 flex items-center gap-3"
                style={{ color: 'var(--caramel-accent)' }}
              >
                <Clock size={32} />
                Opening Hours
              </h3>

              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center pb-3"
                    style={{ borderBottom: index < openingHours.length - 1 ? '1px solid var(--espresso-brown)' : 'none' }}
                  >
                    <span 
                      className="text-lg font-medium"
                      style={{ color: 'var(--cream-latte)' }}
                    >
                      {schedule.day}
                    </span>
                    <span 
                      className="text-lg"
                      style={{ color: 'var(--caramel-accent)' }}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0">
              <img
                src="/images/cafe-exterior.jpg"
                alt="Cafe exterior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--caramel-accent)' }}
              >
                <MapPin size={32} color="var(--dark-roast)" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-bold mt-4"
                style={{ color: 'var(--cream-latte)' }}
              >
                Find us in the heart of downtown
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
