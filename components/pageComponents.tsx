import pageLayoutStyles from "./pageLayout.module.css";
import { PageComponentInput } from "../types/content";
import { Header } from "./Header";
import { Fragment } from "react";
import { Equipment } from "./Equipment";
import { Engineers } from "./Engineers";
import Image from "next/image";
import { BookingForm } from "./BookingForm";

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
  BookingForm: {
    component: BookingForm,
    config: { contain: true, padIfAtTop: true },
  },
} as Record<
  PageComponentInput["component"],
  {
    component: React.FC<PageComponentInput["content"]>;
    config: { contain: boolean; padIfAtTop: boolean };
  }
>;

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
                      zIndex: -1,
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div
                    style={{
                      background: "var(--background-transparent75)",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      zIndex: 0,
                    }}
                  />
                </>
              ) : null}
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
