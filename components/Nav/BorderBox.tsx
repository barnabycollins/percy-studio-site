import { useContext } from "react";
import navStyles from "./BorderBox.module.css";

type NavBorderBoxProps = {
  noBorder?: {
    top?: true;
    right?: true;
    bottom?: true;
    left?: true;
  };
};

export function NavBorderBox({
  noBorder,
  children,
}: React.PropsWithChildren<NavBorderBoxProps>) {
  const borderClasses = (["top", "right", "bottom", "left"] as const)
    .filter((s) => noBorder && noBorder[s] === true)
    .map((s) => navStyles[`noBorder-${s}`])
    .join(" ");

  return (
    <div className={`${navStyles.borderBox} ${borderClasses}`}>{children}</div>
  );
}
