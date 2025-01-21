import { useEffect, useRef, useState } from "react";
import CountDown from "../components/count-down";

export default function CountDownPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
      });
    }
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <CountDown
        canvasWidth={containerSize.width}
        canvasHeight={containerSize.height}
      />
    </div>
  );
}
