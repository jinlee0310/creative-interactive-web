import { useRef } from "react";
import Gooey from "../components/gooey";

import { useContainerSize } from "../hooks/useContainerSize";

export default function GooeyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerSize(containerRef);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Gooey canvasWidth={width} canvasHeight={height} />
    </div>
  );
}
