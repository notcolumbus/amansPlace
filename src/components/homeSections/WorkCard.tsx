import { motion } from "framer-motion";
import posthog from "posthog-js";
import { useNavigate } from "react-router-dom";

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

    const handleOpenFullscreen = () => {
        posthog.capture('work card opened', { project: title, mode: 'fullscreen' });
        navigate(`/work/${slug}`);
    };

    return (
        <motion.div 
            layoutId={`card-${slug}`}
            whileHover={{ scale: 0.97 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }} 
            className="aspect-2/3 sm:aspect-auto sm:h-64 md:h-72 lg:h-96 w-full p-6 flex flex-col justify-between cursor-pointer rounded-xl overflow-hidden" 
            style={{ backgroundColor: color }} 
            onClick={handleOpenFullscreen}
        >
            <motion.h2 
                layoutId={`title-${title}`}
                className={`font-bold text-left ${titleFontClass}`}
                style={{ 
                    fontSize: `calc(${titleFontSize}px * ${fontSizeMultiplier})`,
                    whiteSpace: title.trim().split(' ').length === 1 ? 'nowrap' : 'normal',
                    wordBreak: 'normal',
                    lineHeight: '1.1'
                }}
            >
                {title}
            </motion.h2>
            <motion.img layoutId={`icon-${title}`} src={icon} alt={title} className="w-43" loading="lazy" decoding="async" />

        </motion.div>
    )
}

export default WorkCard