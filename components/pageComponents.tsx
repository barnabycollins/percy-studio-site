import pageLayoutStyles from "./pageLayout.module.css";
import { PageComponentInput } from "../types/content";
import { Header } from "./Header";
import { CSSProperties, Fragment } from "react";
import { Equipment } from "./Equipment";
import { Engineers } from "./Engineers";
import Image from "next/image";
import { Form } from "./Form";
import { Space } from "./Space";

export const pageComponentMapping = {
  Header: { component: Header, config: { contain: false, padIfAtTop: false } },
  Equipment: {
    component: Equipment,
    config: { contain: true, padIfAtTop: true },
  },
  Engineers: {
    component: Engineers,
    config: { contain: true, padIfAtTop: true },
  },
  Form: {
    component: Form,
    config: { contain: true, padIfAtTop: true },
  },
  Space: {
    component: Space,
    config: {
      contain: true,
      padIfAtTop: true,
    },
  },
} as Record<
  PageComponentInput["component"],
  {
    component: React.FC<PageComponentInput["content"]>;
    config: { contain: boolean; padIfAtTop: boolean };
  }
>;

const bgStyles: CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export function renderPageComponents(components: PageComponentInput[]) {
  return (
    <main id="top">
      {components.map(({ component: componentName, content, id }, index) => {
        const { component: Component, config } =
          pageComponentMapping[componentName];

        let nodeToReturn = <Component {...content} />;

        if (config.contain) {
          nodeToReturn = (
            <div
              className={pageLayoutStyles.containerParent}
              style={{ position: "relative" }}
            >
              {"background" in content && content.background ? (
                <>
                  <Image
                    src={content.background}
                    alt="Background image"
                    style={{
                      ...bgStyles,
                      zIndex: -1,
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div
                    style={{
                      ...bgStyles,
                      background: "var(--background-transparent75)",
                      zIndex: 0,
                    }}
                  />
                </>
              ) : (
                <div style={{ ...bgStyles, background: "var(--background)" }} />
              )}
              <div className={pageLayoutStyles.container} style={{ zIndex: 1 }}>
                {nodeToReturn}
              </div>
            </div>
          );
        }

        if (index === 0 && config.padIfAtTop) {
          nodeToReturn = (
            <div className={pageLayoutStyles.topMargin}>{nodeToReturn}</div>
          );
        }

        return (
          <div id={id} key={`${componentName}-${id}`}>
            {nodeToReturn}
          </div>
        );
      })}
    </main>
  );
}
