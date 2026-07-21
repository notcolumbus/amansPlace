import { useEffect, useRef, useState } from 'react';
import posthog from 'posthog-js';

const SONG_SRC = '/song.m4a';
const VOLUME = 0.1;

function MusicDisk() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const audio = new Audio(SONG_SRC);
        audio.loop = true;
        audio.volume = VOLUME;
        audio.addEventListener('play', () => setPlaying(true));
        audio.addEventListener('pause', () => setPlaying(false));
        audioRef.current = audio;

        const gestures = new AbortController();
        audio.play().catch(() => {
            // Autoplay blocked by the browser — start on the first interaction
            // anywhere on the page instead (clicks on the disk itself are left
            // to the disk's own handler).
            const start = (e: Event) => {
                if (btnRef.current && e.target instanceof Node && btnRef.current.contains(e.target)) return;
                audio.play().catch(() => {});
                gestures.abort();
            };
            window.addEventListener('pointerdown', start, { signal: gestures.signal });
            window.addEventListener('keydown', start, { signal: gestures.signal });
        });

        return () => {
            gestures.abort();
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        posthog.capture('music disk clicked', { action: playing ? 'pause' : 'play' });
        if (playing) {
            audio.pause();
        } else {
            void audio.play().catch(() => {});
        }
    };

    return (
        <div className="fixed bottom-4 left-4 lg:bottom-6 lg:left-6 z-40">
            <button
                ref={btnRef}
                onClick={toggle}
                aria-label={playing ? 'Pause the music' : 'Play the music'}
                aria-pressed={playing}
                className="block cursor-pointer transition-transform duration-200 ease-out [@media(hover:hover)]:hover:scale-110 active:scale-95"
            >
                <div className={`music-disk h-9 w-9 lg:h-10 lg:w-10 ${playing ? 'music-disk-spinning' : ''}`}>
                    <div className="music-disk-label">
                        <div className="music-disk-hole" />
                    </div>
                </div>
            </button>
        </div>
    );
}

export default MusicDisk;
