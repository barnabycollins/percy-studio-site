import { StaticImageData } from "next/image";

export type EngineersProps = {
  title: string;
  blurb: string;
  portfolioTitle: string;

  engineers: {
    name: string;
    photo: StaticImageData;
    role: string;
    skills: string;
    blurb: string;
    portfolio: {
      label: string;
      link: string;
      icon?: StaticImageData;
    }[];
    socials: {
      link: string;
      platform:
        | "soundcloud"
        | "mixcloud"
        | "bandcamp"
        | "facebook"
        | "instagram"
        | "musescore"
        | "website";
    }[];
  }[];
};
