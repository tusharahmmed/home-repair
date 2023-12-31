/* eslint-disable @next/next/no-sync-scripts */
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Providers from "@/lib/Providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Home Repair Bangladesh",
  description: "Home Repair Bangladesh",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
          <script src="https://cdn.tailwindcss.com"></script>
        </body>
      </html>
    </Providers>
  );
}
