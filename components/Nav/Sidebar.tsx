"use client";

import { useTheme } from "next-themes";
import { NavBorderBox } from "./BorderBox";

const themeOptions = ["light", "dark"];

export function NavSidebar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <NavBorderBox noBorder={{ top: true }}>
      <div>Left nav here</div>
      {resolvedTheme ? (
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
