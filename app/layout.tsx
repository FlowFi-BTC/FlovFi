import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowfi-btc.vercel.app"),
  title: {
    default: "FlovFi — Bitcoin-native receivables financing",
    template: "%s · FlovFi",
  },
  description:
    "FlowFi BTC lets a verified business register a real trade receivable and receive sBTC financing from a capital provider through two non-custodial Clarity contracts on Stacks.",
  keywords: [
    "FlowFi BTC",
    "FlovFi",
    "sBTC",
    "Stacks",
    "receivables financing",
    "Bitcoin",
    "Clarity",
    "trade finance",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "FlovFi",
    title: "FlovFi — Bitcoin-native receivables financing",
    description:
      "A verified business registers a real receivable. A capital provider funds it with sBTC. Two Clarity contracts hold the boundary.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlovFi — Bitcoin-native receivables financing",
    description:
      "Bitcoin capital for real-world trade, settled on Stacks with sBTC.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-ink text-foreground">
        {children}
      </body>
    </html>
  );
}
