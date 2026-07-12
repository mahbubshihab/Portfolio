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
  title: "Mahbub Shihab - AI & Full-Stack Developer",
  description: "Portfolio of Mahbub Shihab, showcasing AI integration, web and mobile app development.",
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
