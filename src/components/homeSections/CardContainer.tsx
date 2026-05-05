import { projects } from "../../data/projects";
import WorkCard from "./WorkCard";

function CardContainer() {
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((card) => (
                <WorkCard 
                    key={card.slug} 
                    title={card.title}
                    slug={card.slug}
                    icon={card.icon}
                    color={card.color}
                    titleFontClass={card.titleFontClass}
                    titleFontSize={card.titleFontSize}
                    fontSizeMultiplier={card.fontSizeMultiplier}
                />
            ))}
        </div>
    );
}

export default CardContainer;