import { ThemeProvider } from "next-themes";
import globalStyles from "./global.module.css";
import layoutStyles from "./layout.module.css";
import { MainNav } from "../components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={globalStyles.body}>
        <ThemeProvider>
          <div className={layoutStyles.layoutRoot}>
            <MainNav />
            <div className={layoutStyles.main}>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
