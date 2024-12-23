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
import x32 from "./media/x32.png";
import ec444 from "./media/ec-444.jpg";
import shredmaster from "./media/shredmaster.jpg";
import mike from "./media/mike.png";
import barnaby from "./media/barnaby.png";
import engineerStock from "./media/engineer-stock.webp";
import fadersStock from "./media/faders.jpg";
import stratocaster from "./media/stratocaster.webp";
import rochester from "./media/rochester.jpg";
import oxygen25 from "./media/oxygen25.jpg";
import keystudio from "./media/keystudio.jpg";
import hr824mk2 from "./media/mackie-hr824-mk2.jpg";
import dt770pro from "./media/dt770pro.webp";
import hd280pro from "./media/hd280pro.avif";
import hd202 from "./media/hd202.jpg";
import dt100 from "./media/dt100.jpg";
import di800 from "./media/di800.webp";
import ha8000 from "./media/ha8000.jpg";
import blazer from "./media/blazer bass.webp";
import focus111s from "./media/focus 111s.webp";
import conrad from "./media/conrad.jpg";

const homepageContent: PageComponentInput[] = [
  {
    component: "Header",
    content: {
      title: "Title",
      subtitle: "Subtitle",
      videoUrl: "https://percystudiobath.github.io/media/montage.webm",
    },
  },
  {
    component: "Equipment",
    content: {
      title: "Equipment",
      background: fadersStock,
      categories: [
        {
          title: "Microphones",
          icon: sm58,
          items: [
            {
              title: "sE Electronics 2200a",
              subtitle: "Large-diaphragm condenser mic",
              image: se2200a,
              blurb:
                "A modern classic microphone, based on sE's first big success. Built for vocals, but great for a range of uses with a silky smooth high end.",
              release: 2004,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Rode NT1-A",
              subtitle: "Large-diaphragm condenser mic",
              image: nt1a,
              blurb:
                "One of the most popular large-diaphragm condensers of all time, with a bright and sibilant sound and a very low self-noise characteristic.",
              release: 2003,
              quantity: 2,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Shure SM57",
              subtitle: "Dynamic instrument mic",
              image: sm57,
              blurb:
                "Groundbreaking in 1965 and still well-loved for high-SPL instruments today. Famously used on snare drums, guitar amps, and every US president since 1965.",
              release: 1965,
              quantity: 2,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Shure SM58",
              subtitle: "Dynamic vocal mic",
              image: sm58,
              blurb:
                "Based on the SM57, this is possibly the best-selling vocal microphone of all time. Renowned for its durability, reliability and sound quality.",
              release: 1966,
              quantity: 2,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Shure PGDMK6-XLR",
              subtitle: "6-piece drum microphone kit",
              image: pgdmk6xlr,
              blurb:
                "A full set of quality drum mics, with a fantastic sound straight out of the box on our kit. The PG52 kick mic and PG81 small-diaphragm condensers are also useful in their own right.",
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
              title: "Squier Stratocaster",
              subtitle: "Electric guitar",
              image: stratocaster,
              blurb:
                "An original 'Made in Japan' Squier, built in the mid 80s to serve as a reissue of the classic 50s and 60s Fender Strats.",
              release: 1982,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Ibanez Blazer Bass",
              subtitle: "Electric Bass",
              image: blazer,
              blurb:
                "An original Blazer, built in September 1982 and carefully looked after since then. These basses are known to keep going forever, and to be incredibly versatile with a deliciously rich tone.",
              release: 1981,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Kramer Focus 111S (left-handed)",
              subtitle: "Left-handed strat-style electric",
              image: focus111s,
              blurb:
                "The Focus 111S is generally agreed to be a great entry-level strat, and ours is in very good condition, having been donated by a caring owner.",
              release: 1987,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Arturia MiniBrute",
              subtitle: "Analogue monosynth",
              image: minibrute,
              blurb:
                "A powerful analogue synthesiser, capable of everything from growling basses to clean sine leads. An LFO, two envelopes and some unique tools give users a lot of sound-shaping options.",
              release: 2012,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Bontempi BN8",
              subtitle: "Reed organ",
              image: bontempi,
              blurb:
                "Although not always entirely in tune, this classic from 1980s European instution Bontempi has a quirky design and is a great source of inspiration!",
              release: "in the 1970s",
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Roland XP-80",
              subtitle: "Classic arranger keyboard",
              image: xp80,
              blurb:
                "A powerful workstation / arranger keyboard from 1996, with hundreds of classic Roland patches, a full-featured sequencer and up to 64-note polyphony. Floppy disks not included.",
              release: 1996,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Conrad Stratocaster",
              subtitle: "Entry-level electric guitar",
              image: conrad,
              blurb:
                "A basic but well-built strat. The Conrad definitely plays second fiddle to our Squier strat, but it's still got a solid tone and is great for rehearsals.",
              release: "unknown",
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Rochester A1 Cadete",
              subtitle: "Entry-level acoustic guitar",
              image: rochester,
              blurb:
                "Although the A1 Cadete is a relatively basic acoustic, ours has a lovely rose drawing on it from a previous owner which adds at least 70% more vibe.",
              release: "unknown",
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
                "A comprehensive digital modelling engine gives this amp a huge range of possible sounds, with 22 realistic amp models and addictively tweakable effects.",
              release: 2008,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey XR-684F",
              subtitle: "Powered PA mixer",
              image: xr884f,
              blurb:
                "Features such as feedback suppression, graphic EQ and straightforward digital FX make this mixer perfect for band rehearsals. We use this mixer to run the main PA in our live room.",
              release: 2002,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey ED-300",
              subtitle: "Bass amplifier",
              image: ed300,
              blurb:
                "Originally designed for electronic drum systems in the 1980s, this hefty amplifier has a neutral sound signature and is a popular choice for many of our bass players.",
              release: 1987,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Marshall DBS7200",
              subtitle: "Bass amp head",
              image: dbs7200,
              blurb:
                "A well-respected and powerful bass head, with two mixable preamps (valve + solid-state), and an in-built compressor. The in-built EQ was clearly designed by bassists, for bassists.",
              release: 1994,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Peavey 1820",
              subtitle: "Bass amp cab",
              image: peavey1820,
              blurb: `With a massive 18" 'Black Widow' driver, this huge and heavy cab is usually connected to the DBS7200. When they're in use, the whole community centre knows about it.`,
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
              blurb:
                "The first amp to boast Peavey's classic Transtube circuit, this analogue amp is known for a great clean sound as well as a 'T-Dynamics' control that adds a bit of tube-like grit.",
              release: 1995,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
          ],
        },
        {
          title: "Recording and effects",
          icon: x32,
          items: [
            {
              title: "Behringer X32",
              subtitle: "Digital mixer",
              image: x32,
              blurb:
                "A modern classic mixer with very clean preamps and a great interface. The X32 allows us to record up to 32 channels simultaneously, and produce up to 8 separate wirelessly-controlled monitor mixes.",
              release: 2012,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Maplin Echorder EC444",
              subtitle: "Analogue delay unit",
              image: ec444,
              blurb:
                "Affectionately nicknamed 'the source of existential dread' at our youth group, this delay can produce beautiful analogue soundscapes as well as gritty self-oscillation when feedback is turned above 100%.",
              release: "in the 1980s",
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Marshall Shredmaster",
              subtitle: "Classic distortion pedal",
              image: shredmaster,
              blurb:
                "Famously used by Radiohead's Jonny Greenwood, this drive pedal is capable of dark, gentle saturation as well as the full-blown distorted chaos implied by its name.",
              release: 1991,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Behringer DI800",
              subtitle: "8-channel DI",
              image: di800,
              blurb:
                "Kept in our live room, the DI800 is perfect for recording instruments directly, from stringed pickup instruments to keyboards and other unbalanced line level signals.",
              release: 2006,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
          ],
        },
        {
          title: "Production and Monitoring",
          icon: x32,
          items: [
            {
              title: "M-Audio Oxygen 25 Mk IV",
              subtitle: "Multifunctional MIDI controller",
              image: oxygen25,
              blurb:
                "A modern and full-featured MIDI controller, complete with transport buttons, 8 knobs and 8 drum pads.",
              release: 2017,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
            {
              title: "M-Audio Keystudio",
              subtitle: "Large MIDI keyboard",
              image: keystudio,
              blurb:
                "This is the main keyboard in our control room, with ample range to track in more complex parts in Logic.",
              release: 2008,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Mackie HR824 Mk2",
              subtitle: "Studio monitor speaker",
              image: hr824mk2,
              blurb:
                "These chunky monitors are the main reference speakers in our control room. They've been calibrated with Sonarworks SoundID Reference to ensure accuracy in our particular room.",
              release: 2007,
              quantity: 2,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Beyerdynamic DT 770 Pro 250 Ohm",
              subtitle: "Closed-back studio headphones",
              image: dt770pro,
              blurb:
                "Unchanged for 40 years, these iconic headphones are the top-selling studio headphones for a reason. They are particularly well-known for their bright and detailed high-end.",
              release: 1985,
              quantity: 1,
              availableWithRehearsalBooking: false,
            },
            {
              title: "Sennheiser HD 280 Pro",
              subtitle: "Studio monitoring headphones",
              image: hd280pro,
              blurb:
                "These quality headphones are our go-to for tracking. They have great isolation, accurate sound, and they are more or less indestructible.",
              release: 2003,
              quantity: 6,
              availableWithRehearsalBooking: true,
            },
            {
              title: "Sennheiser HD 202",
              subtitle: "Monitoring headphones",
              image: hd202,
              blurb:
                "These headphones are a little lighter on the head than our other monitoring options, whilst still retaining good sound quality and an over-ear configuration.",
              release: 2006,
              quantity: 4,
              availableWithRehearsalBooking: true,
            },
            // {
            //   title: "Sennheiser HD 201",
            //   subtitle: "Monitoring headphones",
            //   image: shredmaster,
            //   blurb: "headphones innit",
            //   release: 2059,
            //   quantity: 1,
            //   availableWithRehearsalBooking: true,
            // },
            {
              title: "Beyerdynamic DT 100",
              subtitle: "Studio monitoring headphones",
              image: dt100,
              blurb:
                "A classic standby in recording studios worldwide, the DT 100 and its variations have a proven track record and have been used by many of the world's top acts since the time of the Beatles.",
              release: 1960,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
            // {
            //   title: "Altai HS-400",
            //   subtitle: "Really epic and good quality headphones",
            //   image: shredmaster,
            //   blurb: "Hand built by silent monks in German monasteries",
            //   release: 2006,
            //   quantity: 2,
            //   availableWithRehearsalBooking: true,
            // },
            {
              title: "Behringer HA8000",
              subtitle: "8-channel headphone amplifier",
              image: ha8000,
              blurb:
                "Our HA8000 lives in our live room, where we use it to send separate monitor mixes for up to 8 performers in parallel.",
              release: 2007,
              quantity: 1,
              availableWithRehearsalBooking: true,
            },
          ],
        },
      ],
    },
  },
  {
    component: "Engineers",
    content: {
      title: "Engineers",
      background: engineerStock,
      blurb:
        "We have a number of highly-skilled in-house engineers, who are mostly cool dudes.",
      portfolioTitle: "Projects",
      engineers: [
        {
          name: "Mike Smith",
          photo: mike,
          role: "Studio Manager",
          skills: [
            "Music Production",
            "Sound Design",
            "Mixing",
            "Mastering",
            "Radio",
          ],
          blurb: `Mike has been a fixture of the Bath music scene for over 25 years as a singer, producer, DJ and promoter
            across the punk and electronic music subcultures. He has decades of gigs, tours and festivals across the UK,
            Europe and America under his belt, plus nearly a dozen music collectives and bands.
            <br>
            He then moved into production, completing two degrees in Creative Music Technology and Sound Production at
            Bath Spa University and working on a number of ambitious projects both on his own and with other collaborators.
            He also has been heavily involved in the local Frome FM radio station for over 10 years, and still holds a monthly
            slot with his show, Basement 7.`,
          portfolio: [
            {
              label: "Basement 7",
              link: "https://www.frome.fm/programmes/basement-7",
            },
          ],
          socials: [
            {
              platform: "soundcloud",
              link: "https://soundcloud.com/mazysmith1",
            },
            {
              platform: "soundcloud",
              link: "https://soundcloud.com/general-e-mixes",
            },
            {
              platform: "other",
              label: "Website",
              link: "https://generalesmith.blogspot.com",
            },
          ],
        },
        {
          name: "Barnaby Collins",
          photo: barnaby,
          role: "Volunteer Assistant Manager",
          skills: [
            "Acoustic Instruments",
            "Live Sound",
            "Composition",
            "Electronics & Repair",
          ],
          blurb: `Barnaby's passion for music began with deafening his parents with a recorder at the age of 6. He has
            played clarinet for over 15 years, has been teaching himself drums for 7 years, started DJing 6 years ago
            and spent three years building a reputation as Durham's best live sound engineer whilst at university.
            He now plays clarinet, bass clarinet, drums, Akai EWI and occasionally fiddles about on his Novation Circuit.
            <br>
            Having moved to Bath with his partner, he is now co-running the studio with Mike around his day job as a
            software engineer. His live sound skills complement Mike's production abilities in the studio, and his passion
            for DIY and repair helps keep everything in working order for the studio's users.
            <br>
            He is also involved with a number of local orchestras and charities, including producing 3-4 arrangements per
            year and managing recordings for the local BathTub Orchestra.`,
          portfolio: [
            {
              label:
                "BathTub Orchestra at Christchurch Bath - Recording & Production",
              link: "https://youtu.be/2I_Pz1UG8u0",
            },
            {
              label: "Novation Circuit one-take performance - 'Solitude'",
              link: "https://youtu.be/OP8WOKaNxQw?t=1016",
            },
            {
              label: "Orchestral arrangements",
              link: "https://musescore.com/user/6601531",
            },
          ],
          socials: [
            {
              platform: "mixcloud",
              link: "https://www.mixcloud.com/barnabycollins",
            },
          ],
        },
      ],
    },
  },
];

export default homepageContent;
