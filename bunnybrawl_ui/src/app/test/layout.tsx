import "../global.css";
import { LangProvider } from "../_providers/LangProvider";
import { ThemeProvider } from "../_providers/ThemeProvider";
import { DisplayProvider } from "../_providers/DisplayProvider";
export const metadata = {
  title: "Bunny Brawl Webview",
  description: "test",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={``}>
      <body className="font-sans antialiased">
        <LangProvider>
          <ThemeProvider>
            <DisplayProvider>{children}</DisplayProvider>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
