import { ProgressiveBlur } from "@/components/ui/progressive-blur";

function Research() {
    return (
        <div className="flex w-full gap-2">
            <div className="relative overflow-hidden min-h-100 flex-1"style={{backgroundColor:"#2D2D2D"}} >
                <img
                    src="https://sacd.larc.nasa.gov/wp-content/uploads/sites/167/2021/04/RAM-hero-1024x421.png"
                    alt="NASA RAM"
                    className="absolute inset-0 opacity-50 w-full h-full object-cover"
                />
                <ProgressiveBlur position="bottom" height="70%" />
                <div className="absolute p-6 left-0 z-20">
                    <h2 className="text-5xl text-white">NASA RAM</h2>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20 pt-20">
                    <h1 className="text-2xl text-white font-bold familjen-grotesk-regular">Advancing Regional Air Mobility in Appalachia</h1>
                    <p className="text-white text-lg mt-2 familjen-grotesk-regular">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id animi minus inventore, aspernatur iure voluptatibus, perspiciatis porro est fuga placeat corporis qui mollitia aliquid vel! Eius numquam illum necessitatibus voluptates.</p>
                </div>
                   <ProgressiveBlur position="top" height="60%" />
                <ProgressiveBlur position="bottom" height="10%" />
            </div>
            <div className="relative overflow-hidden min-h-100 flex-1" style={{backgroundColor:"#2D2D2D"}}>
                <video
                    src="https://ik.imagekit.io/sjuopypj1/out.webm"
                    
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 opacity-50 w-full h-full object-cover"
                />
                
                <div className="absolute p-6 left-0 z-20">
                    <h2 className="text-5xl text-white ">Loopy</h2>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20 pt-20">
                    <h1 className="text-2xl text-white font-bold familjen-grotesk-regular">Automation Of Generation Of Spatial Audio</h1>
                    <p className="text-white text-lg mt-2 familjen-grotesk-regular">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id animi minus inventore, aspernatur iure voluptatibus, perspiciatis porro est fuga placeat corporis qui mollitia aliquid vel! Eius numquam illum necessitatibus voluptates.</p>
                </div>
                <ProgressiveBlur position="top" height="60%" />
                <ProgressiveBlur position="bottom" height="10%" />
            </div>
        </div>
    )
}
export default Research

