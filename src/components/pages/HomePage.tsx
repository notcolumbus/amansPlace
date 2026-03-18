import Header from "../homeSections/Header";
import CardContainer from '../homeSections/CardContainer';
import Experience from '../homeSections/Experience';
import { LinkPreview } from '../ui/link-preview';
import Research from '../homeSections/Research';
import Dubs from '../homeSections/Dubs';
import Footer from '../homeSections/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-6">Teams</h2>
      <Experience />
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-1">Work</h2>
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
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-6">Research</h2>
      <Research />
      <h2 className="rammetto-one-regular offwhite text-4xl pt-12 pb-6">Awards</h2>
      <Dubs></Dubs>
      <Footer />
    </>
  )
}

export default HomePage
