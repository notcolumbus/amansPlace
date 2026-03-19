import type { ReactNode } from "react";

function Research() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-2 atkinson-hyperlegible-next-regular">
      <ResearchCard
        title="NASA RAM"
        heading="Advancing Regional Air Mobility in Appalachia"
        description="A regional-scale modeling framework to evaluate how hybrid-electric STOL aircraft can close rural mobility gaps through Regional Air Mobility."
      >
        <img
          src="https://sacd.larc.nasa.gov/wp-content/uploads/sites/167/2021/04/RAM-hero-1024x421.png"
          alt="NASA RAM"
          className="absolute inset-0 opacity-50 w-full h-full object-cover"
          loading="lazy"
        />
      </ResearchCard>

      <ResearchCard
        title="Loopy Audio"
        heading="Automation Of Generation Of Spatial Audio"
        description="A new framework that automates music spatialization using contextual and structural cues embedded within a song's envelopes."
      >
        <video
          src="https://ik.imagekit.io/sjuopypj1/out.webm"
          loop
          muted
          playsInline
          className="absolute inset-0 opacity-50 w-full h-full object-cover"
        />
      </ResearchCard>
    </div>
  );
}

const ResearchCard = ({
  title,
  heading,
  description,
  children,
}: {
  title: string;
  heading: string;
  description: string;
  children: ReactNode;
}) => (
  <div className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-64 md:h-72 lg:h-96 w-full md:flex-1 bg-[#2D2D2D]">
    {children}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
    <div className="absolute p-6 left-0 top-0 z-20 w-full">
      <h2
        className="text-4xl text-[#fcecc9] atkinson-hyperlegible-next-regular"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
      >
        {title}
      </h2>
    </div>
    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
      <h1
        className="text-xl text-[#fcecc9] font-bold atkinson-hyperlegible-next-regular"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
      >
        {heading}
      </h1>
      <p
        className="text-[#fcecc9] text-base mt-2 atkinson-hyperlegible-next-regular"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default Research;
