import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelvin Mutuota",
  description: "Software Developer with 3+ years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ActiveSectionContextProvider>
        <body className={inter.className}>{children}</body>
      </ActiveSectionContextProvider>
    </html>
  );
}
