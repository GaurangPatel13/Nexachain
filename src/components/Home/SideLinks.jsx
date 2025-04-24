import React from 'react';
import { motion } from 'framer-motion';
import whatsapp from '/assets/Home/homehero/whatsappimg.png';
import email from '/assets/Home/homehero/emailimg.png';
import skype from '/assets/Home/homehero/skypeimg.png';
import linkedin from '/assets/Home/homehero/linkedinimg.png';
import archive from '/assets/Home/homehero/archiveimg.png';

const links = [
  {
    label: 'WhatsApp Now',
    bgColor: 'bg-[#25D366]',
    icon: whatsapp,
    url: 'https://wa.me/1234567890',
  },
  {
    label: 'Connect on LinkedIn',
    bgColor: 'bg-[#0077B5]',
    icon: linkedin,
    url: 'https://linkedin.com',
  },
  {
    label: 'Connect on Skype',
    bgColor: 'bg-[#00AFF0]',
    icon: skype,
    url: 'https://skype.com',
  },
  {
    label: 'Connect on Mail',
    bgColor: 'bg-[#EA4335]',
    icon: email,
    url: 'mailto:example@mail.com',
  },
];

const Sidelinks = () => {
  return (
    <div className="absolute lg:top-192 top-164 left-0 font-jakarta -translate-y-1/2 flex flex-col z-50 rounded-r-[4rem] overflow-hidden">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[5rem] lg:h-[16.5rem] h-[13rem] flex flex-col relative justify-end items-center p-2 text-white ${link.bgColor} group`}
        >
          {/* Content Wrapper */}
          <motion.div
            className="flex flex-col items-center justify-end absolute inset-0"
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              transition: { type: 'spring', stiffness: 800 },
            }}
          >
            <span className="absolute lg:top-24 top-16 font-medium text-center tracking-tight rotate-270 text-sm w-[9rem]">
              {link.label}
            </span>
            <img
              src={link.icon}
              alt={link.label}
              className="lg:w-24 lg:h-24 w-16 h-16 object-contain"
              loading="lazy"
            />
          </motion.div>
        </a>
      ))}
      <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[5rem] h-[30rem] flex flex-col relative justify-end items-center p-2 text-black bg-[#F0F2F4] group`}
        >
          {/* Content Wrapper */}
          <motion.div
            className="flex flex-col items-center justify-end absolute inset-0"
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              transition: { type: 'spring', stiffness: 800 },
            }}
          >
            <span className="absolute top-55 font-medium text-center tracking-tighter  rotate-270 text-lg w-[19rem]">
            Book or Take Free Trials of Demos
            </span>
            <img
              src={archive}
              alt=""
            className="w-28 h-28 object-contain"
            loading="lazy"
            />
          </motion.div>
        </a>
    </div>
  );
};

export default Sidelinks;
