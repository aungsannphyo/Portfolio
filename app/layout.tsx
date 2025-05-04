import "./globals.css";
import Navbar from "@/components/nav/navbar";
import { Metadata } from "next";
import { defaultMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.description,
    url: defaultMeta.url,
    images: [
      {
        url: defaultMeta.image,
        width: 1200,
        height: 630,
        alt: defaultMeta.title,
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: defaultMeta.url,
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
