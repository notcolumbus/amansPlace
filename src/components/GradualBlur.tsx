import React, { useEffect, useRef, useState, useMemo } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import './GradualBlur.css';

interface GradualBlurConfig {
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | 'scroll';
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  responsive?: boolean;
  target?: 'parent' | 'page';
  width?: string;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

type GradualBlurProps = GradualBlurConfig & {
  preset?: string;
  hoverIntensity?: number;
  onAnimationComplete?: () => void;
};

type ResponsiveKey = 'height' | 'width';
type ResponsiveOverrideKey =
  | 'mobileHeight'
  | 'tabletHeight'
  | 'desktopHeight'
  | 'mobileWidth'
  | 'tabletWidth'
  | 'desktopWidth';

const DEFAULT_CONFIG: GradualBlurConfig = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: false,
  target: 'parent',
  className: '',
  style: {}
};

const PRESETS: Record<string, Partial<GradualBlurConfig>> = {
  top: { position: 'top', height: '6rem' },
  bottom: { position: 'bottom', height: '6rem' },
  left: { position: 'left', height: '6rem' },
  right: { position: 'right', height: '6rem' },
  subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },
  smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
  sharp: { height: '5rem', curve: 'linear', divCount: 4 },
  header: { position: 'top', height: '8rem', curve: 'ease-out' },
  footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
  sidebar: { position: 'left', height: '6rem', strength: 2.5 },
  'page-header': { position: 'top', height: '10rem', target: 'page', strength: 3 },
  'page-footer': { position: 'bottom', height: '10rem', target: 'page', strength: 3 }
};

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: (p: number) => p,
  bezier: (p: number) => p * p * (3 - 2 * p),
  'ease-in': (p: number) => p * p,
  'ease-out': (p: number) => 1 - Math.pow(1 - p, 2),
  'ease-in-out': (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

const mergeConfigs = (...configs: Array<Partial<GradualBlurProps>>) =>
  configs.reduce<GradualBlurProps>((acc, c) => ({ ...acc, ...c }), { ...DEFAULT_CONFIG });
const getGradientDirection = (position: string) =>
  ({
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right'
  } as Record<string, string>)[position] || 'to bottom';

const debounce = <Args extends unknown[]>(fn: (...args: Args) => void, wait: number) => {
  let t: ReturnType<typeof setTimeout> | undefined;
  return (...a: Args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), wait);
  };
};

const useResponsiveDimension = (
  responsive: boolean,
  config: GradualBlurProps & Record<string, unknown>,
  key: ResponsiveKey
) => {
  const [value, setValue] = useState<string | undefined>(config[key] as string | undefined);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => {
      const w = window.innerWidth;
      let nextValue = config[key] as string | undefined;

      const suffix = key === 'height' ? 'Height' : 'Width';
      const mobileKey = `mobile${suffix}` as ResponsiveOverrideKey;
      const tabletKey = `tablet${suffix}` as ResponsiveOverrideKey;
      const desktopKey = `desktop${suffix}` as ResponsiveOverrideKey;

      if (w <= 480 && typeof config[mobileKey] === 'string') {
        nextValue = config[mobileKey] as string;
      } else if (w <= 768 && typeof config[tabletKey] === 'string') {
        nextValue = config[tabletKey] as string;
      } else if (w <= 1024 && typeof config[desktopKey] === 'string') {
        nextValue = config[desktopKey] as string;
      }

      setValue(nextValue);
    };
    const debounced = debounce(calc, 100);
    calc();
    window.addEventListener('resize', debounced);
    return () => window.removeEventListener('resize', debounced);
  }, [responsive, config, key]);
  return responsive ? value : (config[key] as string | undefined);
};

const useIntersectionObserver = (ref: React.RefObject<HTMLDivElement | null>, shouldObserve = false) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
};

