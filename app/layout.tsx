import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nerdev.in"),
  title: {
    default: "Nalin Dalal | Full Stack Engineer & Developer",
    template: "%s | Nalin Dalal",
  },
  description:
    "Software engineer, open-source contributor, and builder of things that matter. Full-stack developer specializing in Next.js, Node.js, React Native, and AWS.",
  keywords: [
    "Nalin Dalal",
    "full stack developer",
    "software engineer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "AWS developer",
    "open source contributor",
    "freelance developer",
    "Bhopal developer",
  ],
  authors: [{ name: "Nalin Dalal", url: "https://nerdev.in" }],
  creator: "Nalin Dalal",
  publisher: "Nalin Dalal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nalin Dalal | Full Stack Engineer & Developer",
    description:
      "Software engineer, open-source contributor, and builder of things that matter.",
    url: "https://nerdev.in",
    siteName: "Nalin Dalal",
    images: [
      {
        url: "https://nerdev.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nalin Dalal - Full Stack Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nalin Dalal | Full Stack Engineer & Developer",
    description:
      "Software engineer, open-source contributor, and builder of things that matter.",
    images: [{ url: "https://nerdev.in/og-image.png" }],
    creator: "@nalindalal",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
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
        className={`${inter.variable} antialiased bg-white dark:bg-zinc-900 font-sans`}
      >
        <Navbar />
        <main className="min-h-screen max-w-2xl mx-auto px-4 py-6">
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
