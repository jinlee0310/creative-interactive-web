import { useEffect } from "react";
import { useCanvas } from "../../hooks";
import { generateRandomNumber } from "../../utils";
import styled from "styled-components";
import Particle from "./Particle";

interface CanvasProps {
  canvasWidth: number;
  canvasHeight: number;
}

export default function Gooey({ canvasWidth, canvasHeight }: CanvasProps) {
  const canvasRef = useCanvas({ canvasWidth, canvasHeight });

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    const TOTAL = 20;
    const particles: Particle[] = [];

    for (let i = 0; i < TOTAL; i++) {
      const x = generateRandomNumber(0, canvasWidth);
      const y = generateRandomNumber(0, canvasHeight);
      const radius = generateRandomNumber(30, 80);
      const vy = generateRandomNumber(1, 5);
      const particle = new Particle(x, y, radius, vy);
      particles.push(particle);
    }

    const animate = () => {
      if (ctx) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 이전 프레임을 지우고 새 프레임을 만듦
        particles.forEach((particle) => {
          particle.update();
          particle.draw(ctx);

          if (particle.y - particle.radius > canvasHeight) {
            particle.y = -particle.radius * 2;
            particle.x = generateRandomNumber(0, canvasWidth);
            particle.radius = generateRandomNumber(30, 100);
            particle.vy = generateRandomNumber(1, 5);
          }
        });
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [canvasHeight, canvasRef, canvasWidth]);

  return (
    <>
      <Canvas ref={canvasRef}></Canvas>
      <svg>
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              stdDeviation="40"
              in="SourceGraphic"
              result="blur1"
            />
            <feColorMatrix
              in="blur1"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -23"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

const Canvas = styled.canvas`
  filter: url("#gooey");
`;
