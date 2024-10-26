import { StaticImageData } from "next/image";

export type EquipmentProps = {
  title: string;

  items: {
    title: string;
    image: StaticImageData;
    subtitle: string;
    blurb: string;
  }[];
};
