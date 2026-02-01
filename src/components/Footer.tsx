import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';

const Footer: React.FC = () => {
  const { footer } = content;
  return (
    <footer id="contact" className="w-full bg-saisei-beige text-saisei-dark pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 px-6 md:px-12 lg:px-16">

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-20 lg:mb-24 border-b border-saisei-dark/10 pb-16 md:pb-20 lg:pb-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%", amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold font-serif mb-6 md:mb-8 leading-[0.9] tracking-tighter" dangerouslySetInnerHTML={{ __html: footer.heading.replace(/\n/g, '<br />') }} />
          <p className="text-base md:text-lg lg:text-xl opacity-70 max-w-2xl mx-auto px-4">
            {footer.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase opacity-40 mb-3 md:mb-4">{footer.contact.phone.label}</h4>
            <a href={footer.contact.phone.link} className="text-lg md:text-xl lg:text-2xl font-serif hover:text-saisei-brown transition-colors">
              {footer.contact.phone.value}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase opacity-40 mb-3 md:mb-4">{footer.contact.email.label}</h4>
            <a href={footer.contact.email.link} className="text-lg md:text-xl lg:text-2xl font-serif hover:text-saisei-brown transition-colors break-all">
              {footer.contact.email.value}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%", amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase opacity-40 mb-3 md:mb-4">{footer.contact.address.label}</h4>
            <address className="text-lg md:text-xl lg:text-2xl font-serif not-italic" dangerouslySetInnerHTML={{ __html: footer.contact.address.value.replace(/\n/g, '<br />') }} />
          </motion.div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
        <div>
          &copy; {new Date().getFullYear()} {footer.copyright}
        </div>
        <div className="flex gap-4 md:gap-6">
          {footer.links.map((link, index) => (
            <a key={index} href={link.url} className="hover:opacity-100 transition-opacity">{link.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
