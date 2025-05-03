import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/nav/navbar";

export const metadata: Metadata = {
  title: "Aung Sann Phyo",
  description: "Portfolio of Aung Sann Phyo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-20">{children}</div>
      </body>
    </html>
  );
}
