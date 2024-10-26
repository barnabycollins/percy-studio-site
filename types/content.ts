import { EquipmentProps } from "./props/Equipment";
import { HeaderProps } from "./props/Header";

export type PageComponentInput =
  | {
      component: "Header";
      content: HeaderProps;
    }
  | {
      component: "Equipment";
      content: EquipmentProps;
    };
