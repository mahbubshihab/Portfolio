import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundProvider } from "@/context/BackgroundContext";
import { ThemeProvider } from "next-themes";
import RootLayoutContent from "@/components/layout/RootLayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahbub Shihab | AI & Full-Stack Developer",
  description: "AI Engineer and Full-Stack Developer specializing in modern web apps, intelligent machine learning systems, and premium digital experiences.",
  keywords: [
    "Mahbub Shihab",
    "AI Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "Software Engineer",
    "Machine Learning Specialist",
    "Dhaka Developer",
    "React Developer"
  ],
  authors: [{ name: "Mahbub Shihab", url: "https://mahbubshihab.com" }],
  creator: "Mahbub Shihab",
  openGraph: {
    title: "Mahbub Shihab | AI & Full-Stack Developer",
    description: "AI Engineer and Full-Stack Developer specializing in modern web apps and premium digital experiences.",
    url: "https://mahbubshihab.com",
    siteName: "Mahbub Shihab Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahbub Shihab | AI & Full-Stack Developer",
    description: "AI Engineer and Full-Stack Developer specializing in modern web apps.",
  },
  alternates: {
    canonical: "https://mahbubshihab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <BackgroundProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <RootLayoutContent>
              {children}
            </RootLayoutContent>
          </ThemeProvider>
        </BackgroundProvider>
      </body>
    </html>
  );
}
