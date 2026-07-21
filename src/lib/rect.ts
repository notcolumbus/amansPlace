export type Rect = { top: number; left: number; width: number; height: number };

export function domRect(el: Element | null | undefined): Rect | null {
    const r = el?.getBoundingClientRect();
    if (!r || r.width === 0) return null;
    return { top: r.top, left: r.left, width: r.width, height: r.height };
}
