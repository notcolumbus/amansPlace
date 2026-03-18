import type { ComponentProps } from "react";
import WorkCard from "./WorkCard";

type ProjectCard = ComponentProps<typeof WorkCard>;

const projectCards: ProjectCard[] = [
    {
        title: "Piggy Bank",
        subtitle: "Real-Time Spending Coach",
        content:
            "PiggyBank is built to solve the invisible spending problem by helping users make better decisions in the moment, not weeks later. It learns recurring habits from item-level transactions, predicts likely repeat purchases, and sends timely nudges before spending happens.\n\nThe platform combines transaction ingestion, receipt OCR, and conversational feedback into one loop so users can track progress toward goals without guilt. It was built with a modern AI/data stack including Knot, Snowflake, Gemini, and OpenAI-powered assistant flows.",
        pictures: ["https://ik.imagekit.io/sjuopypj1/piggy.png?updatedAt=1767295866381", ""],
        link: "https://devpost.com/software/tbd-9clz1k",
        color: "#FF8CBA",
        titleFontClass: "luckiest-guy-regular",
        titleFontSize: 48,
    },
    {
        title: "Atlas",
        subtitle: "2nd Place @ Marriott Codefest 2025",
        content:
            "Atlas is an all-in-one travel planning platform designed as a boundless canvas instead of a rigid checklist. It helps users organize destinations, ideas, and trip context in a visual, collaborative flow while keeping planning personal and flexible.\n\nThe product was built with Vite + React on the frontend and Flask APIs on the backend, with MongoDB Atlas for data intelligence and vector search. Atlas AI workflows were powered with tools like Gemini and Google Places, and the project won 2nd place at Marriott International's 2025 Codefest.",
        link: "https://devpost.com/software/atlas-4kd1lf",
        pictures: ["https://ik.imagekit.io/sjuopypj1/atlas.png"],
        color: "#f7c548",
        titleFontClass: "belanosima-regular",
        titleFontSize: 44,
    },
    {
        title: "AmbisonicsPy",
        subtitle: "Python Spatial Audio Framework",
        content:
            "AmbisonicsPy is a lightweight Python framework for generating spatial audio. It provides a clean set of primitives to build 3D sound scenes, including Speaker for source modeling and SoundStage for ambisonic encoding and rendering.\n\nThe library supports time-based movement effects, binaural output, and raw ambisonic exports, making it practical for research and creative audio workflows. The docs cover speaker behavior, soundstage rendering, and effect composition in detail.",
        link: "https://docs.amans.place/ambisonicpy/introduction",
        pictures: ["https://ik.imagekit.io/sjuopypj1/Gemini%20Generated%20Image.webp?updatedAt=1767884227402"],
        color: "#6B8EE8",
        titleFontSize: 30,
        titleFontClass: "jetbrains-mono-regular",
    },
    {
        title: "Fit Finder",
        subtitle: "The Outfit Search Engine",
        content:
            "Fit Finder helps users recreate outfits they see online using clothes they already own, reducing fast-fashion waste and impulse buying. Users digitize their wardrobe, then search from an inspiration image to find the closest in-closet matches.\n\nUnder the hood, the app uses OpenCLIP embeddings with MongoDB vector search (plus hybrid color/metadata matching) through a Flask backend. It also suggests sustainable buying alternatives using AI-generated item descriptions and live search results.",
        link: "https://devpost.com/software/fit-finder-10nxvg",
        pictures: ["https://ik.imagekit.io/sjuopypj1/Gemini%20Generated%20Image%20(4).png"],
        color: "#659157",
        titleFontSize: 48,
        titleFontClass: "shrikhand-regular",
    },
];

function CardContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {projectCards.map((card) => (
                <WorkCard key={card.title} {...card} />
            ))}
        </div>
    );
}

export default CardContainer;
