"use client";

import Flex from "@react-css/flex";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { SpaceProps } from "../../types/props/Space";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-tabs/style/react-tabs.css";
import "react-multi-carousel/lib/styles.css";

export function Space({ title, blurb, tabs }: SpaceProps) {
  return (
    <Flex
      className="equipment"
      flexDirection="column"
      gap="2em"
      style={{ padding: "4em 0", maxWidth: "100vw", background: "#000000" }}
    >
      <h2>{title}</h2>
      {blurb.map((b) => (
        <p key={b}>{b}</p>
      ))}
      <Tabs>
        <TabList>
          {tabs.map((t) => (
            <Tab key={t.id}>{t.title}</Tab>
          ))}
        </TabList>

        {tabs.map((t) => (
          <TabPanel key={t.id}>
            <h3>{t.title}</h3>
            <Carousel
              responsive={{
                superLargeDesktop: {
                  breakpoint: { max: 4000, min: 3000 },
                  items: 5,
                },
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
            >
              {t.images.map((i) => (
                <Image
                  key={i.src}
                  src={i}
                  alt={`Photo of our ${t.title}`}
                  style={{ width: "100%", height: "100%" }}
                />
              ))}
            </Carousel>
            {t.blurb.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </Flex>
  );
}
