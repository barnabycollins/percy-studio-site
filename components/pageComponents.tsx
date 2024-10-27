import pageLayoutStyles from "./pageLayout.module.css";
import { PageComponentInput } from "../types/content";
import { Header } from "./Header";
import { Fragment } from "react";
import { Equipment } from "./Equipment";
import { Engineers } from "./Engineers";

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
} as Record<
  PageComponentInput["component"],
  {
    component: React.FC<PageComponentInput["content"]>;
    config: { contain: boolean; padIfAtTop: boolean };
  }
>;

export function renderPageComponents(components: PageComponentInput[]) {
  return (
    <main>
      {components.map(({ component: componentName, content }, index) => {
        const { component: Component, config } =
          pageComponentMapping[componentName];

        let nodeToReturn = <Component {...content} />;

        if (config.contain) {
          nodeToReturn = (
            <div className={pageLayoutStyles.containerParent}>
              <div className={pageLayoutStyles.container}>{nodeToReturn}</div>
            </div>
          );
        }

        if (index === 0 && config.padIfAtTop) {
          nodeToReturn = (
            <div className={pageLayoutStyles.topMargin}>{nodeToReturn}</div>
          );
        }

        return (
          <Fragment key={`${componentName}-${index}`}>{nodeToReturn}</Fragment>
        );
      })}
    </main>
  );
}
