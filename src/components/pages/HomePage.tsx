import Header from "../homeSections/Header";
import CardContainer from '../homeSections/CardContainer';
import Experience from '../homeSections/Experience';
import { LinkPreview } from '../ui/link-preview';
import Research from '../homeSections/Research';
import Dubs from '../homeSections/Dubs';
import Rive from '@rive-app/react-canvas';
import SlotCounter from 'react-slot-counter';
import catRiv from '../../assets/cat.riv?url';

function HomePage({ views }: { views: number | null }) {
  return (
    <>
      <div className="lg:hidden flex flex-col items-center -mt-4 mb-4">
        <div className="w-72 h-72">
          <Rive
            src={catRiv}
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
            stateMachines="State Machine 1"
          />
        </div>
        {views !== null && (
          <div className="flex items-baseline gap-2 text-3xl rammetto-one-regular offwhite font-bold -mt-6">
            <SlotCounter value={views} />
            <span className="opacity-70">views</span>
          </div>
        )}
      </div>
      <Header />
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-6">Teams</h2>
      <Experience />
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-1">Work</h2>
      <h4 className="text-base text-[#fcecc9]/80 pb-6 familjen-grotesk-regular">Click to expand :p</h4>
      <CardContainer />
      <h3 className="text-[#fcecc9] text-xl mt-6 atkinson-hyperlegible-next-regular ">
        and more on my{" "}
        <LinkPreview
          url="https://github.com/notcolumbus"
          className="font-bold text-[#fcecc9] hover:text-neutral-300"
        >
          github
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://devpost.com/aman-anwar18oct"
          className="font-bold text-[#fcecc9] hover:text-neutral-300"
        >
          devpost
        </LinkPreview>!
      </h3>
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-6">Research</h2>
      <Research />
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-6">Awards</h2>
      <Dubs />
    </>
  )
}

export default HomePage
