import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nalin.nerdev.in"),
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
    "open to full-time roles",
    "Bhopal developer",
  ],
  authors: [{ name: "Nalin Dalal", url: "https://nalin.nerdev.in" }],
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
    url: "https://nalin.nerdev.in",
    siteName: "Nalin Dalal",
    images: [
      {
        url: "https://nalin.nerdev.in/og-image.png",
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
    images: [{ url: "https://nalin.nerdev.in/og-image.png" }],
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
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased font-body bg-bg-primary text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen max-w-4xl mx-auto px-6 py-8">
          {children}
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
