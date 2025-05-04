import "./globals.css";
import { defaultMeta } from "@/lib/seo";
import Navbar from "@/components/nav/navbar";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={defaultMeta.description} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:url" content={defaultMeta.url} />
        <meta property="og:image" content={defaultMeta.image} />
        <meta property="og:type" content={defaultMeta.type} />
        <link rel="canonical" href={defaultMeta.url} />
      </Head>
      <body className="bg-white text-black min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-20">{children}</div>
      </body>
    </html>
  );
}
