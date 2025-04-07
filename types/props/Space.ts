import { StaticImageData } from "next/image";

export type SpaceProps = {
  title: string;
  blurb: string[];
  tabs: {
    id: string;
    title: string;
    images: StaticImageData[];
    blurb: string[];
  }[];
};
