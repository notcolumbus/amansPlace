import { useMemo, useEffect, useRef, useState } from 'react';

interface Item {
  id: string;
  img: string;
  height: number;
}

interface MasonryProps {
  items: Item[];
}

const useColumns = () => {
  const [cols, setCols] = useState(() => {
    if (typeof window === 'undefined') return 2;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setCols(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return cols;
};

const Masonry: React.FC<MasonryProps> = ({ items }) => {
  const columns = useColumns();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const gap = 4;

  const positioned = useMemo(() => {
    if (!containerWidth) return [];

    const colWidth = (containerWidth - gap * (columns - 1)) / columns;
    const colHeights = new Array(columns).fill(0);

    return items.map((item) => {
      const shortest = colHeights.indexOf(Math.min(...colHeights));
      const x = shortest * (colWidth + gap);
      const y = colHeights[shortest];
      const h = (item.height / 600) * colWidth;

      colHeights[shortest] = y + h + gap;

      return { ...item, x, y, w: colWidth, h };
    });
  }, [items, columns, containerWidth]);

  const totalHeight = useMemo(() => {
    if (!positioned.length) return 0;
    return Math.max(...positioned.map(p => p.y + p.h));
  }, [positioned]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: totalHeight,
        padding: '0 4px',
      }}
    >
      {positioned.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            width: item.w,
            height: item.h,
            padding: '2px',
          }}
        >
          <img
            src={item.img}
            alt=""
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '0px',
              boxShadow: '0 8px 30px -10px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
