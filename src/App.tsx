import { Routes, Route } from 'react-router-dom';
import Header from "./components/homeSections/Header";
import CardContainer from './components/homeSections/CardContainer';
import Experience from './components/homeSections/Experience';
import { LinkPreview } from './components/ui/link-preview';
import Research from './components/homeSections/Research';
import Dubs from './components/homeSections/Dubs';
import Footer from './components/homeSections/Footer';

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
          <h3 className="text-white text-xl mt-6 atkinson-hyperlegible-next-regular ">
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


function CameraPage() {
  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6">
      <div className="md:grid md:grid-cols-5">
        <div className="col-span-1" />
        <main className="col-span-3">
          <h1 className="rammetto-one-regular text-5xl text-white pt-15">Camera</h1>
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
      <Route path="/camera" element={<CameraPage />} />
    </Routes>
  )
}

export default App
