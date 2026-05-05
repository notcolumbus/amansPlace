import PiggyBank from "../work/PiggyBank";
import Atlas from "../work/Atlas";
import AmbisonicsPy from "../work/AmbisonicsPy";
import type { ReactNode } from "react";

export type Project = {
    title: string;
    slug: string;
    icon: string;
    color: string;
    titleFontClass?: string;
    titleFontSize?: number;
    fontSizeMultiplier?: number;
    component: ReactNode;
};

export const projects: Project[] = [
    {
        title: "Piggy Bank",
        slug: "piggy-bank",
        icon: "https://ik.imagekit.io/sjuopypj1/piggy.png?updatedAt=1767295866381",
        color: "#FF8CBA",
        titleFontClass: "luckiest-guy-regular",
        titleFontSize: 48,
        fontSizeMultiplier: 1.3,
        component: <PiggyBank />
    },
    {
        title: "Atlas",
        slug: "atlas",
        icon: "https://ik.imagekit.io/sjuopypj1/atlas.png",
        color: "#f7c548",
        titleFontClass: "belanosima-regular",
        titleFontSize: 44,
        component: <Atlas />
    },
    {
        title: "AmbisonicsPy",
        slug: "ambisonicspy",
        icon: "https://ik.imagekit.io/sjuopypj1/Gemini%20Generated%20Image.webp?updatedAt=1767884227402",
        color: "#7eb2dd",
        titleFontSize: 30,
        titleFontClass: "jetbrains-mono-regular",
        component: <AmbisonicsPy />
    },
];