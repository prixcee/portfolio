"use client";
import { useEffect, useRef } from "react";

export default function GridBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gap = 40;
    const mouse = { x: -1000, y: -1000 };
    let w = 0, h = 0, raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          const t = Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / 160);
          ctx.beginPath();
          ctx.arc(x, y, 1 + t * 2, 0, Math.PI * 2);
          ctx.fillStyle =
            t > 0.01 ? `rgba(198,242,78,${0.15 + t * 0.85})` : "rgba(255,255,255,0.12)";
          ctx.fill();
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw();
    };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) {
      window.addEventListener("mousemove", onMove);
      draw();
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" />;
}