import { motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { projects } from "../../data/projects";
import { domRect, type Rect } from "../../lib/rect";
import { OPEN, CLOSE, EXPAND_EASE } from "../../lib/motion";
import { Home } from "lucide-react";

type HeroEnds = { icon: Rect; title: Rect; titlePx: number };
type HeroFlight = {
    from: HeroEnds;
    to: HeroEnds;
    transition: typeof OPEN;
    cardRect?: Rect;
};

// Maps the fullscreen overlay onto a card's rect with pure transforms
// (transform-origin is top-left). Its own content is hidden while morphing,
// so the non-uniform scale is invisible on the solid colored surface.
function rectTransform(r: Rect) {
    return {
        x: r.left,
        y: r.top,
        scaleX: r.width / window.innerWidth,
        scaleY: r.height / window.innerHeight,
    };
}

function fontPx(el: Element | null): number | null {
    return el ? parseFloat(getComputedStyle(el).fontSize) || null : null;
}

// The card the overlay should collapse back onto, if it's on screen.
function liveCardEnds(slug?: string): (HeroEnds & { card: Rect }) | null {
    const cardEl = slug ? document.querySelector(`[data-work-card="${slug}"]`) : null;
    const card = domRect(cardEl);
    if (!card || card.top + card.height < 0 || card.top > window.innerHeight) return null;
    const titleEl = cardEl!.querySelector('[data-work-card-title]');
    const icon = domRect(cardEl!.querySelector('[data-work-card-icon]'));
    const title = domRect(titleEl);
    const titlePx = fontPx(titleEl);
    return icon && title && titlePx ? { card, icon, title, titlePx } : null;
}

// Rendered as an overlay outside <Routes>, so the slug comes in as a prop
// instead of useParams. `closing` plays the collapse while App keeps the
// overlay mounted for its duration.
//
// The card → page transition is a manual FLIP (framer's layoutId cleanup
// misbehaves in this tree): the colored surface morphs between the card rect
// and the viewport, while clones of the icon and title fly between their card
// and page positions in a fixed-position hero layer. When the flight lands,
// the clones swap for the real header in place.
export default function ProjectPage({ slug, closing = false }: { slug?: string; closing?: boolean }) {
    const navigate = useNavigate();
    const location = useLocation();

    const nav = (location.state ?? {}) as { fromRect?: Rect | null; iconRect?: Rect | null; titleRect?: Rect | null; titlePx?: number | null };
    const fromRect = nav.fromRect ?? null;
    const heroSource: HeroEnds | null = fromRect && nav.iconRect && nav.titleRect && nav.titlePx
        ? { icon: nav.iconRect, title: nav.titleRect, titlePx: nav.titlePx }
        : null;

    const [settled, setSettled] = useState(!fromRect);
    const [heroTarget, setHeroTarget] = useState<HeroEnds | null>(null);
    const iconRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    const project = projects.find(p => p.slug === slug);

    // Where the real icon/title will sit once the surface reaches identity.
    // Measured under the initial card-rect transform, so undo that transform
    // (font size is unaffected by the ancestor transform).
    useLayoutEffect(() => {
        if (!heroSource || !fromRect) return;
        const sx = fromRect.width / window.innerWidth;
        const sy = fromRect.height / window.innerHeight;
        const undo = (r: Rect): Rect => ({
            left: (r.left - fromRect.left) / sx,
            top: (r.top - fromRect.top) / sy,
            width: r.width / sx,
            height: r.height / sy,
        });
        const icon = domRect(iconRef.current);
        const title = domRect(titleRef.current);
        const titlePx = fontPx(titleRef.current);
        if (icon && title && titlePx) setHeroTarget({ icon: undo(icon), title: undo(title), titlePx });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // On close, fly the clones back onto the live card (if it's on screen).
    const closeFlight = useMemo<HeroFlight | null>(() => {
        if (!closing || !settled) return null;
        const to = liveCardEnds(slug);
        const icon = domRect(iconRef.current);
        const title = domRect(titleRef.current);
        const titlePx = fontPx(titleRef.current);
        if (!to || !icon || !title || !titlePx) return null;
        return { from: { icon, title, titlePx }, to, transition: CLOSE, cardRect: to.card };
    }, [closing, settled, slug]);

    const openFlight: HeroFlight | null = heroSource && heroTarget && !settled && !closing
        ? { from: heroSource, to: heroTarget, transition: OPEN }
        : null;
    const flight = closeFlight ?? openFlight;

    const handleClose = useCallback(() => {
        // Go back when the card was opened from the site, so history stays
        // clean; fall back to home on a direct visit to /work/:slug.
        const state = window.history.state as { idx?: number } | null;
        if (state && typeof state.idx === 'number' && state.idx > 0) {
            navigate(-1);
        } else {
            navigate('/', { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        if (closing) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [closing, handleClose]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const { title, icon, color, titleFontClass, component } = project;

    const flying = (!!heroSource && !settled) || !!closeFlight;
    const surfaceAnimate = closing
        ? (closeFlight?.cardRect ? { opacity: 1, ...rectTransform(closeFlight.cardRect) } : { opacity: 0 })
        : { opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1 };

    return (
        <>
        <motion.div
            className={`fixed inset-0 w-full h-[100dvh] overscroll-contain flex flex-col items-center justify-start pb-20 z-50 ${settled && !closing ? 'overflow-y-auto' : 'overflow-hidden'} ${closing ? 'pointer-events-none' : ''}`}
            style={{ backgroundColor: color, transformOrigin: '0 0', willChange: 'transform, opacity' }}
            initial={fromRect ? { opacity: 1, ...rectTransform(fromRect) } : { opacity: 0 }}
            animate={surfaceAnimate}
            transition={closing ? CLOSE : OPEN}
            onAnimationComplete={() => { if (!closing) setSettled(true); }}
        >
            <motion.button
                className="absolute top-4 right-4 z-10 p-3 bg-black/10 hover:bg-black/20 rounded-full transition-colors text-black/70 hover:text-black cursor-pointer flex items-center gap-2"
                onClick={handleClose}
                title="Close (Esc)"
                initial={{ opacity: 0, y: -8 }}
                animate={closing ? { opacity: 0 } : { opacity: 1, y: 0 }}
                transition={closing
                    ? { duration: 0.1, ease: "easeOut" }
                    : { duration: 0.25, ease: "easeOut", delay: 0.2 }}
            >
                <Home size={20} />
                <span className="hidden sm:inline font-medium pr-2 atkinson-hyperlegible-next-regular">Home</span>
            </motion.button>

            <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 mt-24">
                {/* Real header. Hidden while its clones are in flight, swapped in
                    the moment they land; fades in normally on direct loads. */}
                <motion.div
                    initial={{ opacity: 0, y: fromRect ? 0 : 12 }}
                    animate={{ opacity: closing || flying ? 0 : 1, y: 0 }}
                    transition={
                        closing ? { duration: closeFlight ? 0 : 0.1, ease: "easeOut" }
                        : heroSource ? { duration: 0 }
                        : { duration: 0.3, ease: EXPAND_EASE, delay: 0.18 }}
                >
                    <img
                        ref={iconRef}
                        src={icon}
                        alt={title}
                        className="pb-6 w-50 max-w-full h-auto"
                        decoding="async"
                    />
                    <h2 ref={titleRef} className={`text-5xl font-bold mb-8 ${titleFontClass || ''}`} style={{ lineHeight: 1.1 }}>{title}</h2>
                </motion.div>

                {/* Body eases in after the flight; drops out fast on close. */}
                <motion.div
                    className="atkinson-hyperlegible-next-regular"
                    initial={{ opacity: 0, y: 16 }}
                    animate={closing ? { opacity: 0 } : { opacity: 1, y: 0 }}
                    transition={closing
                        ? { duration: 0.1, ease: "easeOut" }
                        : { duration: 0.3, ease: EXPAND_EASE, delay: 0.26 }}
                >
                    {component}
                </motion.div>
            </div>
        </motion.div>

        {/* Hero layer: icon + title clones flying between card and page in
            viewport coordinates, outside the transformed surface. Position is
            animated with transforms; only the title's width/font-size tween
            touches layout, so its text re-wraps in flight. */}
        {flight && (
            <div className="fixed inset-0 z-[60] pointer-events-none">
                <motion.img
                    src={icon}
                    alt=""
                    className="absolute h-auto"
                    style={{
                        left: flight.from.icon.left,
                        top: flight.from.icon.top,
                        width: flight.from.icon.width,
                        transformOrigin: '0 0',
                    }}
                    initial={{ x: 0, y: 0, scale: 1 }}
                    animate={{
                        x: flight.to.icon.left - flight.from.icon.left,
                        y: flight.to.icon.top - flight.from.icon.top,
                        scale: flight.to.icon.width / flight.from.icon.width,
                    }}
                    transition={flight.transition}
                />
                <motion.h2
                    className={`absolute font-bold text-left ${titleFontClass || ''}`}
                    style={{ lineHeight: 1.1, left: flight.from.title.left, top: flight.from.title.top }}
                    initial={{ x: 0, y: 0, width: flight.from.title.width, fontSize: flight.from.titlePx }}
                    animate={{
                        x: flight.to.title.left - flight.from.title.left,
                        y: flight.to.title.top - flight.from.title.top,
                        width: flight.to.title.width,
                        fontSize: flight.to.titlePx,
                    }}
                    transition={flight.transition}
                >
                    {title}
                </motion.h2>
            </div>
        )}
        </>
    );
}
