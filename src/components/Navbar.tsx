import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { TextMorph } from 'torph/react';

const pages = [
  { path: '/', title: "Aman's Place", label: "Place" },
  { path: '/photos', title: "Aman's Photos", label: "Photos" },
];

function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const currentTitle = pages.find(p => p.path === location.pathname)?.title || "Aman's Place";
  const otherPages = pages.filter(p => p.path !== location.pathname);

  return (
    <div
      className="relative pt-10 flex items-baseline flex-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TextMorph
        as="h1"
        className="rammetto-one-regular offwhite text-3xl sm:text-4xl md:text-5xl cursor-pointer inline"
      >
        {currentTitle}
      </TextMorph>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -8, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -8, filter: 'blur(8px)' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="inline-flex gap-3 ml-4 align-baseline"
          >
            {otherPages.map(page => (
              <Link
                key={page.path}
                to={page.path}
                className="rammetto-one-regular offwhite text-lg sm:text-xl md:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                {page.label}
              </Link>
            ))}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