function GradualBlur(props: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset ? PRESETS[props.preset] ?? {} : {};
    return mergeConfigs(DEFAULT_CONFIG, presetConfig, props) as GradualBlurProps & Record<string, unknown>;
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive ?? false, config, 'height');
  const responsiveWidth = useResponsiveDimension(config.responsive ?? false, config, 'width');

  const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

  const blurDivs = useMemo(() => {
    const divs = [];
    const divCount = config.divCount ?? 5;
    const strength = config.strength ?? 2;
    const opacity = config.opacity ?? 1;
    const increment = 100 / divCount;
    const currentStrength =
      isHovered && config.hoverIntensity ? strength * config.hoverIntensity : strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve ?? 'linear'] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= divCount; i++) {
      let progress = i / divCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (config.exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * currentStrength;
      } else {
        blurValue = 0.0625 * (progress * divCount + 1) * currentStrength;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const direction = getGradientDirection(config.position ?? 'bottom');

      const divStyle: CSSProperties = {
        position: 'absolute' as const,
        inset: '0',
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity,
        transition:
          config.animated && config.animated !== 'scroll'
            ? `backdrop-filter ${config.duration} ${config.easing}`
            : undefined
      };

      divs.push(<div key={i} style={divStyle} />);
    }

    return divs;
  }, [config, isHovered]);

  const containerStyle = useMemo(() => {
    const position = config.position ?? 'bottom';
    const zIndex = config.zIndex ?? 1000;
    const isVertical = position === 'top' || position === 'bottom';
    const isHorizontal = position === 'left' || position === 'right';
    const isPageTarget = config.target === 'page';

    const baseStyle: CSSProperties = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: config.hoverIntensity ? 'auto' : 'none',
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? `opacity ${config.duration} ${config.easing}` : undefined,
      zIndex: isPageTarget ? zIndex + 100 : zIndex,
      ...config.style
    };
    const positionedStyle = baseStyle as CSSProperties & Record<string, string | number | undefined>;

    if (isVertical) {
      positionedStyle.height = responsiveHeight;
      positionedStyle.width = responsiveWidth || '100%';
      positionedStyle[position] = 0;
      positionedStyle.left = 0;
      positionedStyle.right = 0;
    } else if (isHorizontal) {
      positionedStyle.width = responsiveWidth || responsiveHeight;
      positionedStyle.height = '100%';
      positionedStyle[position] = 0;
      positionedStyle.top = 0;
      positionedStyle.bottom = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  const { hoverIntensity, animated, onAnimationComplete } = config;
  const duration = config.duration ?? '0.3s';

  useEffect(() => {
    if (isVisible && animated === 'scroll' && onAnimationComplete) {
      const ms = parseFloat(duration) * 1000;
      const t = setTimeout(() => onAnimationComplete(), ms);
      return () => clearTimeout(t);
    }
  }, [isVisible, animated, onAnimationComplete, duration]);

  return (
    <div
      ref={containerRef}
      className={`gradual-blur ${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} ${config.className}`}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div
        className="gradual-blur-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        {blurDivs}
      </div>
    </div>
  );
}

type GradualBlurMemoType = React.MemoExoticComponent<typeof GradualBlur> & {
  PRESETS: typeof PRESETS;
  CURVE_FUNCTIONS: typeof CURVE_FUNCTIONS;
};

const GradualBlurMemo = React.memo(GradualBlur) as GradualBlurMemoType;
GradualBlurMemo.displayName = 'GradualBlur';
GradualBlurMemo.PRESETS = PRESETS;
GradualBlurMemo.CURVE_FUNCTIONS = CURVE_FUNCTIONS;
export default GradualBlurMemo;

const injectStyles = () => {
  if (typeof document === 'undefined') return;

  const styleId = 'gradual-blur-styles';
  if (document.getElementById(styleId)) return;

  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = `
  .gradual-blur { pointer-events: none; transition: opacity 0.3s ease-out; }
  .gradual-blur-parent { overflow: hidden; }
  .gradual-blur-inner { pointer-events: none; }`;

  document.head.appendChild(styleElement);
};

if (typeof document !== 'undefined') {
  injectStyles();
}
