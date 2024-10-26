import { PageComponentInput } from "../types/content";
import bontempi from "./media/bontempi-bn8.jpg";
import se2200a from "./media/se-2200a.jpg";
import nt1a from "./media/rode-nt1a.jpg";
import sm58 from "./media/shure-sm58.jpg";
import sm57 from "./media/shure-sm57.jpg";
import minibrute from "./media/arturia-minibrute.jpg";
import vt50 from "./media/vox-vt50.jpg";
import xp80 from "./media/roland-xp80.jpg";
import xr884f from "./media/peavey-xr684f.jpg";

const homepageContent: PageComponentInput[] = [
  {
    component: "Header",
    content: {
      title: "henlo",
      subtitle: "yes",
      videoUrl: "https://percystudiobath.github.io/media/montage.webm",
    },
  },
  {
    component: "Equipment",
    content: {
      title: "yeet",
      items: [
        {
          title: "Bontempi BN8",
          subtitle: "Reed organ",
          image: bontempi,
          blurb: "A classic banger from the 70s.",
        },
        {
          title: "SE 2200a",
          subtitle: "Large-diaphragm condenser mic",
          image: se2200a,
          blurb: "A modern classic studio workhorse, with a smooth high end.",
        },
        {
          title: "Rode NT1-A",
          subtitle: "Large-diaphragm condenser mic",
          image: nt1a,
          blurb:
            "One of the most popular large-diaphragm condensers of all time, with a bright and sibilant high end.",
        },
        {
          title: "Shure SM58",
          subtitle: "Dynamic vocal mic",
          image: sm58,
          blurb:
            "Possibly the best-selling vocal microphone of all time, renowned for its durability and sound quality.",
        },
        {
          title: "Shure SM57",
          subtitle: "Dynamic instrument mic",
          image: sm57,
          blurb:
            "Famously used on snare drums, guitar amps, and every US president since 1965.",
        },
        {
          title: "Arturia MiniBrute",
          subtitle: "Analogue monosynth",
          image: minibrute,
          blurb:
            "An incredibly flexible analogue synthesiser, capable of everything from growling basses to satisfying leads.",
        },
        {
          title: "Vox VT50",
          subtitle: "Digital modelling guitar amplifier",
          image: vt50,
          blurb:
            "A digital modelling engine gives this amp a huge range of possible sounds, with 22 amp models and addictively tweakable EQ and effects.",
        },
        {
          title: "Roland XP80",
          subtitle: "Classic workstation keyboard",
          image: xp80,
          blurb:
            "An incredibly deep keyboard, with hundrends of quality patches, a full-featured sequencer and up to 64-note polyphony.",
        },
        {
          title: "Peavey XR-684F",
          subtitle: "Powered PA mixer",
          image: xr884f,
          blurb:
            "Perfect for band rehearsals, this simple yet full-featured amplifier drives the main speaker system in our live room.",
        },
      ],
    },
  },
];

export default homepageContent;
