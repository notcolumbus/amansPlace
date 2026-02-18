import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type WorkCardProps = {
    title: string;
    subtitle: string;
    content: string;
    link: string;
    pictures: string[];
    color: string;
    titleFontClass?: string;
    titleFontSize?: number;
};

function WorkCard({ title, subtitle, content, link, pictures, color, titleFontClass = "", titleFontSize = 48 }: WorkCardProps) {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    return (
        <motion.div>
            {isOpen ?
                <motion.div layout className="fixed inset-0 z-50 p-8" style={{ backgroundColor: color }}>
                    <button
                        className="fixed right-4 pr-10 text-4xl opacity-60 hover:opacity-70"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(false);
                        }}
                    >
                        esc
                    
                    </button>


                    <div className="h-full overflow-y-auto">
                        <div className="max-w-4xl mx-auto pt-12 pb-12 wrap-break-word">
                            <motion.img
                                layoutId={`icon-${title}`}
                                src={pictures[0]}
                                alt={title}
                                className="pb-6 w-50 max-w-full h-auto"
                                loading="lazy"
                                decoding="async"
                            />

                            <motion.h1 layoutId={`title-${title}`} className={`text-5xl font-bold mb-2 ${titleFontClass} `}>{title}</motion.h1>

                            <h2 className="text-lg opacity-70 mb-6 atkinson-hyperlegible-next-regular ">{subtitle}</h2>

                            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">{content}</p>

                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-black/20 rounded-lg hover:bg-black/30 atkinson-hyperlegible-next-regular "
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Project
                            </a>
                            
                            {pictures[1] && (
                                <div className="mt-12 mb-8 w-full">
                                    <img 
                                        src={pictures[1]} 
                                        alt={`${title} screenshot`} 
                                        className="w-full h-auto rounded-xl shadow-lg"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            )}
                            
                        </div>
                    </div>
                </motion.div>
                :
                <motion.div layout className="aspect-2/3 sm:aspect-auto sm:h-64 md:h-72 lg:h-96 w-full p-6 flex flex-col justify-between" style={{ backgroundColor: color }} onClick={() => setOpen(true)}>
                    <motion.h1 
                        layoutId={`title-${title}`} 
                        className={`font-bold text-left ${titleFontClass}`}
                        style={{ 
                            fontSize: `${titleFontSize}px`,
                            whiteSpace: title.trim().split(' ').length === 1 ? 'nowrap' : 'normal',
                            wordBreak: 'normal',
                            lineHeight: '1.1'
                        }}
                    >
                        {title}
                    </motion.h1>
                    <motion.img layoutId={`icon-${title}`} src={pictures[0]} alt={title} className="w-43" loading="lazy" decoding="async" />

                </motion.div>
            }
        </motion.div>
    )
}

export default WorkCard
