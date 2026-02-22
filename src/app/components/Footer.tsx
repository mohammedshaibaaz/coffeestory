import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-16 px-4 sm:px-6 lg:px-8 w-full overflow-clip"
      style={{ backgroundColor: 'var(--dark-roast)' }}
    >
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={32} color="var(--caramel-accent)" />
              <h3 
                className="text-2xl font-bold"
                style={{ color: 'var(--cream-latte)' }}
              >
                Coffee Story
              </h3>
            </div>
            <p 
              className="leading-relaxed"
              style={{ color: 'var(--cream-latte)', opacity: 0.8 }}
            >
              Where every cup tells a story. Crafting memorable coffee experiences since 2018.
            </p>
          </div>

          <div>
            <h4 
              className="text-xl font-bold mb-4"
              style={{ color: 'var(--caramel-accent)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Menu', 'About Us', 'Reservations', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4 }}
                    className="inline-block transition-colors"
                    style={{ color: 'var(--cream-latte)', opacity: 0.8 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--caramel-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--cream-latte)';
                    }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="text-xl font-bold mb-4"
              style={{ color: 'var(--caramel-accent)' }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                  style={{ backgroundColor: 'var(--espresso-brown)' }}
                  aria-label={label}
                >
                  <Icon size={20} color="var(--caramel-accent)" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="pt-8 text-center"
          style={{ borderTop: '1px solid var(--espresso-brown)' }}
        >
          <p 
            className="text-sm"
            style={{ color: 'var(--cream-latte)', opacity: 0.6 }}
          >
            © {currentYear} Coffee Story. All rights reserved. Crafted with ❤️ and ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
