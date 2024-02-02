import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className="">
        <div className="flex flex-col ">
          <Header />
          <div className="min-h-screen flex">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
