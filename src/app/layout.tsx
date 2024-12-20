import { cn } from "@/lib/utils";
import RootProvider from "@/provider/root-provider";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Assessment - Nagorik Technologies Ltd.",
  description:
    "Assessment application for Nagorik Technologies Ltd., built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className, "antialiased")}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
