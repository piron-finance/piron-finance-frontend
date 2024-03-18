import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ConvexClientProvider from "../components/providers/convex-provider";
import { Toaster } from "sonner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piron Finance",
  description: "Decentralized Finance for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster position="bottom-center" />
          {children}
          <Analytics />
          <SpeedInsights />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
