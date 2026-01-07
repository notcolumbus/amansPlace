function Research() {
    return (
        <div className="relative overflow-hidden" style={{backgroundColor:"#2D2D2D"}}>
            <video
                src="https://ik.imagekit.io/sjuopypj1/out.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-150 ml-auto"
            />

            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2D2D2D]/30 to-[#2D2D2D]" />
                <div className="absolute inset-0 backdrop-blur-[2px]" style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100%)'
                }} />
                <div className="absolute inset-0 backdrop-blur-[20px]" style={{
                    maskImage: 'linear-gradient(to right, transparent 60%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 60%, black 100%)'
                }} />
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 text-white z-10">
                <h1 className="text-6xl">Loopy</h1>
                <h2 className="text-2xl">Automation Of Generation Of Spatial Audio</h2>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id animi minus inventore, aspernatur iure voluptatibus, perspiciatis porro est fuga placeat corporis qui mollitia aliquid vel! Eius numquam illum necessitatibus voluptates.</h3>
            </div>
        </div>
    )
}
export default Research

