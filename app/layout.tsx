import { ThemeProvider } from "next-themes";
import { MainNav } from "../components/Nav";
import "./styles/global.css";
import "./styles/font.css";
import "./styles/variables.css";
import { Footer } from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider enableSystem={false} defaultTheme="dark">
          <MainNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
