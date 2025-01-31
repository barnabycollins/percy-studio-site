import { FormProps } from "./props/Form";
import { EngineersProps } from "./props/Engineers";
import { EquipmentProps } from "./props/Equipment";
import { HeaderProps } from "./props/Header";

export type PageComponentInput = { id: string } & (
  | {
      component: "Header";
      content: HeaderProps;
    }
  | {
      component: "Equipment";
      content: EquipmentProps;
    }
  | {
      component: "Engineers";
      content: EngineersProps;
    }
  | { component: "Form"; content: FormProps }
);
