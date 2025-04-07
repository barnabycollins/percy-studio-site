"use client";

import { useTheme } from "next-themes";
import { NavBorderBox } from "./BorderBox";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Flex from "@react-css/flex";

export function NavSidebar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <NavBorderBox noBorder={{ top: true }}>
      <Flex
        column
        justifyEnd
        alignItemsCenter
        style={{
          height: "100%",
          boxSizing: "border-box",
          padding: 10,
        }}
      ></Flex>
    </NavBorderBox>
  );
}
