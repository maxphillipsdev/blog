import "./globals.css";
import { Inter } from "@next/font/google";
import Navigation from "../components/Navigation";

// Setup fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head />
      <body className="bg-gray-1 p-3 text-gray-11 selection:bg-crimson-9 selection:text-gray-12">
        <Navigation />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
