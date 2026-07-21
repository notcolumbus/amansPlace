export const EXPAND_EASE = [0.23, 1, 0.32, 1] as const; // ease-out-quint

export const OPEN_MS = 300;
export const CLOSE_MS = 250;
// How long App keeps the project overlay mounted after the URL leaves it —
// must outlast the close animation.
export const CLOSE_UNMOUNT_MS = CLOSE_MS + 30;

export const OPEN = { duration: OPEN_MS / 1000, ease: EXPAND_EASE };
export const CLOSE = { duration: CLOSE_MS / 1000, ease: EXPAND_EASE };
