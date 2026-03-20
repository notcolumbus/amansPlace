import EmojiPop from '../art/EmojiPop';

function ArtPage() {
  return (
    <div className="pt-10">
      <h2 className='text-lg atkinson-hyperlegible-next-regular text-[#112A46]'>What's the Earth without art? Just a <EmojiPop emoji="🪨">rock</EmojiPop>.</h2>
      <h3 className='text-lg pt-10 atkinson-hyperlegible-next-regular text-[#112A46]'>Working on my first Zine will share soon!!!!!!!!</h3>

      {/* shelf */}
      <div className="mt-60 relative [perspective:800px]">
        {/* zine postcard sitting on shelf */}
        <div className="absolute bottom-1/2 ml-4 z-10">
          <div className="w-80 h-56 bg-[#f5f0e8] rounded-sm shadow-[4px_4px_12px_rgba(0,0,0,0.2)] border border-[#e0d8cc] p-3 flex flex-col justify-between">
            <div className="flex-1 bg-yellow-600 rounded-sm flex items-center justify-center overflow-hidden">
              <span className="text-[#f5f0e8] text-3xl font-bold leading-tight text-center px-2">the story of cheese</span>
            </div>
            <div className="mt-2 text-[8px] text-[#8a7e6b] atkinson-hyperlegible-next-regular text-center tracking-widest uppercase">Coming Soon</div>
          </div>
        </div>
        {/* shelf plank */}
        <div className="w-full h-[50px] bg-gradient-to-b from-[#d4b896] to-[#c4a882] rounded-t-sm origin-bottom [transform:rotateX(40deg)] shadow-[0_-2px_8px_rgba(0,0,0,0.1)]" />
        <div className="w-full h-3 bg-gradient-to-b from-[#c4a882] to-[#b89b72] rounded-b-sm shadow-[0_4px_10px_-4px_rgba(0,0,0,0.15)]" />
        <div className="w-[98%] h-5 mx-auto mt-0.5 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06)_0%,transparent_70%)]" />
      </div>
    </div>
  )
}

export default ArtPage
