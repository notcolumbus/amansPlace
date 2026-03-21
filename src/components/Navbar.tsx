import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { TextMorph } from 'torph/react';

export const pages = [
  { path: '/', title: "Aman's Place", label: "Place", bg: '#a3b065', headingClass: 'offwhite' },
  { path: '/photos', title: "Aman's Photos", label: "Photos", bg: '#fcecc9', headingClass: 'text-black' },
  { path: '/art', title: "Aman's Art", label: "Art", bg: '#e7c8dd', headingClass: 'text-[#112A46]' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = pages.find(p => p.path === location.pathname) || pages[0];
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [shimmer, setShimmer] = useState<'idle' | 'playing' | 'done'>('idle');

  const hc = `rammetto-one-regular ${currentPage.headingClass}`;

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const t = setTimeout(() => setShimmer('playing'), 500);
    const t2 = setTimeout(() => setShimmer('done'), 2000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const otherPages = pages.filter(p => p.path !== location.pathname);
  const linksToShow = hovering ? [currentPage, ...otherPages] : otherPages;

  return (
    <>
      {/* Desktop: vertical nav */}
      <div className="hidden lg:flex lg:flex-col lg:gap-6">
        <div>
          <h1 className={`${hc} text-4xl md:text-5xl`}>
            <TextMorph as="span" className={hc}>
              {hovering ? "Aman's ?" : "Aman's"}
            </TextMorph>
          </h1>
          {!hovering && (
            <h2 className={`${hc} text-6xl md:text-7xl`}>
              <TextMorph as="span" className={hc}>
                {currentPage.label}
              </TextMorph>
            </h2>
          )}
        </div>

        <nav
          className="flex flex-col gap-2"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {(() => {
            let charIndex = 0;
            return linksToShow.map(page => (
              <Link
                key={page.path}
                to={page.path}
                className={`${hc} relative transition-all duration-300 before:content-[''] before:absolute before:-inset-3 ${
                  hovering
                    ? `text-5xl md:text-7xl ${page.path === location.pathname ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`
                    : 'text-3xl md:text-4xl opacity-80 hover:opacity-100'
                }`}
              >
                {page.label.split('').map((char, i) => {
                  const delay = charIndex * 0.04;
                  charIndex++;
                  return (
                    <span
                      key={i}
                      className="inline-block"
                      style={shimmer === 'playing' ? {
                        animation: `nav-elastic 0.5s cubic-bezier(0.25, 1.5, 0.5, 1) ${delay}s both`,
                      } : undefined}
                    >
                      {char}
                    </span>
                  );
                })}
              </Link>
            ));
          })()}
        </nav>
      </div>

      {/* Mobile/Tablet: horizontal nav with dropdown */}
      <div className="lg:hidden pt-15 flex items-baseline flex-wrap gap-4">
        <h1 className={`${hc} text-3xl sm:text-4xl inline`}>
          <TextMorph as="span" className={hc}>
            {"Aman's "}
          </TextMorph>
          <span className="relative">
            <button
              onClick={() => setOpen(o => !o)}
              className={`${hc} text-3xl sm:text-4xl border-b-2 border-dotted border-current inline-flex items-center gap-1`}
            >
              <TextMorph as="span" className={hc}>{currentPage.label}</TextMorph>
              <span className={`text-lg inline-block transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {open && (
              <div className="fixed inset-0 z-50 backdrop-blur-xl bg-black/20 flex flex-col" onClick={() => setOpen(false)}>
                <div className="flex-1 flex items-center justify-center">
                  <span className={`${hc} text-5xl`}>Aman's ?</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-6">
                  {pages.map(page => (
                    <button
                      key={page.path}
                      onClick={() => { setOpen(false); navigate(page.path); }}
                      className={`${hc} text-4xl transition-opacity duration-200 ${page.path === location.pathname ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Navbar;
