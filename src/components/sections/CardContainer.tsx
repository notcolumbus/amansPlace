import WorkCard from "./WorkCard"

function CardContainer() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <WorkCard 
                title="Piggy Bank" 
                subtitle="A Financial App"
                content="We built Piggy to do more than just track spending — it’s an agent quietly working in the background, learning your financial habits and helping you make smarter choices.

Imagine this: you tap your card at Starbucks, and Piggy takes note. Over time, it learns that you grab coffee every day around 8 a.m. Since Piggy is designed to understand your behavioral patterns, it predicts when your next purchase is coming — and before you buy(say at 7.30), it sends a friendly iMessage nudge:"
                pictures={[
                    "https://ik.imagekit.io/sjuopypj1/piggy.png?updatedAt=1767295866381", 
                    ""
                ]}
                link="kds"
                color="#FF8CBA"
                titleFontClass="luckiest-guy-regular"
            />
            <WorkCard 
                title="Atlas" 
                subtitle="A Fin"
                content="blah"
                link="https://github.com"
                pictures={["https://ik.imagekit.io/sjuopypj1/atlas.png"]}
                color="#f7c548"
                titleFontClass="belanosima-regular"
            />
            
            <WorkCard 
                title="ambisoncsPy" 
                subtitle="Spatial Audio Library"
                content="A Python library for Ambisonics spatial audio processing"
                link="https://github.com"
                pictures={["https://ik.imagekit.io/sjuopypj1/atlas.png"]}
                color="#6B8EE8"
                titleFontClass="familjen-grotesk-regular"
            />
            
            <WorkCard 
                title="Fit Finder" 
                subtitle="A Fin"
                content="blah"
                link="https://github.com"
                pictures={["https://ik.imagekit.io/sjuopypj1/Gemini%20Generated%20Image%20(4).png"]}
                color="#659157"
                titleFontClass="shrikhand-regular"
            />
            
        </div>
    )
}

export default CardContainer