import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import content from '../data/content.json';

const Hero: React.FC = () => {
  const { hero } = content;
  const sectionRef = useRef(null);

  // Scroll-based parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Transform values for parallax zoom and movement
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  // Advanced character-by-character blur reveal
  const charReveal = {
    hidden: { y: 100, opacity: 0, filter: "blur(10px)", scale: 1.2 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5 + (i * 0.05),
        ease: [0.25, 1, 0.5, 1] as any
      }
    })
  };

  // Calculate total characters before current word to keep index continuous
  const getGlobalIndex = (wordIndex: number) => {
    let count = 0;
    for (let i = 0; i < wordIndex; i++) {
      count += hero.headline[i].length;
    }
    return count;
  };

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 overflow-hidden bg-saisei-dark text-saisei-beige">

      {/* Background Image with Scroll-based Parallax Zoom */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale, y }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"
          style={{ opacity }}
        ></motion.div>
        <motion.img
          src={hero.backgroundImage}
          alt="City skyline"
          className="w-full h-full object-cover object-center"
          loading="eager"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto flex flex-col items-center text-center">

        {/* Trust Line with Stagger */}
        <div className="flex items-center gap-4 text-xs md:text-sm tracking-[0.3em] uppercase mb-12 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {hero.trustLine[0]}
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-1 h-1 bg-saisei-beige rounded-full"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {hero.trustLine[1]}
          </motion.span>
        </div>

        {/* Headline with Advanced Character Blur Reveal */}
        <div className="mb-16">
          <div className="overflow-visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[8.5rem] font-serif leading-[0.9] tracking-tighter flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
              {hero.headline.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-flex overflow-hidden">
                  {word.split("").map((char, charIndex) => {
                    const globalIndex = getGlobalIndex(wordIndex) + charIndex;
                    return (
                      <motion.span
                        key={charIndex}
                        custom={globalIndex}
                        initial="hidden"
                        animate="visible"
                        variants={charReveal}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle with delayed reveal */}
          <div className="overflow-visible mt-4">
            <motion.p
              initial={{ y: "40%", opacity: 0 }}
              animate={{ y: 0, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] as any }}
              className="text-sm md:text-base tracking-[0.2em] uppercase"
            >
              {hero.subtitle}
            </motion.p>
          </div>
        </div>

        {/* CTA with Fade */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.76, 0, 0.24, 1] as any }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border border-saisei-beige/30 text-xs md:text-sm tracking-[0.25em] uppercase hover:bg-saisei-beige hover:text-saisei-dark transition-all duration-500"
        >
          {hero.cta}
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] opacity-40 z-20 tracking-[0.3em] uppercase"
      >
        <span>{hero.scrollText}</span>
        <motion.div
          animate={{ height: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-saisei-beige/50"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
