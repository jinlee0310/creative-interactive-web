import { useRef, useEffect } from "react";

interface CanvasProps {
  canvasWidth: number;
  canvasHeight: number;
}

export const useCanvas = ({ canvasWidth, canvasHeight }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const devicePixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      canvas.width = canvasWidth * devicePixelRatio;
      canvas.height = canvasHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);

      canvas.style.width = canvasWidth + "px";
      canvas.style.height = canvasHeight + "px";
    }
  }, [canvasHeight, canvasWidth]);

  return canvasRef;
};
