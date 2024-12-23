import { Metadata } from "next";
import homepageContent from "../content/homepage";
import { renderPageComponents } from "../components/pageComponents";

export const metadata: Metadata = {
  title: "Percy Community Centre Studio",
};

export default function Page() {
  return renderPageComponents(homepageContent);
}
