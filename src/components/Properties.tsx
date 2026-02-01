import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import content from '../data/content.json';

const Properties: React.FC = () => {
  const { properties } = content;
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={sectionRef} id="properties" className="w-full py-16 md:py-20 lg:py-24 bg-saisei-beige text-saisei-dark overflow-hidden">
      <motion.div
        className="px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
          }
        }}
      >

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 0.8,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              className="text-xs tracking-[0.4em] uppercase block mb-4 md:mb-6"
            >
              {properties.label}
            </motion.span>

            <div className="overflow-visible">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }
                  }
                }}
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-serif leading-[0.9] tracking-tighter">
                  {properties.heading.map((line, index) => (
                    <span key={index} className="block">{line}</span>
                  ))}
                </h2>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-saisei-dark/40 text-[10px] tracking-[0.3em] uppercase hover:bg-saisei-dark hover:text-saisei-beige transition-all duration-500"
            >
              {properties.cta}
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {properties.items.map((property) => (
            <motion.div
              key={property.id}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
                }
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <motion.div
                  style={{ scale }}
                  className="w-full h-full"
                >
                  <motion.img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }}
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs tracking-widest uppercase">
                  {property.type}
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl sm:text-2xl font-serif group-hover:text-saisei-brown transition-colors duration-300">{property.title}</h3>
                <span className="text-lg font-light opacity-100">{property.price}</span>
              </div>

              <p className="text-sm opacity-80 mb-6">{property.location}</p>

              <motion.button
                whileHover={{ x: 5 }}
                className="w-full py-4 border-t border-saisei-dark/20 text-xs tracking-[0.2em] uppercase hover:text-saisei-brown transition-colors text-left flex justify-between items-center group/btn"
              >
                <span>Enquire Now</span>
                <span className="transform group-hover/btn:translate-x-2 transition-transform">→</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Properties;
