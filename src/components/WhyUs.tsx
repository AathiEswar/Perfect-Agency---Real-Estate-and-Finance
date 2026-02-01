import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MdVerified, MdSupportAgent, MdTimer, MdVisibility } from 'react-icons/md';
import content from '../data/content.json';

const WhyUs: React.FC = () => {
  const { whyUs } = content;
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(imageProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(imageProgress, [0, 1], [1, 1.15]);

  const icons = [
    <MdVerified className="text-2xl" />,
    <MdVisibility className="text-2xl" />,
    <MdSupportAgent className="text-2xl" />,
    <MdTimer className="text-2xl" />
  ];

  return (
    <section ref={sectionRef} id="why-us" className="w-full py-20 md:py-32 lg:py-40 bg-saisei-dark text-saisei-beige overflow-hidden">
      <motion.div
        className="px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center"
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

        {/* Left: Image with Parallax */}
        <motion.div
          ref={imageRef}
          className="relative h-[50vh] md:h-[60vh] overflow-hidden"
          style={{ y: imageY }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any }
            }
          }}
        >
          <motion.img
            src={whyUs.image}
            alt="Modern Architecture Detail"
            className="w-full h-full object-cover grayscale opacity-60"
            style={{ scale: imageScale }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-saisei-dark via-transparent to-transparent"></div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 }
              }
            }}
            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xs"
          >
            <p className="text-2xl sm:text-3xl font-serif leading-tight mb-4">
              {whyUs.quote.text}
            </p>
            <p className="text-sm opacity-60 tracking-widest uppercase">{whyUs.quote.author}</p>
          </motion.div>
        </motion.div>

        {/* Right: Benefits List */}
        <div>
          <div className="mb-10 md:mb-12">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 0.5,
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              className="text-xs tracking-[0.4em] uppercase block mb-4 md:mb-6"
            >
              {whyUs.label}
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
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-serif leading-[0.95] tracking-tighter">
                  {whyUs.heading.map((line, index) => (
                    <span key={index} className="block">{line}</span>
                  ))}
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {whyUs.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as any }
                  }
                }}
                className="flex gap-4 md:gap-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 flex-shrink-0 border border-white/10 flex items-center justify-center text-saisei-brown group-hover:border-saisei-brown group-hover:text-white transition-colors duration-300"
                >
                  {icons[index]}
                </motion.div>
                <div>
                  <h4 className="text-xl font-serif mb-2">{benefit.title}</h4>
                  <p className="text-sm opacity-60 leading-relaxed max-w-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default WhyUs;
