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
import pgdmk6xlr from "./media/pgdmk6xlr.jpg";
import ed300 from "./media/ed300.jpg";
import dbs7200 from "./media/dbs7200.webp";
import peavey1820 from "./media/peavey-1820.webp";
import a100 from "./media/a100.jpg";
import bandit112 from "./media/bandit-112.jpg";

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
      categories: [
        {
          title: "Microphones",
          icon: sm58,
          items: [
            {
              title: "SE 2200a",
              subtitle: "Large-diaphragm condenser mic",
              image: se2200a,
              blurb:
                "A modern classic studio workhorse, with a smooth high end.",
              release: 2004,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Rode NT1-A",
              subtitle: "Large-diaphragm condenser mic",
              image: nt1a,
              blurb:
                "One of the most popular large-diaphragm condensers of all time, with a bright and sibilant high end.",
              release: 2003,
              quantity: 2,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Shure SM58",
              subtitle: "Dynamic vocal mic",
              image: sm58,
              blurb:
                "Possibly the best-selling vocal microphone of all time, renowned for its durability and sound quality.",
              release: 1966,
              quantity: 2,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Shure SM57",
              subtitle: "Dynamic instrument mic",
              image: sm57,
              blurb:
                "Famously used on snare drums, guitar amps, and every US president since 1965.",
              release: 1965,
              quantity: 2,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Shure PGDMK6XLR",
              subtitle: "6-piece drum microphone kit",
              image: pgdmk6xlr,
              blurb:
                "A full set of quality drum mics, which a fantastic sound straight out of the box on our kit.",
              release: 2006,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
          ],
        },
        {
          title: "Instruments",
          icon: bontempi,
          items: [
            {
              title: "Bontempi BN8",
              subtitle: "Reed organ",
              image: bontempi,
              blurb: "A classic banger from the 70s.",
              release: "in the 1970s",
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Arturia MiniBrute",
              subtitle: "Analogue monosynth",
              image: minibrute,
              blurb:
                "An incredibly flexible analogue synthesiser, capable of everything from growling basses to satisfying leads.",
              release: 2012,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Roland XP80",
              subtitle: "Classic workstation keyboard",
              image: xp80,
              blurb:
                "A powerful workstation keyboard, with hundrends of quality patches, a full-featured sequencer and up to 64-note polyphony.",
              release: 1996,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
          ],
        },
        {
          title: "Amplification",
          icon: vt50,
          items: [
            {
              title: "Vox VT50",
              subtitle: "Digital modelling guitar amplifier",
              image: vt50,
              blurb:
                "A digital modelling engine gives this amp a huge range of possible sounds, with 22 amp models and addictively tweakable EQ and effects.",
              release: 2008,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey XR-684F",
              subtitle: "Powered PA mixer",
              image: xr884f,
              blurb:
                "Perfect for band rehearsals, this intuitive yet full-featured mixer drives the main speaker system in our live room.",
              release: 2002,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey ED-300",
              subtitle: "Bass amplifier",
              image: ed300,
              blurb:
                "Originally designed for electronic drum systems, this 1980s amplifier is a popular choice for many of our bass players.",
              release: 1987,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Marshall DBS7200",
              subtitle: "Bass amp head",
              image: dbs7200,
              blurb:
                "A well-respected bass head, with two mixable preamps (valve + solid-state), a carefully-thought-through EQ, and an in-built compressor.",
              release: 1994,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey 1820",
              subtitle: "Bass amp cab",
              image: peavey1820,
              blurb: `With a massive 18" subwoofer driver, this cab is kept connected to the DBS7200. When combined, they can make the whole community centre shake.`,
              release: "in the early 1980s",
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Hartke A100",
              subtitle: "Bass combo amp",
              image: a100,
              blurb:
                "Recognisable for its aluminium cone, which is said to add clarity to your bass sound, this reliable workhorse has a power and flexibility that belies its compact construction.",
              release: 2003,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey Bandit 112",
              subtitle: "Guitar combo amp",
              image: bandit112,
              blurb: "Built upon Peavey's classic Transtube circuit, this amp ",
              release: 1995,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
          ],
        },
      ],
    },
  },
];

export default homepageContent;
