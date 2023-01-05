import ghostClient from "@lib/ghost";
import { Inter, JetBrains_Mono } from "@next/font/google";
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
    <html lang="en" className={`${inter.variable} ${jbm.variable} dark`}>
      <head />
      <body className="bg-gray-2 text-gray-11 selection:bg-crimson-9 selection:text-gray-12">
        <Menu items={menuItems} />
        <main className="p-6 flex justify-center text-center">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
