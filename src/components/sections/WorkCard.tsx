import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type WorkCardProps = {
    title: string;
    subtitle: string;
    content: string;
    link: string;
    pictures: string[];
    color: string;
    titleFontClass?: string;
};

function WorkCard({ title, subtitle, content, link, pictures, color, titleFontClass = "" }: WorkCardProps) {
    const [isOpen, setOpen] = useState(false);
    const [fontSize, setFontSize] = useState(72);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleEscape = (e:any) =>{
        if (isOpen && e.key == "Escape"){
            setOpen(false);
        }
    }
    document.addEventListener("keydown", handleEscape);

    useEffect(() => {
        const fitText = () => {
            if (!titleRef.current || !containerRef.current) return;
            
            const container = containerRef.current;
            const containerWidth = container.clientWidth - 48; // minus padding
            
            let size = 72;
            titleRef.current.style.fontSize = `${size}px`;
            
            while (titleRef.current.scrollWidth > containerWidth && size > 16) {
                size -= 2;
                titleRef.current.style.fontSize = `${size}px`;
            }
            setFontSize(size);
        };

        fitText();
        window.addEventListener('resize', fitText);
        return () => window.removeEventListener('resize', fitText);
    }, [title, isOpen]);

    return (
        <motion.div>
            {isOpen ?
                <motion.div layout className="fixed inset-0 z-50 p-8" style={{ backgroundColor: color }}>
                    <button
                        className="fixed right-4 pr-10 text-8xl  opacity-60 hover:opacity-70"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(false);
                        }}
                    >
                        ×
                    </button>

                    <div className="h-full overflow-y-auto">
                        <div className="max-w-4xl mx-auto pt-12 pb-12 wrap-break-word">
                            <motion.img
                                layoutId={`icon-${title}`}
                                src={pictures[0]}
                                alt={title}
                                className="pb-6 w-50 max-w-full h-auto"
                            />

                            <motion.h1 layoutId={`title-${title}`} className={`text-7xl font-bold mb-2 ${titleFontClass}`}>{title}</motion.h1>

                            <h2 className="text-2xl opacity-70 mb-6">{subtitle}</h2>

                            <p className="text-3xl mb-6 wrap-break-words livvic-regular">{content}</p>

                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-black/20 rounded-lg hover:bg-black/30"
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Devpost
                            </a>
                            
                            {pictures[1] && (
                                <div className="mt-12 mb-8 w-full">
                                    <img 
                                        src={pictures[1]} 
                                        alt={`${title} screenshot`} 
                                        className="w-full h-auto rounded-xl shadow-lg" 
                                    />
                                </div>
                            )}
                            
                        </div>
                    </div>
                </motion.div>
                :
                <motion.div 
                    ref={containerRef}
                    layout 
                    className="aspect-2/3 w-full p-6 flex flex-col justify-between" 
                    style={{ backgroundColor: color }} 
                    onClick={() => setOpen(!isOpen)}
                >
                    <motion.h1 
                        ref={titleRef}
                        layoutId={`title-${title}`} 
                        className={`font-bold text-left ${titleFontClass}`}
                        style={{ 
                            fontSize: `${fontSize}px`,
                            whiteSpace: title.trim().split(' ').length === 1 ? 'nowrap' : 'normal',
                            wordBreak: 'normal',
                            lineHeight: '1.1'
                        }}
                    >
                        {title}
                    </motion.h1>
                    <motion.img layoutId={`icon-${title}`} src={pictures[0]} alt={title} className="w-43" />

                </motion.div>
            }
        </motion.div>
    )
}

export default WorkCard