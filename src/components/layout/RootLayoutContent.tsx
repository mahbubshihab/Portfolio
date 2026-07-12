"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useBackground } from "@/context/BackgroundContext";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { backgroundClass } = useBackground();

  return (
    <html
      lang="en"
      className={`${backgroundClass} ${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <BackgroundGlow />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
