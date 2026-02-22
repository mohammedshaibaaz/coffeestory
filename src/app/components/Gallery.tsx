import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/images/coffee-beans.jpg',
    alt: 'Freshly roasted coffee beans',
  },
  {
    id: 2,
    src: '/images/fresh-croissant.jpg',
    alt: 'Fresh croissant',
  },
  {
    id: 3,
    src: '/images/cozy-cafe-ambiance.jpg',
    alt: 'Cozy cafe ambiance',
  },
  {
    id: 4,
    src: '/images/breakfast-setup.jpg',
    alt: 'Breakfast table setup',
  },
  {
    id: 5,
    src: '/images/holding-latte.jpg',
    alt: 'Holding a latte',
  },
  {
    id: 6,
    src: '/images/outdoor-seating.jpg',
    alt: 'Outdoor cafe seating',
  },
  {
    id: 7,
    src: '/images/coffee-brewing.jpg',
    alt: 'Fresh coffee brewing',
  },
  {
    id: 8,
    src: '/images/dessert.jpg',
    alt: 'Delicious dessert',
  },
  {
    id: 9,
    src: '/images/coffee-moments.jpg',
    alt: 'Coffee moments',
  },
  {
    id: 10,
    src: '/images/coffee-art.jpg',
    alt: 'Coffee art',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 w-full overflow-clip" style={{ backgroundColor: 'var(--cream-latte)' }}>
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4">
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
            Gallery
          </h2>
          <p 
            className="text-lg sm:text-xl md:text-2xl"
            style={{ color: 'var(--espresso-brown)' }}
          >
            Moments captured, memories shared
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="14px">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              className="cursor-pointer relative overflow-hidden rounded-xl shadow-lg group"
              onClick={() => setSelectedImage(index)}
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(198, 134, 66, 0.3) 100%)',
                }}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>
          ))}
        </Masonry>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(20px)' }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full transition-all"
              style={{ backgroundColor: 'var(--dark-roast)' }}
            >
              <X size={28} color="var(--cream-latte)" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 z-10 p-3 rounded-full transition-all"
              style={{ backgroundColor: 'var(--dark-roast)' }}
            >
              <ChevronLeft size={28} color="var(--cream-latte)" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-10 p-3 rounded-full transition-all"
              style={{ backgroundColor: 'var(--dark-roast)' }}
            >
              <ChevronRight size={28} color="var(--cream-latte)" />
            </button>

            <motion.img
              key={selectedImage}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}