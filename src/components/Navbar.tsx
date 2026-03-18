import { useLocation, Link } from 'react-router-dom';
import { TextMorph } from 'torph/react';

const pages = [
  { path: '/', title: "Aman's Place", label: "Place" },
  { path: '/photos', title: "Aman's Photos", label: "Photos" },
];

function Navbar() {
  const location = useLocation();
  const currentTitle = pages.find(p => p.path === location.pathname)?.title || "Aman's Place";
  const otherPages = pages.filter(p => p.path !== location.pathname);

  return (
    <div className="relative pt-15 flex items-baseline flex-wrap gap-4">
      <TextMorph
        as="h1"
        className="rammetto-one-regular offwhite text-3xl sm:text-4xl md:text-5xl inline"
      >
        {currentTitle}
      </TextMorph>
      <span className="inline-flex gap-3 align-baseline">
        {otherPages.map(page => (
          <Link
            key={page.path}
            to={page.path}
            className="rammetto-one-regular offwhite text-lg sm:text-xl md:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            {page.label}
          </Link>
        ))}
      </span>
    </div>
  );
}

export default Navbar;
