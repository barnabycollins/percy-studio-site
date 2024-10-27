import { StaticImageData } from "next/image";

export type EquipmentProps = {
  title: string;

  categories: {
    title: string;
    icon: StaticImageData;
    items: {
      title: string;
      image: StaticImageData;
      release: number | string;
      quantity: number;
      availableWithRehearsalBooking: boolean;
      subtitle: string;
      blurb: string;
    }[];
  }[];
};
