import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ComicText } from "@/components/ui/comic-text";

function Dubs() {
    const cardData = [
        {
            img: "https://ik.imagekit.io/sjuopypj1/Hacker%20Photo%201351%20(1).webp",
            number: "3",
            fontSize: 2,
            title: "Awards at Hack Princeton",
            titleSize: "text-xl sm:text-2xl",
        },
        {
            img: "https://ik.imagekit.io/sjuopypj1/loopy.webp",
            number: "$1000",
            fontSize: 1.5,
            title: "SEAD Research Grant",
            titleSize: "text-xl sm:text-2xl",
        },
        {
            img: "https://ik.imagekit.io/sjuopypj1/LinkedIn%20Post%20Image.webp",
            number: "1st",
            fontSize: 2,
            title: "Fall Data Competition",
            titleSize: "text-xl sm:text-2xl",
        },
        {
            img: "https://ik.imagekit.io/sjuopypj1/Photo%20Oct%2014%202025.webp",
            number: "2nd",
            fontSize: 2,
            title: "Marriott Codefest 2025",
            titleSize: "text-xl sm:text-2xl",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            {cardData.map((card, idx) => (
                <div key={idx} className="relative overflow-hidden aspect-[3/4] sm:aspect-video md:aspect-[4/3]">
                    <img
                        src={card.img}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <ProgressiveBlur position="bottom" height="50%" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 p-4 z-20 flex flex-col gap-1 items-start">
                        <ComicText fontSize={card.fontSize} className="text-left">{card.number}</ComicText>
                        <h1 className={`${card.titleSize} text-white font-bold familjen-grotesk-regular drop-shadow-lg`}>
                            {card.title}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dubs;