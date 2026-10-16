"use client";

import { useEffect, useRef, useState } from "react";

export type RingItem = {
  title: string;
  meta?: string; // e.g. "Hackathon · 2025"
  description?: string;
  tags?: string[];
  badge?: string; // e.g. "Upcoming"
  href?: string;
};

type Props = {
  items: RingItem[];
  cardWidth?: number;
  cardHeight?: number;
  gap?: number;
  autoRotate?: boolean;
};

export default function Ring3D({
  items,
  cardWidth = 260,
  cardHeight = 320,
  gap = 28,
  autoRotate = true,
}: Props) {
  const n = Math.max(items.length, 3);
  const step = 360 / items.length;
  // Radius so neighbouring cards sit side by side with a gap between them.
  const radius = Math.round((cardWidth + gap) / 2 / Math.tan(Math.PI / n));
  const ringWidth = radius * 2 + cardWidth;

  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rot = useRef(0);
  const vel = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const moved = useRef(0);
  const idleSince = useRef(0);
  const reduced = useRef(false);
  const [scale, setScale] = useState(1);

  // Fit the ring to the available width (phones).
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / ringWidth));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ringWidth]);

  // Animation loop: inertia, then a slow idle spin.
  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = () => {
      if (!dragging.current) {
        rot.current += vel.current;
        vel.current *= 0.95;
        if (Math.abs(vel.current) < 0.02) vel.current = 0;
        const idle = performance.now() - idleSince.current > 1500;
        if (autoRotate && !reduced.current && vel.current === 0 && idle) {
          rot.current += 0.12;
        }
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(${-radius}px) rotateY(${rot.current}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [radius, autoRotate]);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    moved.current = 0;
    lastX.current = e.clientX;
    vel.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    moved.current += Math.abs(dx);
    rot.current += dx * 0.4;
    vel.current = dx * 0.4;
  };
  const onUp = () => {
    dragging.current = false;
    idleSince.current = performance.now();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") vel.current = step / 20;
    if (e.key === "ArrowLeft") vel.current = -step / 20;
    idleSince.current = performance.now();
  };

  return (
    <div className="w-full">
      <div
        ref={stageRef}
        role="region"
        aria-label="Projects ring. Drag, or use the left and right arrow keys, to rotate."
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="relative mx-auto w-full max-w-5xl cursor-grab select-none active:cursor-grabbing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{
          height: cardHeight * scale + 80,
          perspective: 1400,
          touchAction: "pan-y",
        }}
      >
        {/* Scales the whole ring down on narrow screens */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: 0,
            height: 0,
            transform: `scale(${scale})`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={ringRef}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              transformStyle: "preserve-3d",
              transform: `translateZ(${-radius}px) rotateY(0deg)`,
            }}
          >
            {items.map((item, i) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.title + i}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noreferrer" : undefined}
                  draggable={false}
                  onClickCapture={(e: React.MouseEvent) => {
                    if (moved.current > 6) e.preventDefault(); // it was a drag, not a click
                  }}
                  className="absolute flex flex-col gap-3 rounded-2xl border border-neutral-600 bg-neutral-900/60 p-5 text-neutral-100 shadow-xl backdrop-blur-sm"
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    left: -cardWidth / 2,
                    top: -cardHeight / 2,
                    // Faces stay visible from behind: that is what shows the
                    // mirrored cards through the gaps and makes it read as a cylinder.
                    backfaceVisibility: "visible",
                    transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    {item.meta && <span className="text-xs text-neutral-400">{item.meta}</span>}
                    {item.badge && (
                      <span className="rounded-full border border-neutral-500 px-2 py-0.5 text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm leading-relaxed text-neutral-300">{item.description}</p>
                  )}
                  {item.tags && (
                    <ul className="mt-auto flex flex-wrap gap-1.5">
                    {item.tags.map((t, idx) => (
  <li key={`${t}-${idx}`} className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
    {t}
  </li>
))}
                
                    </ul>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-sm text-neutral-400">Drag to spin</p>
    </div>
  );
}

