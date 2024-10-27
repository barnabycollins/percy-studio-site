"use client";

import Image from "next/image";
import Flex from "@react-css/flex";
import { EngineersProps } from "../../types/props/Engineers";

export function Engineers({
  title,
  blurb,
  engineers,
  portfolioTitle,
}: EngineersProps) {
  return (
    <div className="engineers">
      <Flex flexDirection="column" gap="2em" style={{ padding: "4em 0" }}>
        <Flex
          flexDirection="column"
          gap="0.5em"
          style={{
            border: "1px solid var(--text-color)",
            boxSizing: "border-box",
            background: "var(--background-transparent75",
            padding: "1em",
          }}
        >
          <h2>{title}</h2>
          <p>{blurb}</p>
        </Flex>
        {engineers.map((engineer) => (
          <Flex key={engineer.name} gap="1em">
            <Image
              src={engineer.photo}
              width={300}
              alt={`Photo of ${engineer.name}`}
              style={{
                border: "1px solid var(--text-color)",
                boxSizing: "border-box",
              }}
            />
            <Flex
              flexDirection="column"
              gap="1em"
              justifyCenter
              style={{
                border: "1px solid var(--text-color)",
                boxSizing: "border-box",
                background: "var(--background-transparent75)",
                padding: "1em",
              }}
            >
              <Flex justifySpaceBetween alignItemsCenter>
                <h3>{engineer.name}</h3>
                <Flex gap="1em">
                  {engineer.socials.map((item) => (
                    <a
                      href={item.link}
                      key={`${item.platform} (${item.link})`}
                      aria-label={item.platform}
                    >
                      {item.platform === "other" ? item.label : item.platform}
                      {/* <Image src={item.icon} alt={`${item.platform} logo`}/> */}
                    </a>
                  ))}
                </Flex>
              </Flex>
              <h4>{engineer.role}</h4>
              <h5>{engineer.skills.join(", ")}</h5>
              {engineer.blurb.split("<br>").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {engineer.portfolio.length > 0 && <h4>{portfolioTitle}</h4>}
              {engineer.portfolio.map((item) => (
                <a href={item.link} aria-label={item.label} key={item.label}>
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={`Image relating to ${item.label}`}
                    />
                  )}
                  {item.label}
                </a>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </div>
  );
}
