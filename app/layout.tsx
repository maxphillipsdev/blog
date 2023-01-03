"use client";
import "./globals.css";
import { Inter } from "@next/font/google";
import { useState } from "react";

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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <html lang="en" className={`${inter.variable} ${isDarkMode && "dark"}`}>
      <head />
      <body className="bg-gray-1 p-3 text-gray-11 selection:bg-crimson-9 selection:text-gray-12">
        <div>
          <nav>
            <button
              className="rounded-lg bg-gray-3 p-3 text-gray-12 hover:bg-gray-4 active:bg-gray-5"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              Toggle dark mode
            </button>
          </nav>
          <hr className="my-3" />
        </div>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
