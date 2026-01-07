import React from "react";
import BlurEffect from "react-progressive-blur";
import { ComicText } from "@/components/ui/comic-text";

function Dubs() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="relative col-span-2 rounded-xl overflow-hidden bg-gray-800 p-6 min-h-50">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <BlurEffect position="bottom" intensity={50} className="z-50 inset"/>
        <div className="relative z-10 flex items-start gap-4">
          <ComicText className="flex-shrink-0" fontSize={4}>3</ComicText>
          <h1 className="text-2xl text-white font-bold text-left">Awards at Hack Princeton 2025 Fall</h1>
        </div>
      </div>

      <div className="relative col-span-1 rounded-xl overflow-hidden bg-gray-800 p-6 min-h-50">
        <img 
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <BlurEffect position="bottom" intensity={50} />
        <div className="relative z-10 flex flex-col items-start gap-2">
          <ComicText className="" fontSize={3}>$1K</ComicText>
          <h1 className="text-xl text-white font-bold text-left">ICAT SEAD Research Grant</h1>
        </div>
      </div>

      <div className="relative col-span-1 rounded-xl overflow-hidden bg-gray-800 p-6 min-h-50">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <BlurEffect position="bottom" intensity={50} />
        <div className="relative z-10 flex flex-col items-start gap-2">
          <ComicText className="" fontSize={3}>1st</ComicText>
          <h1 className="text-xl text-white font-bold text-left">Fall Data Competition</h1>
        </div>
      </div>

      <div className="relative col-span-2 rounded-xl overflow-hidden bg-gray-800 p-6 min-h-50">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <BlurEffect position="bottom" intensity={50} />
        <div className="relative z-10 flex items-start gap-4">
          <ComicText className="flex-shrink-0" fontSize={3}>2nd</ComicText>
          <h1 className="text-2xl text-white font-bold text-left">Marriott Codefest 2025</h1>
        </div>
      </div>
    </div>
  );
}

export default Dubs;