import "./globals.css";
import Navbar from "@/components/nav/navbar";
import { Metadata } from "next";

export const defaultMeta: Metadata = {
  title: "Aung Sann Phyo – Software Engineer",
  description:
    "Personal portfolio of Aung Sann Phyo, a software engineer skilled in frontend, backend and mobile technologies.",
  openGraph: {
    title: "Aung San Xallet – Software Engineer",
    description:
      "Personal portfolio of Aung Sann Phyo, a software engineer skilled in frontend, backend and mobile technologies.",
    url: "https://www.aungsannphyo.me",
    siteName: "Aung Sann Phyo Portfolio",
    images: [
      {
        url: "https://www.aungsannphyo.me/profile.jpeg",
        width: 1200,
        height: 627,
        alt: "Aung Sann Phyo – Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aung Sann Phyo – Software Engineer",
    description:
      "Personal portfolio of Aung Sann Phyo, a software engineer skilled in frontend, backend and mobile technologies.",
    images: ["https://www.aungsannphyo.me/profile.jpeg"],
  },
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
