"use client";

import Image from "next/image";
import { EquipmentProps } from "../../types/props/Equipment";
import Grid from "@react-css/grid";
import Flex from "@react-css/flex";
import { useCallback, useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export function Equipment({ title, categories }: EquipmentProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const { width } = useWindowDimensions();

  const toggleExpanded = useCallback((itemKey: string) => {
    setExpanded((e) => [
      ...e.filter((e) => e !== itemKey),
      ...(e.includes(itemKey) ? [] : [itemKey]),
    ]);
  }, []);

  const columnCount = Math.min(Math.max(Math.floor((width - 80) / 400), 0), 3);

  return (
    <Flex
      className="equipment"
      flexDirection="column"
      gap="2em"
      style={{ padding: "4em 0", maxWidth: "100vw" }}
    >
      <h2>{title}</h2>
      <Flex className="equipment" flexDirection="column" gap="3em">
        {categories.map((category, categoryIndex) => (
          <Flex key={category.title} flexDirection="column" gap="1em">
            <h3>{category.title}</h3>
            <Grid
              columns={new Array(columnCount)
                .fill(0)
                .map(() => "1fr")
                .join(" ")}
              gap="1em"
            >
              {category.items.map((item, itemIndex) => {
                const itemKey = `${categoryIndex},${itemIndex}`;

                return (
                  <Grid.Item
                    key={item.title}
                    style={{
                      border: `1px solid var(--text-color)`,
                      position: "relative",
                      height: "fit-content",
                    }}
                  >
                    <button
                      style={{ all: "unset", cursor: "pointer", zIndex: 10 }}
                      onClick={() => toggleExpanded(itemKey)}
                      aria-label={`Toggle ${item.title} details visibility`}
                    >
                      <Image
                        src={item.image}
                        alt={`Photo of a ${item.title} (${item.subtitle})`}
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          zIndex: -1,
                        }}
                      />
                      <div
                        style={{
                          padding: "1em 2em",
                          height: "100%",
                          background: "var(--background-transparent75)",
                          zIndex: 1,
                        }}
                      >
                        <h4>
                          {item.title}
                          {item.quantity > 1 ? ` (x${item.quantity})` : ""}
                        </h4>
                        <Flex
                          flexDirection="column"
                          gap={"1em"}
                          style={{
                            height: expanded.includes(itemKey) ? "9em" : 0,
                            overflow: "hidden",
                            transition: "height 0.3s ease",
                          }}
                        >
                          <p style={{ marginTop: "1em", fontStyle: "italic" }}>
                            {item.subtitle}; released {item.release}
                          </p>
                          <p>{item.blurb}</p>
                        </Flex>
                      </div>
                    </button>
                  </Grid.Item>
                );
              })}
            </Grid>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
