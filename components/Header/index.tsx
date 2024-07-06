import pageLayoutStyles from "../pageLayout.module.css";
import { HeaderProps } from "../../types/props/Header";

export function Header({ title, subtitle, videoUrl }: HeaderProps) {
  return (
    <div
      className="header"
      style={{
        height: "100vh",
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
        className={`${pageLayoutStyles.containerParent} ${pageLayoutStyles.topMargin}`}
        style={{
          background: "var(--background-semitransparent)",
          height: "100%",
        }}
      >
        <div className={pageLayoutStyles.container}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </div>
  );
}
