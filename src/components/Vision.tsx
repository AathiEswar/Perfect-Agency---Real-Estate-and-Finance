import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import content from '../data/content.json';

const Vision: React.FC = () => {
  const { vision } = content;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as any }
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex items-center px-6 md:px-12 lg:px-16 py-20 md:py-32 overflow-hidden bg-saisei-dark text-saisei-beige">

      <motion.div
        className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >

        {/* Left Column - Text Content */}
        <div className="z-10 space-y-6 md:space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="block text-xs md:text-sm tracking-[0.3em] uppercase opacity-60 font-light">
              {vision.label}
            </span>
          </motion.div>

          <div className="overflow-visible">
            <motion.h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8rem] font-serif leading-[0.9] tracking-tight"
              variants={itemVariants}
            >
              {vision.heading.map((line, index) => (
                <span key={index} className="block" style={index === 1 ? { fontStyle: 'italic', color: '#8B7355' } : {}}>{line}</span>
              ))}
            </motion.h2>
          </div>

          <motion.div variants={itemVariants} className="space-y-6 max-w-md">
            <p className="text-sm md:text-base leading-relaxed opacity-70">
              {vision.description}
            </p>

            <button className="px-8 py-3 bg-saisei-brown text-white rounded-full text-xs hover:bg-saisei-dark transition-all duration-500 tracking-[0.2em] uppercase font-light">
              {vision.cta}
            </button>
          </motion.div>
        </div>

        {/* Right Column - Hero Image */}
        <motion.div
          variants={imageVariants}
          className="relative w-full h-[50vh] md:h-[60vh] lg:h-[75vh] overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="w-full h-full"
            >
              <img
                src={vision.mainImage}
                alt="Modern Real Estate Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Small decorative image overlay */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white shadow-2xl overflow-hidden"
          >
            <motion.div
              style={{ scale: imageScale }}
              className="w-full h-full"
            >
              <img
                src={vision.detailImage}
                alt="Architectural Detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Vision;
