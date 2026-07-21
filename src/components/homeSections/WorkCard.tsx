import { motion } from "framer-motion";
import posthog from "posthog-js";
import { useNavigate } from "react-router-dom";
import { domRect } from "../../lib/rect";

type WorkCardProps = {
    title: string;
    slug: string;
    icon: string;
    color: string;
    titleFontClass?: string;
    titleFontSize?: number;
    fontSizeMultiplier?: number;
};

function WorkCard({ title, slug, icon, color, titleFontClass = "", titleFontSize = 48, fontSizeMultiplier = 1 }: WorkCardProps) {
    const navigate = useNavigate();

    const handleOpenFullscreen = (e: React.MouseEvent<HTMLDivElement>) => {
        posthog.capture('work card opened', { project: title, mode: 'fullscreen' });
        // Hand the card's on-screen rects to the project page so the surface,
        // icon and title can each fly from exactly here (and back on close).
        const titleEl = e.currentTarget.querySelector('[data-work-card-title]');
        navigate(`/work/${slug}`, {
            state: {
                fromRect: domRect(e.currentTarget),
                iconRect: domRect(e.currentTarget.querySelector('[data-work-card-icon]')),
                titleRect: domRect(titleEl),
                titlePx: titleEl ? parseFloat(getComputedStyle(titleEl).fontSize) : null,
            },
        });
    };

    return (
        <motion.div
            data-work-card={slug}
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="aspect-2/3 sm:aspect-auto sm:h-64 md:h-72 lg:h-96 w-full p-6 flex flex-col justify-between cursor-pointer overflow-hidden"
            style={{ backgroundColor: color }}
            onClick={handleOpenFullscreen}
        >
            <h2
                data-work-card-title
                className={`font-bold text-left ${titleFontClass}`}
                style={{
                    fontSize: `calc(${titleFontSize}px * ${fontSizeMultiplier})`,
                    whiteSpace: title.trim().split(' ').length === 1 ? 'nowrap' : 'normal',
                    wordBreak: 'normal',
                    lineHeight: '1.1'
                }}
            >
                {title}
            </h2>
            <img data-work-card-icon src={icon} alt={title} className="w-43" loading="lazy" decoding="async" />

        </motion.div>
    )
}

export default WorkCard
