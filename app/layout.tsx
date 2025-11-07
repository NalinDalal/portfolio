import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

// (Optional) import only if you installed them successfully
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://nalin.to"), // or your chosen domain
  title: "Nalin Dalal",
  description:
    "Software engineer, open-source contributor, and builder of things that matter.",
  openGraph: {
    title: "Nalin Dalal",
    description:
      "Software engineer, open-source contributor, and builder of things that matter.",
    url: "https://nalin.to",
    siteName: "Nalin Dalal",
    images: [{ url: "/og-image.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nalin Dalal",
    description:
      "Software engineer, open-source contributor, and builder of things that matter.",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white dark:bg-zinc-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-900`}
      >
        <main className="border-2 border-zinc-200 dark:border-zinc-800 min-h-screen max-w-2xl mx-auto my-1 px-4 py-4">
          {children}
          {/* Uncomment if you installed these */}
          {/* <SpeedInsights /> */}
          {/* <Analytics /> */}
        </main>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nczs4rjeot");
          `}
        </Script>

        {/* Ahrefs */}
        <Script
          id="ahrefs"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="KrVNPks4a/m70wrtIgrG/g"
          async
        />
      </body>
    </html>
  );
}
