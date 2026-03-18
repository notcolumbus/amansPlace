import { useLocation, Link, useNavigate } from 'react-router-dom';
import { TextMorph } from 'torph/react';
import { useState } from 'react';

export const pages = [
  { path: '/', title: "Aman's Place", label: "Place", bg: '#7eb2dd', headingClass: 'offwhite' },
  { path: '/photos', title: "Aman's Photos", label: "Photos", bg: '#fcecc9', headingClass: 'text-black' },
  { path: '/art', title: "Aman's Art", label: "Art", bg: '#e7c8dd', headingClass: 'text-[#112A46]' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = pages.find(p => p.path === location.pathname) || pages[0];
  const otherPages = pages.filter(p => p.path !== location.pathname);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pt-15 flex items-baseline flex-wrap gap-4">
      <TextMorph
        as="h1"
        className={`rammetto-one-regular ${currentPage.headingClass} text-3xl sm:text-4xl md:text-5xl inline`}
      >
        {currentPage.title}
      </TextMorph>

      {/* Desktop: inline links */}
      <span className="hidden sm:inline-flex gap-3 align-baseline">
        {otherPages.map(page => (
          <Link
            key={page.path}
            to={page.path}
            className={`rammetto-one-regular ${currentPage.headingClass} text-lg sm:text-xl md:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-200`}
          >
            {page.label}
          </Link>
        ))}
      </span>

      {/* Mobile: dropdown */}
      <div className="relative sm:hidden">
        <button
          onClick={() => setOpen(o => !o)}
          className={`rammetto-one-regular ${currentPage.headingClass} text-xl opacity-80`}
          aria-label="Navigate to other pages"
        >
          ☰
        </button>
        {open && (
          <div className="absolute left-0 top-full mt-2 flex flex-col gap-1 rounded-xl shadow-lg overflow-hidden z-50"
            style={{ background: currentPage.bg }}>
            {otherPages.map(page => (
              <button
                key={page.path}
                onClick={() => { setOpen(false); navigate(page.path); }}
                className={`rammetto-one-regular ${currentPage.headingClass} text-lg px-5 py-2 text-left opacity-80 hover:opacity-100 transition-opacity duration-200`}
              >
                {page.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
