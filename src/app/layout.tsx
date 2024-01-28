import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";

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
    <html lang="en">
      <body className="h-screen w-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
