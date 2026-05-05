import { motion } from "framer-motion";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { Home } from "lucide-react";
import { useEffect } from "react";

export default function ProjectPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        // Lock the body height to prevent scroll position from collapsing to 0
        // when the HomePage unmounts. This makes the return animation flawless.
        const scrollY = window.scrollY;
        const bodyHeight = document.body.scrollHeight;
        
        document.body.style.height = `${bodyHeight}px`;
        
        return () => {
            document.body.style.height = '';
            // Only restore scroll if we are not at the top, to avoid weird jumps
            if (scrollY > 0) {
                window.scrollTo(0, scrollY);
            }
        };
    }, []);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const { title, icon, color, titleFontClass, component } = project;

    const handleClose = () => {
        navigate('/', { replace: true });
    };

    return (
        <motion.div 
            layoutId={`card-${slug}`}
            className="fixed inset-0 w-full h-[100dvh] overflow-y-auto flex flex-col items-center justify-start pb-20 z-50" 
            style={{ backgroundColor: color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.15, ease: "easeOut" }}
        >
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-5 py-3 bg-black/10 rounded-full text-black/70 font-mono text-sm md:text-base">
                <span className="opacity-60">work /</span>
                <span className="font-semibold">{slug}</span>
            </div>

            <button
                className="absolute top-4 right-4 z-10 p-3 bg-black/10 hover:bg-black/20 rounded-full transition-colors text-black/70 hover:text-black cursor-pointer flex items-center gap-2"
                onClick={handleClose}
                title="Home"
            >
                <Home size={20} />
                <span className="hidden sm:inline font-medium pr-2 atkinson-hyperlegible-next-regular">Home</span>
            </button>

            <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 mt-24">
                <motion.img
                    layoutId={`icon-${title}`}
                    src={icon}
                    alt={title}
                    className="pb-6 w-50 max-w-full h-auto"
                    loading="lazy"
                    decoding="async"
                />

                <motion.h2 layoutId={`title-${title}`} className={`text-5xl font-bold mb-8 ${titleFontClass || ''}`}>{title}</motion.h2>

                <div className="atkinson-hyperlegible-next-regular">
                    {component}
                </div>
            </div>
        </motion.div>
    );
}