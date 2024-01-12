import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "MegaLan",
  description: "Main Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex h-screen w-screen flex-col">
      <body>
      <header className="bg-gray-800 p-4 text-white fixed top-0 w-screen">
        <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
