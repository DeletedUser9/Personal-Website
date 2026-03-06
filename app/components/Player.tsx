"use client";

import { useEffect, useRef, useState } from "react";

type Pos = { x: number; y: number };
type PlayerProps = {
  classname?: string;
}

export default function Player({ classname }: PlayerProps) {
 
  const [pos, setPos] = useState<Pos>({ x: 300, y: 0 });

  
  const SPRITE_SIZE = 256;

 
  const SPEED = 350;

 
  const keysDown = useRef<Set<string>>(new Set());


  const rafId = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
  
      keysDown.current.add(e.code);

  
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

          const maxX = window.innerWidth - SPRITE_SIZE;
          const maxY = window.innerHeight - SPRITE_SIZE;

          return {
            x: Math.max(0, Math.min(maxX, nextX)),
            y: Math.max(0, Math.min(maxY, nextY)),
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
    <div>
      <div
        className={classname}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          backgroundImage: "url(/player.gif)",
          backgroundSize: "cover",
          imageRendering: "pixelated",
          willChange: "transform",
        }}
      />
    </div>
  );
}