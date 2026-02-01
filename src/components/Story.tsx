import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import content from '../data/content.json';

const Story: React.FC = () => {
  const { story } = content;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={sectionRef} className="relative w-full py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 bg-saisei-beige overflow-hidden">
      <motion.div
        className="w-full max-w-[1600px] mx-auto"
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

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight" dangerouslySetInnerHTML={{ __html: story.heading.replace(/\n/g, '<br />') }} />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
            className="max-w-lg"
          >
            <p className="text-sm md:text-base leading-relaxed opacity-100">
              {story.description}
            </p>
            <button className="mt-6 text-xs tracking-[0.2em] uppercase opacity-80 hover:opacity-100 transition-opacity underline underline-offset-4">
              {story.cta}
            </button>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {story.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
                }
              }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <motion.div
                style={{ scale: imageScale }}
                className="w-full h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-serif text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.title}
                </h3>
                <button className="mt-3 text-xs tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-70 hover:opacity-100 transition-opacity duration-500">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Story;
