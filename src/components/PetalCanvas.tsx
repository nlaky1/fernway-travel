"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "jasmine" | "fern" | "goldDust";
  flip: number;
  flipSpeed: number;
}

interface PetalCanvasProps {
  windIntensity?: number;
  interactive?: boolean;
}

export default function PetalCanvas({
  windIntensity = 1,
  interactive = true,
}: PetalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

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

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    // Initialize 36 lightweight petals & fern leaves
    const count = 38;
    const petals: Petal[] = [];
    const types: ("jasmine" | "fern" | "goldDust")[] = [
      "jasmine",
      "jasmine",
      "fern",
      "goldDust",
      "jasmine",
      "fern",
    ];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 8 + Math.random() * 14,
        speedX: (0.4 + Math.random() * 0.9) * windIntensity,
        speedY: (0.6 + Math.random() * 1.2) * windIntensity,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
        opacity: 0.35 + Math.random() * 0.45,
        type: types[i % types.length],
        flip: Math.random() * Math.PI,
        flipSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Wind & physics
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        // Subtle mouse breeze interaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x += (dx / dist) * force * 5;
            p.y += (dy / dist) * force * 5;
          }
        }

        // Wrap around boundaries smoothly
        if (p.x > width + 40) p.x = -40;
        if (p.x < -40) p.x = width + 40;
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        const scaleX = Math.cos(p.flip);
        ctx.scale(scaleX, 1);

        if (p.type === "jasmine") {
          // Delicate ivory / sunset blossom petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(
            p.size * 0.8,
            -p.size * 0.4,
            p.size * 0.8,
            p.size * 0.5,
            0,
            p.size
          );
          ctx.bezierCurveTo(
            -p.size * 0.8,
            p.size * 0.5,
            -p.size * 0.8,
            -p.size * 0.4,
            0,
            -p.size
          );
          ctx.fillStyle = `rgba(246, 241, 231, ${p.opacity * 0.9})`;
          ctx.fill();

          // Subtle gold accent rim
          ctx.lineWidth = 0.75;
          ctx.strokeStyle = `rgba(184, 137, 74, ${p.opacity * 0.6})`;
          ctx.stroke();
        } else if (p.type === "fern") {
          // Fresh green fern leaf frond (Fernway's emblem motif)
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.3);
          ctx.quadraticCurveTo(p.size * 0.5, 0, 0, p.size * 1.3);
          ctx.quadraticCurveTo(-p.size * 0.5, 0, 0, -p.size * 1.3);
          ctx.fillStyle = `rgba(126, 154, 107, ${p.opacity * 0.85})`;
          ctx.fill();

          // Delicate leaf vein
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.2);
          ctx.lineTo(0, p.size * 1.2);
          ctx.strokeStyle = `rgba(31, 74, 58, ${p.opacity * 0.7})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          // Floating warm golden ember / sunlight speck
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(184, 137, 74, ${p.opacity * 0.8})`;
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
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [windIntensity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
    />
  );
}
