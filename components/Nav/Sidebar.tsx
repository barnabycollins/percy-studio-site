"use client";

import { useTheme } from "next-themes";
import { NavBorderBox } from "./BorderBox";
import { useEffect, useState } from "react";

const themeOptions = ["light", "dark"];

export function NavSidebar() {
  const { setTheme, resolvedTheme } = useTheme();

  const [onClientSide, setOnClientside] = useState(false);

  useEffect(() => setOnClientside(true), []);

  return (
    <NavBorderBox noBorder={{ top: true }}>
      <div>Left nav here</div>
      {resolvedTheme && onClientSide ? (
        <button
          onClick={() => {
            if (resolvedTheme)
              setTheme(
                themeOptions[(themeOptions.indexOf(resolvedTheme) + 1) % 2],
              );
          }}
        >
          {resolvedTheme}
        </button>
      ) : null}
    </NavBorderBox>
  );
}
