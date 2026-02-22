import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

type MenuTab = 'coffee' | 'pastries' | 'breakfast' | 'seasonal';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuData: Record<MenuTab, MenuItem[]> = {
  coffee: [
    { name: 'Espresso', description: 'Pure, intense Italian-style shot', price: '$3.50' },
    { name: 'Americano', description: 'Espresso with hot water', price: '$4.00' },
    { name: 'Cappuccino', description: 'Espresso, steamed milk, foam', price: '$5.50' },
    { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '$5.25' },
    { name: 'Macchiato', description: 'Espresso marked with foam', price: '$4.50' },
    { name: 'Pour Over', description: 'Single-origin hand-brewed', price: '$6.00' },
  ],
  pastries: [
    { name: 'Butter Croissant', description: 'Flaky, golden, French perfection', price: '$4.50' },
    { name: 'Pain au Chocolat', description: 'Chocolate-filled croissant', price: '$5.00' },
    { name: 'Almond Scone', description: 'Fresh-baked with real almonds', price: '$4.00' },
    { name: 'Blueberry Muffin', description: 'Bursting with fresh berries', price: '$3.75' },
    { name: 'Cinnamon Roll', description: 'Warm, gooey, house-made', price: '$5.50' },
    { name: 'Banana Bread', description: 'Moist and flavorful', price: '$4.25' },
  ],
  breakfast: [
    { name: 'Avocado Toast', description: 'Sourdough, avocado, cherry tomatoes', price: '$9.00' },
    { name: 'Breakfast Burrito', description: 'Eggs, cheese, veggies, salsa', price: '$10.50' },
    { name: 'Granola Bowl', description: 'Greek yogurt, granola, fresh fruit', price: '$8.50' },
    { name: 'Egg Sandwich', description: 'Fluffy eggs, cheese on brioche', price: '$7.50' },
    { name: 'Acai Bowl', description: 'Acai, banana, berries, granola', price: '$11.00' },
    { name: 'French Toast', description: 'Brioche, maple syrup, berries', price: '$9.50' },
  ],
  seasonal: [
    { name: 'Pumpkin Spice Latte', description: 'Fall favorite with real pumpkin', price: '$6.50' },
    { name: 'Matcha Latte', description: 'Premium ceremonial grade matcha', price: '$6.00' },
    { name: 'Lavender Honey Latte', description: 'Floral and sweet harmony', price: '$6.25' },
    { name: 'Maple Pecan Cold Brew', description: 'Limited edition winter blend', price: '$6.75' },
    { name: 'Rose Cardamom Latte', description: 'Exotic and aromatic', price: '$6.50' },
    { name: 'Turmeric Golden Milk', description: 'Anti-inflammatory wellness drink', price: '$5.75' },
  ],
};

const tabs: { id: MenuTab; label: string }[] = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'seasonal', label: 'Seasonal Specials' },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState<MenuTab>('coffee');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="menu" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 w-full overflow-clip" style={{ backgroundColor: 'var(--dark-roast)' }}>
      <div className="max-w-6xl mx-auto w-full px-2 sm:px-4">
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
            Our Menu
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl"
            style={{ color: 'var(--caramel-accent)' }}
          >
            Carefully curated selections for every craving
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-3 text-lg font-medium transition-all duration-300 rounded-full"
                style={{
                  color: activeTab === tab.id ? 'var(--dark-roast)' : 'var(--cream-latte)',
                  backgroundColor: activeTab === tab.id ? 'var(--caramel-accent)' : 'transparent',
                  border: activeTab === tab.id ? 'none' : '2px solid var(--espresso-brown)',
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: 'var(--caramel-accent)', zIndex: -1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full"
          >
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.2 }
                }}
                className="p-5 sm:p-6 rounded-xl cursor-pointer transition-all w-full min-w-0 overflow-hidden"
                style={{
                  backgroundColor: 'var(--espresso-brown)',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--caramel-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div className="flex justify-between items-start mb-2 w-full gap-4">
                  <h3 
                    className="text-xl font-bold flex-1 break-words"
                    style={{ color: 'var(--cream-latte)' }}
                  >
                    {item.name}
                  </h3>
                  <span 
                    className="text-xl font-bold whitespace-nowrap flex-shrink-0"
                    style={{ color: 'var(--caramel-accent)' }}
                  >
                    {item.price}
                  </span>
                </div>
                <p 
                  className="text-sm break-words"
                  style={{ color: 'var(--cream-latte)', opacity: 0.8 }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {activeTab === 'seasonal' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 p-4 rounded-lg text-center"
            style={{ 
              backgroundColor: 'rgba(198, 134, 66, 0.1)',
              border: '2px dashed var(--caramel-accent)',
            }}
          >
            <p 
              className="text-lg font-medium"
              style={{ color: 'var(--caramel-accent)' }}
            >
              ⏰ Limited Time Offers - Available while supplies last!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
