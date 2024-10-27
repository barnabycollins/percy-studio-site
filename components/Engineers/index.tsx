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
    <Flex
      flexDirection="column"
      gap="1em"
      className="engineers"
      style={{ padding: "4em 0" }}
    >
      <h2>{title}</h2>
      <p>{blurb}</p>
      <Flex flexDirection="column" gap="1em" style={{ margin: "1em 0" }}>
        {engineers.map((engineer) => (
          <Flex key={engineer.name} gap="1em">
            <Image
              src={engineer.photo}
              width={300}
              alt={`Photo of ${engineer.name}`}
            />
            <Flex flexDirection="column" gap="1em">
              <h3>{engineer.name}</h3>
              <h4>{engineer.role}</h4>
              <h5>{engineer.skills}</h5>
              <p>{engineer.blurb}</p>
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

              {engineer.socials.map((item) => (
                <a
                  href={item.link}
                  key={`${item.platform}`}
                  aria-label={item.platform}
                >
                  {item.platform}
                  {/* <Image src={item.icon} alt={`${item.platform} logo`}/> */}
                </a>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
