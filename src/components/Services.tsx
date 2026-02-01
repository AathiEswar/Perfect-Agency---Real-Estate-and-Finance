import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MdRealEstateAgent, MdSell, MdKey, MdDescription, MdAttachMoney } from 'react-icons/md';
import content from '../data/content.json';

const Services: React.FC = () => {
  const { services } = content;
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const icons = [
    <MdRealEstateAgent className="text-3xl" />,
    <MdSell className="text-3xl" />,
    <MdKey className="text-3xl" />,
    <MdDescription className="text-3xl" />,
    <MdAttachMoney className="text-3xl" />
  ];

  return (
    <section ref={sectionRef} id="services" className="w-full py-16 md:py-20 lg:py-24 bg-saisei-dark text-saisei-beige overflow-hidden">
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

        {/* Section Header with Mask Reveal */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 0.5,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
            className="text-xs tracking-[0.4em] uppercase block mb-6 md:mb-8"
          >
            {services.label}
          </motion.div>

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
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black font-serif leading-[0.85] tracking-tighter">
                {services.heading.map((line, index) => (
                  <span key={index} className="block">{line}</span>
                ))}
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Services Grid with Staggered Entrance */}
        <motion.div
          style={{ y }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center"
        >
          {services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
                }
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group p-6 md:p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-500"
            >
              <motion.div
                className="mb-6 flex justify-center text-saisei-brown"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {icons[index]}
              </motion.div>
              <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4 group-hover:text-saisei-brown transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-60">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
