import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import content from '../data/content.json';

const Philosophy: React.FC = () => {
  const { philosophy } = content;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={sectionRef} id="philosophy" className="w-full py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-saisei-beige text-saisei-dark overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%", amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <span className="text-xs tracking-[0.2em] uppercase opacity-50 block mb-4">{philosophy.label}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-8" dangerouslySetInnerHTML={{ __html: philosophy.heading.replace(/\n/g, '<br />') }} />
            </div>

            <p className="text-base md:text-lg leading-relaxed opacity-80">
              {philosophy.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {philosophy.features.map((feature, index) => (
                <div key={index}>
                  <h4 className="text-xl font-serif mb-3">{feature.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="w-full h-full"
            >
              <img
                src={philosophy.mainImage}
                alt="Sustainable Architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Overlay text */}
            <div className="absolute bottom-0 right-0 bg-saisei-beige text-saisei-dark p-6 md:p-10 max-w-sm">
              <p className="text-sm md:text-base leading-relaxed">
                {philosophy.overlayText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
