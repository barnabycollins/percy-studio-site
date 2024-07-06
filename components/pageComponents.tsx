import pageLayoutStyles from "./pageLayout.module.css";
import { PageComponentInput } from "../types/content";
import { Header } from "./Header";
import { Fragment } from "react";

export const pageComponentMapping = {
  Header: { component: Header, config: { contain: false, padIfAtTop: false } },
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
        const { component, config } = pageComponentMapping[componentName];

        let nodeToReturn = component({ ...content });

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
