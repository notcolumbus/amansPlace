import { Routes, Route } from 'react-router-dom';
import Header from "./components/sections/Header";
import CardContainer from './components/sections/CardContainer';
import Experience from './components/sections/Experience';
import { LinkPreview } from './components/ui/link-preview';
import Research from './components/sections/Research';
import Dubs from './components/sections/Dubs';
import Rive from '@rive-app/react-canvas';
import catRiv from './assets/cat.riv?url';

function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4">
        <div className="col-span-1" />
        <main className="col-span-2">
          <Header />
          <h2 className="rammetto-one-regular text-5xl text-white pt-12 pb-6">Teams</h2>
          <Experience />
          <h2 className="rammetto-one-regular text-5xl text-white pt-12 pb-1">Work</h2>
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
          <h2 className="rammetto-one-regular text-5xl text-white pt-12 pb-6">Research</h2>
          <Research />
          <h2 className="rammetto-one-regular text-5xl text-white pt-12 pb-6">Awards</h2>
          <Dubs></Dubs>
          <div className='pb-30 w-full h-[400px]'>
            <Rive
              src={catRiv}
              style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              stateMachines="State Machine 1"
              
            />
            hi
          </div>
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
