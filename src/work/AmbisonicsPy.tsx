export default function AmbisonicsPy() {
    return (
        <>
            <h2 className="text-lg opacity-70 mb-6 atkinson-hyperlegible-next-regular">Python Spatial Audio Framework</h2>

            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">
                AmbisonicsPy is a lightweight Python framework for generating spatial audio. It provides a clean set of primitives to build 3D sound scenes, including Speaker for source modeling and SoundStage for ambisonic encoding and rendering.
            </p>

            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">
                The library supports time-based movement effects, binaural output, and raw ambisonic exports, making it practical for research and creative audio workflows. The docs cover speaker behavior, soundstage rendering, and effect composition in detail.
            </p>

            <a
                href="https://docs.amans.place/ambisonicpy/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black/20 rounded-lg hover:bg-black/30 active:scale-[0.97] transition-transform duration-100 ease-out atkinson-hyperlegible-next-regular"
            >
                View Project
            </a>
        </>
    );
}