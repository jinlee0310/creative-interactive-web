import { useRef } from "react";
import CountDown from "../components/count-down";

import { useContainerSize } from "../hooks/useContainerSize";

export default function CountDownPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerSize(containerRef);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <CountDown canvasWidth={width} canvasHeight={height} />
    </div>
  );
}
