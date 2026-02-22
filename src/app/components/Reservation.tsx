import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Mail, User, CheckCircle } from 'lucide-react';

export function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '2',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="reservation"
      ref={sectionRef} 
      className="py-24 px-4 sm:px-6 lg:px-8 relative w-full overflow-clip"
      style={{ backgroundColor: 'var(--cream-latte)' }}
    >
      <div className="max-w-4xl mx-auto w-full px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ color: 'var(--dark-roast)' }}
          >
            Reserve Your Table
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl"
            style={{ color: 'var(--espresso-brown)' }}
          >
            Secure your spot in our cozy café
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: 'var(--dark-roast)' }}
        >
          <div 
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ 
              background: 'radial-gradient(circle, var(--caramel-accent) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="relative">
                <label 
                  className="block mb-2 text-sm font-medium transition-all"
                  style={{ 
                    color: focusedField === 'name' ? 'var(--caramel-accent)' : 'var(--cream-latte)',
                  }}
                >
                  <User size={18} className="inline mr-2" />
                  Full Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl transition-all outline-none"
                  style={{
                    backgroundColor: 'var(--espresso-brown)',
                    color: 'var(--cream-latte)',
                    border: focusedField === 'name' ? '2px solid var(--caramel-accent)' : '2px solid transparent',
                    boxShadow: focusedField === 'name' ? '0 0 20px rgba(198, 134, 66, 0.3)' : 'none',
                  }}
                />
              </div>

              <div className="relative">
                <label 
                  className="block mb-2 text-sm font-medium transition-all"
                  style={{ 
                    color: focusedField === 'email' ? 'var(--caramel-accent)' : 'var(--cream-latte)',
                  }}
                >
                  <Mail size={18} className="inline mr-2" />
                  Email Address
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl transition-all outline-none"
                  style={{
                    backgroundColor: 'var(--espresso-brown)',
                    color: 'var(--cream-latte)',
                    border: focusedField === 'email' ? '2px solid var(--caramel-accent)' : '2px solid transparent',
                    boxShadow: focusedField === 'email' ? '0 0 20px rgba(198, 134, 66, 0.3)' : 'none',
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="relative">
                <label 
                  className="block mb-2 text-sm font-medium transition-all"
                  style={{ 
                    color: focusedField === 'date' ? 'var(--caramel-accent)' : 'var(--cream-latte)',
                  }}
                >
                  <Calendar size={18} className="inline mr-2" />
                  Date
                </label>
                <motion.input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('date')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl transition-all outline-none"
                  style={{
                    backgroundColor: 'var(--espresso-brown)',
                    color: 'var(--cream-latte)',
                    border: focusedField === 'date' ? '2px solid var(--caramel-accent)' : '2px solid transparent',
                    boxShadow: focusedField === 'date' ? '0 0 20px rgba(198, 134, 66, 0.3)' : 'none',
                  }}
                />
              </div>

              <div className="relative">
                <label 
                  className="block mb-2 text-sm font-medium transition-all"
                  style={{ 
                    color: focusedField === 'time' ? 'var(--caramel-accent)' : 'var(--cream-latte)',
                  }}
                >
                  <Clock size={18} className="inline mr-2" />
                  Time
                </label>
                <motion.input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('time')}
                  onBlur={() => setFocusedField(null)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl transition-all outline-none"
                  style={{
                    backgroundColor: 'var(--espresso-brown)',
                    color: 'var(--cream-latte)',
                    border: focusedField === 'time' ? '2px solid var(--caramel-accent)' : '2px solid transparent',
                    boxShadow: focusedField === 'time' ? '0 0 20px rgba(198, 134, 66, 0.3)' : 'none',
                  }}
                />
              </div>

              <div className="relative">
                <label 
                  className="block mb-2 text-sm font-medium transition-all"
                  style={{ 
                    color: focusedField === 'guests' ? 'var(--caramel-accent)' : 'var(--cream-latte)',
                  }}
                >
                  <Users size={18} className="inline mr-2" />
                  Guests
                </label>
                <motion.select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('guests')}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl transition-all outline-none"
                  style={{
                    backgroundColor: 'var(--espresso-brown)',
                    color: 'var(--cream-latte)',
                    border: focusedField === 'guests' ? '2px solid var(--caramel-accent)' : '2px solid transparent',
                    boxShadow: focusedField === 'guests' ? '0 0 20px rgba(198, 134, 66, 0.3)' : 'none',
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </motion.select>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl text-lg font-bold transition-all"
              style={{
                backgroundColor: 'var(--caramel-accent)',
                color: 'var(--dark-roast)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reserve Table
            </motion.button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: 'var(--dark-roast)' }}
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle size={80} color="var(--caramel-accent)" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold mt-6 mb-2"
                    style={{ color: 'var(--cream-latte)' }}
                  >
                    Reservation Confirmed!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg"
                    style={{ color: 'var(--caramel-accent)' }}
                  >
                    We'll see you soon!
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
