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
  const [hint, showHint] = useState(true);

  const SPRITE_SIZE = 256;
  const BOUNDS_SIZE = 180;
  const SPEED = 350;
  const HIT = 70; // half-size of the interaction hitbox around the sprite centre

  const playerRef = useRef<HTMLDivElement | null>(null);
  const keysDown = useRef<Set<string>>(new Set());
  const rafId = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const nearTargetRef = useRef<HTMLElement | null>(null);

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
        minX: 0 - 93,
        minY: 0 - 76,
        maxX: Math.max(0, rect.width - BOUNDS_SIZE),
        maxY: Math.max(0, rect.height + 9 - BOUNDS_SIZE),
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

      if (e.code === "KeyE") {
        const target = nearTargetRef.current;
        if (target) {
          e.preventDefault();
          target.click();
        }
      }

      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(
          e.code,
        )
      ) {
        e.preventDefault();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keysDown.current.delete(e.code);
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("keyup", onKeyUp);

    const detectTarget = () => {
      const el = playerRef.current;
      if (!el) return;

      const pr = el.getBoundingClientRect();
      const cx = pr.left + pr.width / 2;
      const cy = pr.top + pr.height / 2;
      const hit = {
        left: cx - HIT,
        right: cx + HIT,
        top: cy - HIT,
        bottom: cy + HIT,
      };

      const targets = document.querySelectorAll<HTMLElement>(
        "[data-player-target]",
      );

      let found: HTMLElement | null = null;
      for (const t of Array.from(targets)) {
        const r = t.getBoundingClientRect();
        const overlap =
          hit.left < r.right &&
          hit.right > r.left &&
          hit.top < r.bottom &&
          hit.bottom > r.top;
        if (overlap) found = t;
      }

      if (found !== nearTargetRef.current) {
        nearTargetRef.current?.removeAttribute("data-player-active");
        found?.setAttribute("data-player-active", "");
        nearTargetRef.current = found;
      }
    };

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

      detectTarget();

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
    >
      {hint && (
        <span>
          Press <span className="text-amber-50">WASD</span> to move &{" "}
          <span className="text-amber-50">E</span> to interact
        </span>
      )}
    </div>
  );
}
