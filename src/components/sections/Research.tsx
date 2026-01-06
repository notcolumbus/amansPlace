function Research() {
  return (
    <div className="relative bg-[#2D2D2D] text-white overflow-hidden py-20">
      
      {/* Video layer */}
      <div className="absolute right-0 top-0 h-full w-[55%] pointer-events-none">
        <video
          src="https://ik.imagekit.io/sjuopypj1/out.webm"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover opacity-90 blur-[1px]"
        />
        {/* Blend */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(45,45,45,0)_0%,rgba(45,45,45,0.85)_55%,rgba(45,45,45,1)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-10">
        <span className="text-sm uppercase tracking-widest text-gray-400">
          Research · 2023
        </span>

        <h1 className="text-4xl font-semibold mt-3 leading-tight">
          Loopy
        </h1>

        <h2 className="text-xl text-gray-300 mt-2">
          Automation of Spatial Audio Generation
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-prose">
          dcksdvsdvsvdsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvs
        </p>
      </div>
    </div>
  )
}

export default Research
