import Flex from "@react-css/flex";
import { NavBorderBox } from "./BorderBox";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
          <div>egg</div>
          <div>egg2</div>
        </Flex>
        {width <= 1400 && <ThemeSwitcher />}
      </Flex>
    </NavBorderBox>
  );
}
