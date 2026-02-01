import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import content from '../data/content.json';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navbar } = content;

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-saisei-beige">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm font-light tracking-[0.3em] uppercase"
      >
        {navbar.brandName}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden md:block text-xs font-light tracking-[0.2em]"
      >
        {navbar.established}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl hover:opacity-70 transition-opacity duration-300"
        aria-label="Menu"
      >
        <HiMenuAlt4 />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 w-full md:w-[500px] h-full bg-saisei-dark text-saisei-beige z-50 overflow-y-auto"
          >
            <div className="p-8 md:p-12 flex flex-col min-h-full">
              <div className="flex justify-end mb-16">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center space-y-4 mb-16">
                {navbar.menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    href={`#${item.label.toLowerCase()}`}
                    className="group flex items-baseline gap-4 text-4xl md:text-5xl lg:text-6xl font-serif hover:text-saisei-brown transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">{item.number}</span>
                    <span>{item.label}</span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-8 border-t border-white/10 pt-8"
              >
                <div>
                  <p className="text-xs tracking-widest opacity-80 mb-3">{navbar.contact.title}</p>
                  <a href={`mailto:${navbar.contact.email}`} className="text-sm hover:text-saisei-brown transition-colors">
                    {navbar.contact.email}
                  </a>
                  <p className="text-sm mt-1">{navbar.contact.phone}</p>
                </div>

                <div>
                  <p className="text-xs tracking-widest opacity-80 mb-3">{navbar.socials.title}</p>
                  <div className="flex gap-4 text-sm">
                    {navbar.socials.links.map((link, index) => (
                      <a key={index} href={link.url} className="hover:text-saisei-brown transition-colors">{link.name}</a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-widest opacity-80 mb-3">{navbar.office.title}</p>
                  <p className="text-sm opacity-90" dangerouslySetInnerHTML={{ __html: navbar.office.address.replace(/\n/g, '<br />') }} />
                  <p className="text-xs opacity-70 mt-2">{navbar.office.hours}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
