import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MdAdd, MdRemove } from 'react-icons/md';
import content from '../data/content.json';

const About: React.FC = () => {
  const { about } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={sectionRef} id="about" className="relative w-full min-h-screen py-20 md:py-32 lg:py-40 bg-saisei-beige text-saisei-dark px-6 md:px-12 lg:px-16 overflow-hidden">

      <div className="max-w-[1800px] mx-auto w-full">
        {/* Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-tight opacity-80 tracking-tight">
            {about.heading.join(' ')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Accordion */}
          <div className="w-full">
            {about.accordion.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-b border-saisei-dark/20"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 md:py-8 flex justify-between items-start text-left group"
                >
                  <span className={`text-xl md:text-2xl lg:text-3xl font-serif transition-opacity duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
                    {item.title}
                  </span>
                  <span className="ml-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    {openIndex === index ? <MdRemove className="text-2xl" /> : <MdAdd className="text-2xl" />}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-sm md:text-base leading-relaxed opacity-90 max-w-xl font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Horizontal line at bottom of list if needed or relying on border-b */}
            <div className="border-b border-saisei-dark/20 w-full mt-[-1px]"></div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            className="relative w-full h-[50vh] lg:h-[80vh] overflow-hidden"
            style={{ y: imageY, scale: imageScale }}
          >
            <motion.img
              src={about.mainImage}
              alt="Real Estate Property"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
