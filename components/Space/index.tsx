"use client";

import Flex from "@react-css/flex";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { SpaceProps } from "../../types/props/Space";
import Image from "next/image";

export function Space({ title, blurb, tabs }: SpaceProps) {
  return (
    <Flex
      className="equipment"
      flexDirection="column"
      gap="2em"
      style={{ padding: "4em 0", maxWidth: "100vw" }}
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
            {t.images.map((i) => (
              <Image
                key={i.src}
                src={i}
                alt={`Photo of our ${t.title}`}
                style={{ height: "20vh", width: "100px" }}
              />
            ))}
            {t.blurb.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </Flex>
  );
}
