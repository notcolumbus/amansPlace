export default function PiggyBank() {
    return (
        <>
            <h2 className="text-lg opacity-70 mb-6 atkinson-hyperlegible-next-regular">Real-Time Spending Coach</h2>

            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">
                PiggyBank is built to solve the invisible spending problem by helping users make better decisions in the moment, not weeks later. It learns recurring habits from item-level transactions, predicts likely repeat purchases, and sends timely nudges before spending happens.
            </p>

            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">
                The platform combines transaction ingestion, receipt OCR, and conversational feedback into one loop so users can track progress toward goals without guilt. It was built with a modern AI/data stack including Knot, Snowflake, Gemini, and OpenAI-powered assistant flows.
            </p>

            <a
                href="https://devpost.com/software/tbd-9clz1k"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black/20 rounded-lg hover:bg-black/30 active:scale-[0.97] transition-transform duration-100 ease-out atkinson-hyperlegible-next-regular"
            >
                View Project
            </a>
        </>
    );
}
