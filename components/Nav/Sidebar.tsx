"use client";

import { useTheme } from "next-themes";
import { NavBorderBox } from "./BorderBox";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function NavSidebar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <NavBorderBox noBorder={{ top: true }}>
      <div
        style={{
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          padding: 10,
        }}
      >
        <ThemeSwitcher />
      </div>
    </NavBorderBox>
  );
}
