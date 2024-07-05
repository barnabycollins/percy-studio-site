import { ThemeProvider } from "next-themes";
import layoutStyles from "./layout.module.css";
import { MainNav } from "../components/Nav";
import "./styles/global.css";
import "./styles/font.css";
import "./styles/variables.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MainNav />
          <div className={layoutStyles.layoutRoot}>
            <div className={layoutStyles.main}>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
