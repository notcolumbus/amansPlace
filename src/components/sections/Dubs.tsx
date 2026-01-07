import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ComicText } from "@/components/ui/comic-text";

function Dubs() {
    const cardData = [
        {
            img: "https://ik.imagekit.io/sjuopypj1/Hacker%20Photo%201351%20(1).webp",
            span: "col-span-2",
            number: "3",
            fontSize: 3,
            title: "Awards at Hack Princeton 2025",
            titleSize: "text-3xl",
        },
        {
            img: "https://ik.imagekit.io/sjuopypj1/loopy.webp",
            span: "col-span-1",
            number: "$1000",
            fontSize: 2.5,
            title: "SEAD Research Grant",
            titleSize: "text-3xl",
        },
        {
            img: "https://ik.imagekit.io/sjuopypj1/LinkedIn%20Post%20Image.webp",
            span: "col-span-1",
            number: "1st",
            fontSize: 2.5,
            title: "Fall Data Competition",
            titleSize: "text-3xl",
        },
        {
            img: "https://ik.imagekit.io/sjuopypj1/Photo%20Oct%2014%202025.webp",
            span: "col-span-2",
            number: "2nd",
            fontSize: 2.5,
            title: "Marriott Codefest 2025",
            titleSize: "text-3xl",
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-2">
            {cardData.map((card, idx) => (
                <div key={idx} className={`relative  overflow-hidden min-h-100`}>
                    <img
                        src={card.img}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <ProgressiveBlur position="bottom" height="50%" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 p-6 pb-20 z-20">
                        <ComicText fontSize={card.fontSize}>{card.number}</ComicText>
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 z-20 pt-20">
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