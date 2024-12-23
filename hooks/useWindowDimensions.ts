"use client";

import { useEffect, useState } from "react";

function getWindowDimensions() {
  return {
    width: window?.innerWidth ?? NaN,
    height: window?.innerHeight ?? NaN,
  };
}

/**
 * https://stackoverflow.com/a/36862446
 */
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
