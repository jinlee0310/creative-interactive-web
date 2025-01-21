import { useCallback, useEffect, useState } from "react";

export const useContainerSize = <T extends HTMLElement>(
  containerRef: React.RefObject<T>,
) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setClientWidthHeight = useCallback(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth);
      setHeight(containerRef.current.clientHeight);
    }
  }, [containerRef]);

  useEffect(() => {
    setClientWidthHeight();

    window.addEventListener("resize", setClientWidthHeight);

    return () => window.removeEventListener("resize", setClientWidthHeight);
  }, [setClientWidthHeight]);

  return { width, height };
};
