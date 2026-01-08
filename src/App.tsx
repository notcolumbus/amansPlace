import { Routes, Route } from 'react-router-dom';
import Header from "./components/sections/Header";
import CardContainer from './components/sections/CardContainer';
import Experience from './components/sections/Experience';
import { LinkPreview } from './components/ui/link-preview';
import Research from './components/sections/Research';
import Dubs from './components/sections/Dubs';
import Footer from './components/sections/Footer';

function HomePage() {
  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="md:grid md:grid-cols-5 ">
        <div className="col-span-1" />
        <main className="col-span-3">
          <Header />
          <h2 className="rammetto-one-regular text-4xl text-white pt-12 pb-6">Teams</h2>
          <Experience />
          <h2 className="rammetto-one-regular text-4xl text-white pt-12 pb-1">Work</h2>
          <h4 className="text-base text-white/80 pb-6 familjen-grotesk-regular">Click to expand :p</h4>
          <CardContainer />
          <h3 className="text-white text-xl mt-6 familjen-grotesk-regular">
            and more on my{" "}
            <LinkPreview
              url="https://github.com"
              className="font-bold text-white hover:text-neutral-300"
            >
              github
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview
              url="https://devpost.com"
              className="font-bold text-white hover:text-neutral-300"
            >
              devpost
            </LinkPreview>!
          </h3>
          <h2 className="rammetto-one-regular text-4xl text-white pt-12 pb-6">Research</h2>
          <Research />
          <h2 className="rammetto-one-regular text-4xl text-white pt-12 pb-6">Awards</h2>
          <Dubs></Dubs>
          <Footer />
        </main>
        <div className="col-span-1" />
      </div>
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
