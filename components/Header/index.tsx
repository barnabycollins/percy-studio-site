"use client";

import Flex from "@react-css/flex";
import pageLayoutStyles from "../pageLayout.module.css";
import { HeaderProps } from "../../types/props/Header";

export function Header({ title, subtitle, videoUrl }: HeaderProps) {
  return (
    <div
      className="header"
      style={{
        height: "60vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -10,
          pointerEvents: "none",
        }}
      >
        <video
          src={videoUrl}
          autoPlay
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className={pageLayoutStyles.containerParent}
        style={{
          background: "var(--background-semitransparent)",
          height: "100%",
        }}
      >
        <div
          className={`${pageLayoutStyles.container} ${pageLayoutStyles.topMargin}`}
        >
          <Flex
            column
            alignItemsCenter
            style={{ width: "100%", height: "100%", marginTop: "20vh" }}
          >
            <h1 style={{ textAlign: "center", fontSize: 40, marginBottom: 20 }}>
              {title}
            </h1>
            <h2 style={{ textAlign: "center", fontSize: 28 }}>{subtitle}</h2>
          </Flex>
        </div>
      </div>
    </div>
  );
}
