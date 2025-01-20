import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skyeome Artwork",
  description: "Explore the world of Skyeome Artwork, showcasing creative design and interactive UI/UX experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Skyeome Artwork, UI/UX Design, Creative Portfolio, Graphic Design"
        />
        <meta name="author" content="Skyeome" />
        <meta
          name="description"
          content="Explore the world of Skyeome Artwork, showcasing creative design and interactive UI/UX experiences."
        />

        {/* Open Graph (OG) for Social Sharing */}
        <meta property="og:title" content="Skyeome Artwork" />
        <meta
          property="og:description"
          content="Explore creative designs and interactive experiences by Skyeome."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.skyeome-artwork.com" />
        <meta
          property="og:image"
          content="https://www.skyeome-artwork.com/preview-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skyeome Artwork" />
        <meta
          name="twitter:description"
          content="Explore creative designs and interactive experiences by Skyeome."
        />
        <meta
          name="twitter:image"
          content="https://www.skyeome-artwork.com/preview-image.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Skyeome Artwork",
              url: "https://www.skyeome-artwork.com",
              description:
                "Explore creative designs and interactive experiences by Skyeome.",
              author: {
                "@type": "Person",
                name: "Skyeome",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.skyeome-artwork.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
