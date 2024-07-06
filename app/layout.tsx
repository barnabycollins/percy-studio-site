import { ThemeProvider } from "next-themes";
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
