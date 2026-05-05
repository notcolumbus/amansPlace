export default function Atlas() {
    return (
        <>
            <h2 className="text-lg opacity-70 mb-6 atkinson-hyperlegible-next-regular">2nd Place @ Marriott Codefest 2025</h2>

            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">
                Atlas is an all-in-one travel planning platform designed as a boundless canvas instead of a rigid checklist. It helps users organize destinations, ideas, and trip context in a visual, collaborative flow while keeping planning personal and flexible.
            </p>

            <p className="text-xl mb-6 wrap-break-words atkinson-hyperlegible-next-regular opacity-80">
                The product was built with Vite + React on the frontend and Flask APIs on the backend, with MongoDB Atlas for data intelligence and vector search. Atlas AI workflows were powered with tools like Gemini and Google Places, and the project won 2nd place at Marriott International's 2025 Codefest.
            </p>

            <a
                href="https://devpost.com/software/atlas-4kd1lf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black/20 rounded-lg hover:bg-black/30 active:scale-[0.97] transition-transform duration-100 ease-out atkinson-hyperlegible-next-regular"
            >
                View Project
            </a>
        </>
    );
}