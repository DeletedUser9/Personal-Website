"use client";

import { useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number };

type Bounds = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

type PlayerProps = {
  classname?: string;
  initialPos?: Pos;
};

export default function Player({
  classname,
  initialPos = { x: 80, y: 180 },
}: PlayerProps) {
  const [pos, setPos] = useState<Pos>(initialPos);
  const [hint,showHint] = useState(true);

  const SPRITE_SIZE = 256;
  const SPEED = 350;

  const playerRef = useRef<HTMLDivElement | null>(null);
  const keysDown = useRef<Set<string>>(new Set());
  const rafId = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);

  const boundsRef = useRef<Bounds>({
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
  });

  useEffect(() => {
    const updateBounds = () => {
      const parent = playerRef.current?.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const newBounds = {
        minX: 0,
        minY: 0,
        maxX: Math.max(0, rect.width - SPRITE_SIZE),
        maxY: Math.max(0, rect.height - SPRITE_SIZE),
      };

      boundsRef.current = newBounds;

      setPos((p) => ({
        x: Math.max(newBounds.minX, Math.min(newBounds.maxX, p.x)),
        y: Math.max(newBounds.minY, Math.min(newBounds.maxY, p.y)),
      }));
    };

    updateBounds();

    const parent = playerRef.current?.parentElement;
    const resizeObserver = new ResizeObserver(() => {
      updateBounds();
    });

    if (parent) resizeObserver.observe(parent);
    window.addEventListener("resize", updateBounds);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      keysDown.current.add(e.code);
      if (["KeyW", "KeyA", "KeyS", "KeyD"].includes(e.code)) {
        showHint(false);
  }

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keysDown.current.delete(e.code);
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);

    const tick = (t: number) => {
      if (lastTime.current == null) lastTime.current = t;
      const dt = (t - lastTime.current) / 1000;
      lastTime.current = t;

      const k = keysDown.current;

      let dx = 0;
      let dy = 0;

      if (k.has("KeyA")) dx -= 1;
      if (k.has("KeyD")) dx += 1;
      if (k.has("KeyW")) dy -= 1;
      if (k.has("KeyS")) dy += 1;

      if (dx !== 0 && dy !== 0) {
        const inv = 1 / Math.sqrt(2);
        dx *= inv;
        dy *= inv;
      }

      if (dx !== 0 || dy !== 0) {
        setPos((p) => {
          const nextX = p.x + dx * SPEED * dt;
          const nextY = p.y + dy * SPEED * dt;

          const b = boundsRef.current;

          return {
            x: Math.max(b.minX, Math.min(b.maxX, nextX)),
            y: Math.max(b.minY, Math.min(b.maxY, nextY)),
          };
        });
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={playerRef}
      className={classname}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: `${SPRITE_SIZE}px`,
        height: `${SPRITE_SIZE}px`,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        backgroundImage: "url(/player.gif)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        willChange: "transform",
      }}
    >{hint && 
      <span>Press WASD to move</span>
    }</div>
  );
}