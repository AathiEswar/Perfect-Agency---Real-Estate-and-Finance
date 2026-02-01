import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import content from '../data/content.json';

const Projects: React.FC = () => {
  const { projects } = content;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-saisei-dark text-saisei-beige">
      <motion.div
        className="w-full"
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
        <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16 flex justify-between items-end">
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
            <div className="text-xs tracking-[0.2em] mb-2 uppercase opacity-50">{projects.label}</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif">{projects.heading}</h2>
          </motion.div>
          <div className="hidden md:block text-right">
            <p className="text-sm opacity-40">{projects.counter}</p>
          </div>
        </div>

        {/* Hero Project */}
        <motion.div
          ref={containerRef}
          className="w-full h-[60vh] md:h-[70vh] lg:h-[85vh] relative overflow-hidden group cursor-pointer mb-0"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 0.8 }
            }
          }}
        >
          <motion.div
            style={{ y, scale }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={projects.hero.image}
              alt="Kinsei Pavilion"
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
              loading="lazy"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-16 w-full flex flex-col md:flex-row justify-between items-end z-10 gap-6 md:gap-8">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif leading-none uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: projects.hero.title.replace(/\n/g, '<br />') }} />
            </div>

            <div className="flex items-end">
              <button className="px-6 md:px-8 py-2.5 md:py-3 border border-saisei-beige rounded-full text-xs tracking-[0.2em] uppercase hover:bg-saisei-beige hover:text-saisei-dark transition-all duration-300">
                {projects.hero.cta}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {projects.grid.map((project, index) => (
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
              className={`relative aspect-square overflow-hidden group ${index === 0 ? 'border-r border-b border-white/10' : 'border-b border-white/10'}`}
            >
              <img
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={project.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 md:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                <button className="text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-70 hover:opacity-100 transition-opacity duration-500">
                  {project.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
