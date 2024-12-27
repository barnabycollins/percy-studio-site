"use client";

import Flex from "@react-css/flex";
import pageLayoutStyles from "../pageLayout.module.css";

export function Footer() {
  return (
    <div id="footer">
      <div
        className={pageLayoutStyles.containerParent}
        style={{ position: "relative" }}
      >
        <Flex
          alignItemsCenter
          wrap
          columnGap="20px"
          rowGap="20px"
          className={pageLayoutStyles.container}
          style={{ zIndex: 1, margin: "20px 0" }}
        >
          <Flex.Item grow={2} shrink={0}>
            <Flex column gap="5px">
              <div id="contact-email">
                <a href="mailto:studio@percycentre.org.uk">
                  studio@percycentre.org.uk
                </a>
              </div>
              <div id="contact-phone">01225 423014 • 07366 331313</div>
              <div id="charity-number">
                Charity no.{" "}
                <a
                  href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/4043982"
                  target="_blank"
                >
                  1127986
                </a>
              </div>
              <div id="company-number">
                Company no.{" "}
                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/06769345"
                  target="_blank"
                >
                  06769345
                </a>
              </div>
            </Flex>
          </Flex.Item>
          <Flex.Item grow={1} shrink={0}>
            <Flex column id="footer-address" gap="3px">
              {[
                "Percy Studio",
                "Percy Community Centre",
                "New King Street",
                "Bath, Somerset",
                "BA1 2BN",
              ].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </Flex>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
}
