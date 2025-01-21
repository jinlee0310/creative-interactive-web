import { useCanvas } from "../../hooks";

interface CanvasProps {
  canvasWidth: number;
  canvasHeight: number;
}

export default function CountDown({ canvasWidth, canvasHeight }: CanvasProps) {
  const canvasRef = useCanvas({ canvasWidth, canvasHeight });

  return <canvas ref={canvasRef} />;
}
