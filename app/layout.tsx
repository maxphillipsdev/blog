import "./globals.css";
import { Inter, JetBrains_Mono } from "@next/font/google";

// Setup fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jbm.variable} dark`}>
      <head />
      <body className="bg-gray-2 text-gray-11 selection:bg-crimson-9 selection:text-gray-12">
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
