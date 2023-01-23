import ghostClient from "@lib/ghost";
import { Inter, JetBrains_Mono } from "@next/font/google";
import { DarkModeToggle } from "./DarkModeButton";
import "./globals.css";
import { Menu } from "./Menu";

// Setup fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { navigation: menuItems } = await ghostClient.settings.browse();
  return (
    <html lang="en" className={`${inter.variable} ${jbm.variable}`}>
      <head />
      <body className="bg-gray-1 text-gray-11 selection:bg-crimson-9 selection:text-gray-12">
        <Menu items={menuItems} />
        <div className="w-full flex p-3 justify-end">
          <DarkModeToggle />
        </div>
        <main className="md:px-24 lg:px-80">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
