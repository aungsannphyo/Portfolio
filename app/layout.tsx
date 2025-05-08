import "./globals.css";
import Navbar from "@/components/nav/navbar";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // this will create a CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aungsannphyo.me"),
  title: "Aung Sann Phyo – Software Engineer",
  description:
    "Personal portfolio of Aung Sann Phyo, a software engineer skilled in frontend, backend and mobile technologies.",
  openGraph: {
    title: "Aung Sann Phyo – Software Engineer",
    description:
      "Personal portfolio of Aung Sann Phyo, a software engineer skilled in frontend, backend and mobile technologies.",
    url: "https://www.aungsannphyo.me",
    siteName: "Aung Sann Phyo Portfolio",
    images: [
      {
        url: "/profile.jpeg",
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
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white text-black min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-20">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
