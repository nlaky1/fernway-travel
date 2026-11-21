"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

export interface BlowingPetalCanvasHandle {
  triggerBlowGust: (originX?: number, originY?: number) => void;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "jasmine" | "fern" | "goldDust" | "rosePetal";
  flip: number;
  flipSpeed: number;
  isBurst?: boolean;
  life?: number;
  maxLife?: number;
}

interface BlowingPetalCanvasProps {
  windIntensity?: number;
}

const BlowingPetalCanvas = forwardRef<BlowingPetalCanvasHandle, BlowingPetalCanvasProps>(
  ({ windIntensity = 1 }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const petalsRef = useRef<Petal[]>([]);
    const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
      x: -1000,
      y: -1000,
      active: false,
    });

    // Expose triggerBlowGust to parent components
    useImperativeHandle(ref, () => ({
      triggerBlowGust: (originX?: number, originY?: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Origin at the woman's cupped hand
        const ox = originX !== undefined ? originX : canvas.width * 0.28;
        const oy = originY !== undefined ? originY : canvas.height * 0.54;

        const burstCount = 65;
        const types: ("jasmine" | "fern" | "goldDust" | "rosePetal")[] = [
          "fern",
          "jasmine",
          "goldDust",
          "rosePetal",
          "fern",
          "jasmine",
        ];

        for (let i = 0; i < burstCount; i++) {
          const angle = -0.3 + (Math.random() - 0.4) * 0.95;
          const speed = 4.5 + Math.random() * 8.5;

          petalsRef.current.push({
            x: ox + (Math.random() - 0.5) * 22,
            y: oy + (Math.random() - 0.5) * 22,
            size: 10 + Math.random() * 16,
            speedX: Math.cos(angle) * speed * windIntensity,
            speedY: Math.sin(angle) * speed * windIntensity - (0.5 + Math.random() * 1.5),
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.08,
            opacity: 0.9 + Math.random() * 0.1,
            type: types[i % types.length],
            flip: Math.random() * Math.PI,
            flipSpeed: 0.04 + Math.random() * 0.06,
            isBurst: true,
            life: 0,
            maxLife: 160 + Math.random() * 90,
          });
        }
      },
    }));

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let animationFrameId: number;
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const handleResize = () => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);

      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        };
      };

      const handleMouseLeave = () => {
        mouseRef.current.active = false;
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);

      // Baseline ambient petals
      const initialCount = 34;
      const baselinePetals: Petal[] = [];
      const types: ("jasmine" | "fern" | "goldDust" | "rosePetal")[] = [
        "fern",
        "jasmine",
        "goldDust",
        "rosePetal",
        "fern",
      ];

      for (let i = 0; i < initialCount; i++) {
        baselinePetals.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 9 + Math.random() * 14,
          speedX: (0.5 + Math.random() * 1.1) * windIntensity,
          speedY: (0.4 + Math.random() * 0.9) * windIntensity,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.03,
          opacity: 0.55 + Math.random() * 0.35,
          type: types[i % types.length],
          flip: Math.random() * Math.PI,
          flipSpeed: 0.02 + Math.random() * 0.03,
          isBurst: false,
        });
      }

      petalsRef.current = baselinePetals;

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        const mouse = mouseRef.current;
        const currentList = petalsRef.current;

        for (let i = currentList.length - 1; i >= 0; i--) {
          const p = currentList[i];

          // Physics update
          p.x += p.speedX;
          p.y += p.speedY;
          p.rotation += p.rotationSpeed;
          p.flip += p.flipSpeed;

          // Air friction on burst petals
          if (p.isBurst) {
            p.speedX *= 0.985;
            p.speedY += 0.04;
            p.life = (p.life || 0) + 1;
            if (p.life > (p.maxLife || 180)) {
              currentList.splice(i, 1);
              continue;
            }
          }

          // Gentle mouse hover breeze interaction
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const force = (130 - dist) / 130;
              p.x += (dx / dist) * force * 4.5;
              p.y += (dy / dist) * force * 4.5;
            }
          }

          // Boundary wrapping for baseline ambient petals
          if (!p.isBurst) {
            if (p.x > width + 40) p.x = -40;
            if (p.x < -40) p.x = width + 40;
            if (p.y > height + 40) {
              p.y = -30;
              p.x = Math.random() * width;
            }
          }

          // Render Petal Shape (Optimized for light luxury background)
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          const scaleX = Math.cos(p.flip);
          ctx.scale(scaleX, 1);

          let currentOpacity = p.opacity;
          if (p.isBurst && p.life && p.maxLife) {
            const progress = p.life / p.maxLife;
            if (progress > 0.75) {
              currentOpacity *= 1 - (progress - 0.75) / 0.25;
            }
          }

          if (p.type === "jasmine") {
            // Elegant ivory jasmine blossom petal with golden rim
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.bezierCurveTo(p.size * 0.75, -p.size * 0.3, p.size * 0.75, p.size * 0.5, 0, p.size);
            ctx.bezierCurveTo(-p.size * 0.75, p.size * 0.5, -p.size * 0.75, -p.size * 0.3, 0, -p.size);
            ctx.fillStyle = `rgba(255, 252, 246, ${currentOpacity * 0.95})`;
            ctx.shadowColor = "rgba(184, 137, 74, 0.3)";
            ctx.shadowBlur = 4;
            ctx.fill();

            // Gold trimmed edge for crisp definition on light backgrounds
            ctx.lineWidth = 1;
            ctx.strokeStyle = `rgba(184, 137, 74, ${currentOpacity * 0.85})`;
            ctx.stroke();
          } else if (p.type === "rosePetal") {
            // Soft blush / coral sunset petal
            ctx.beginPath();
            ctx.moveTo(0, -p.size);
            ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.2, p.size * 0.8, p.size * 0.6, 0, p.size * 0.9);
            ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.6, -p.size * 0.85, -p.size * 0.2, 0, -p.size);
            ctx.fillStyle = `rgba(228, 155, 135, ${currentOpacity * 0.85})`;
            ctx.shadowColor = "rgba(228, 155, 135, 0.3)";
            ctx.shadowBlur = 3;
            ctx.fill();

            ctx.lineWidth = 0.75;
            ctx.strokeStyle = `rgba(184, 110, 95, ${currentOpacity * 0.7})`;
            ctx.stroke();
          } else if (p.type === "fern") {
            // Fresh brand green Fernway leaf frond
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.4);
            ctx.quadraticCurveTo(p.size * 0.55, 0, 0, p.size * 1.4);
            ctx.quadraticCurveTo(-p.size * 0.55, 0, 0, -p.size * 1.4);
            ctx.fillStyle = `rgba(31, 74, 58, ${currentOpacity * 0.9})`;
            ctx.shadowColor = "rgba(31, 74, 58, 0.25)";
            ctx.shadowBlur = 3;
            ctx.fill();

            // Distinct leaf rib
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.3);
            ctx.lineTo(0, p.size * 1.3);
            ctx.strokeStyle = `rgba(16, 40, 31, ${currentOpacity * 0.85})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          } else {
            // Radiant golden ember dust particle
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.28, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(184, 137, 74, ${currentOpacity * 0.95})`;
            ctx.shadowColor = "#B8894A";
            ctx.shadowBlur = 6;
            ctx.fill();
          }

          ctx.restore();
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
      };
    }, [windIntensity]);

    return (
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-30 h-full w-full"
      />
    );
  }
);

BlowingPetalCanvas.displayName = "BlowingPetalCanvas";

export default BlowingPetalCanvas;
