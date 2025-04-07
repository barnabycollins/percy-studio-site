"use client";

import Flex from "@react-css/flex";
import { NavBorderBox } from "./BorderBox";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { ThemeSwitcher } from "./ThemeSwitcher";

type NavConfig = {
  label: string;
  link: string;
}[];

const navConfig: NavConfig = [
  {
    label: "Equipment",
    link: "#equipment",
  },
  {
    label: "Engineers",
    link: "#engineers",
  },
];

export function TopNav() {
  const { width } = useWindowDimensions();

  return (
    <NavBorderBox noBorder={{ left: true, right: true }}>
      <Flex
        justifySpaceBetween
        gap="10px"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Flex
          alignItemsCenter
          justifyCenter
          gap="10px"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          {navConfig.map((item) => (
            <a href={item.link} key={item.link} style={{ fontSize: 18 }}>
              {item.label}
            </a>
          ))}
        </Flex>
      </Flex>
    </NavBorderBox>
  );
}
