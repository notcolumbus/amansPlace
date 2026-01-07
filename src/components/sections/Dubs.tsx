import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ComicText } from "@/components/ui/comic-text";

function Dubs() {
  const cardData = [
    {
      img: "https://ik.imagekit.io/sjuopypj1/Hacker%20Photo%201351%20(1).webp",
      span: "col-span-2",
      number: "3",
      fontSize: 4,
      title: "Awards at Hack Princeton 2025 Fall",
      titleSize: "text-2xl",
    },
    {
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      span: "col-span-1",
      number: "$1K",
      fontSize: 3,
      title: "ICAT SEAD Research Grant",
      titleSize: "text-xl",
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      span: "col-span-1",
      number: "1st",
      fontSize: 3,
      title: "Fall Data Competition",
      titleSize: "text-xl",
    },
    {
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      span: "col-span-2",
      number: "2nd",
      fontSize: 3,
      title: "Marriott Codefest 2025",
      titleSize: "text-2xl",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {cardData.map((card, idx) => (
        <div key={idx} className={`relative ${card.span} overflow-hidden min-h-100`}>
          <img 
            src={card.img}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <ProgressiveBlur position="bottom" height="70%" />
          <div className="absolute p-6 left-0 z-20">
            <ComicText fontSize={card.fontSize}>{card.number}</ComicText>
          </div>
          <div className="absolute bottom-0 left-0 p-6 z-20 pt-20">
            <h1 className={`${card.titleSize} text-white font-bold familjen-grotesk-regular`}>
              {card.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dubs;