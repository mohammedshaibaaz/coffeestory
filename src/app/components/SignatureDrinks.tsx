import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

interface Drink {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
}

const drinks: Drink[] = [
  {
    id: 1,
    name: 'Signature Cappuccino',
    description: 'Velvety espresso with perfectly steamed milk and artisan foam',
    price: '$5.50',
    image: '/images/cappuccino-drink.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Iced Caramel Delight',
    description: 'Refreshing cold brew with house-made caramel and cream',
    price: '$6.00',
    image: '/images/iced-caramel-drink.jpg',
  },
  {
    id: 3,
    name: 'Mocha Indulgence',
    description: 'Rich chocolate meets premium espresso in perfect harmony',
    price: '$6.50',
    image: '/images/mocha-drink.jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'Caramel Macchiato',
    description: 'Layered espresso with vanilla and golden caramel drizzle',
    price: '$5.75',
    image: '/images/caramel-macchiato-drink.jpg',
  },
  {
    id: 5,
    name: 'Flat White Perfection',
    description: 'Smooth microfoam over double ristretto shots',
    price: '$5.25',
    image: '/images/flat-white-drink.jpg',
  },
  {
    id: 6,
    name: 'Nitro Cold Brew',
    description: 'Silky smooth cold brew infused with nitrogen for a creamy finish',
    price: '$5.50',
    image: '/images/nitro-cold-brew-drink.jpg',
    featured: true,
  },
];

export function SignatureDrinks() {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 sm:py-40 lg:py-48 px-6 sm:px-8 lg:px-12 overflow-clip w-full" 
      style={{ backgroundColor: 'var(--dark-roast)' }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 30%, var(--caramel-accent) 0%, transparent 50%), radial-gradient(circle at 70% 70%, var(--terracotta-highlight) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Signature Drinks
          </h2>
          <p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light max-w-4xl mx-auto"
            style={{ color: 'var(--caramel-accent)', opacity: 0.9 }}
          >
            Expertly crafted beverages that define our passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {drinks.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
              onClick={() => setSelectedDrink(drink)}
            >
              <motion.div 
                whileHover={{ y: -16, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{ backgroundColor: 'var(--espresso-brown)' }}
              >
                {drink.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.12 + 0.5 }}
                    className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full flex items-center gap-2"
                    style={{ backgroundColor: 'var(--caramel-accent)' }}
                  >
                    <Sparkles size={16} color="var(--dark-roast)" />
                    <span className="text-sm font-bold" style={{ color: 'var(--dark-roast)' }}>
                      Featured
                    </span>
                  </motion.div>
                )}

                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <motion.img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: 'radial-gradient(circle at center, transparent 0%, rgba(198, 134, 66, 0.2) 100%)',
                    }}
                  />
                </div>

                <div className="p-6 sm:p-8 min-w-0">
                  <h3 
                    className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-opacity-100 transition-all break-words"
                    style={{ color: 'var(--cream-latte)' }}
                  >
                    {drink.name}
                  </h3>
                  <p 
                    className="text-base sm:text-lg mb-6 leading-relaxed break-words"
                    style={{ color: 'var(--cream-latte)', opacity: 0.75 }}
                  >
                    {drink.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: 'var(--caramel-accent)' }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {drink.price}
                    </motion.span>
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--caramel-accent)' }}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M10 4l6 6-6 6" stroke="var(--dark-roast)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDrink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedDrink(null)}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(20px)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: 'var(--espresso-brown)' }}
            >
              <button
                onClick={() => setSelectedDrink(null)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--dark-roast)' }}
              >
                <X size={24} color="var(--cream-latte)" />
              </button>

              <div className="relative h-96 sm:h-[500px]">
                <img
                  src={selectedDrink.image}
                  alt={selectedDrink.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {selectedDrink.featured && (
                  <div
                    className="absolute top-6 left-6 px-5 py-3 rounded-full flex items-center gap-2"
                    style={{ backgroundColor: 'var(--caramel-accent)' }}
                  >
                    <Sparkles size={20} color="var(--dark-roast)" />
                    <span className="font-bold" style={{ color: 'var(--dark-roast)' }}>
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8 sm:p-10 min-w-0">
                <h3 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 break-words"
                  style={{ color: 'var(--cream-latte)' }}
                >
                  {selectedDrink.name}
                </h3>
                <p 
                  className="text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed break-words"
                  style={{ color: 'var(--cream-latte)', opacity: 0.85 }}
                >
                  {selectedDrink.description}
                </p>
                <div className="flex items-center justify-between gap-6">
                  <span 
                    className="text-5xl font-bold"
                    style={{ color: 'var(--caramel-accent)' }}
                  >
                    {selectedDrink.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-full text-xl font-bold transition-all"
                    style={{
                      backgroundColor: 'var(--caramel-accent)',
                      color: 'var(--dark-roast)',
                      boxShadow: '0 8px 32px rgba(198, 134, 66, 0.4)',
                    }}
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
