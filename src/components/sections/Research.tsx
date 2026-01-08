import { ProgressiveBlur } from "@/components/ui/progressive-blur";

function Research() {
    return (
        <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-64 md:h-72 lg:h-96 w-full md:flex-1" style={{backgroundColor:"#2D2D2D"}} >
                <img
                    src="https://sacd.larc.nasa.gov/wp-content/uploads/sites/167/2021/04/RAM-hero-1024x421.png"
                    alt="NASA RAM"
                    className="absolute inset-0 opacity-50 w-full h-full object-cover"
                />
                <ProgressiveBlur position="bottom" height="70%" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute p-6 left-0 top-0 z-20 w-full">
                    <h2 className="text-4xl text-white drop-shadow-lg">NASA RAM</h2>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h1 className="text-xl text-white font-bold familjen-grotesk-regular drop-shadow-lg">Advancing Regional Air Mobility in Appalachia</h1>
                    <p className="text-white text-base mt-2 familjen-grotesk-regular drop-shadow-md">A regional-scale modeling framework to evaluate how hybrid-electric STOL aircraft can close rural mobility gaps through Regional Air Mobility.</p>
                </div>
                <ProgressiveBlur position="top" height="60%" />
                <ProgressiveBlur position="bottom" height="10%" />
            </div>
            <div className="relative overflow-hidden aspect-[3/4] sm:aspect-auto sm:h-64 md:h-72 lg:h-96 w-full md:flex-1" style={{backgroundColor:"#2D2D2D"}}>
                <video
                    src="https://ik.imagekit.io/sjuopypj1/out.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 opacity-50 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute p-6 left-0 top-0 z-20 w-full">
                    <h2 className="text-4xl text-white drop-shadow-lg">Loopy Audio</h2>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <h1 className="text-xl text-white font-bold familjen-grotesk-regular drop-shadow-lg">Automation Of Generation Of Spatial Audio</h1>
                    <p className="text-white text-base mt-2 familjen-grotesk-regular drop-shadow-md">A new framework that automates music spatialization using contextual and structural cues embedded within a song's envelopes.</p>
                </div>
                <ProgressiveBlur position="top" height="60%" />
                <ProgressiveBlur position="bottom" height="10%" />
            </div>
        </div>
    )
}
export default Research

