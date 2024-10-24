import Navbar from "@/components/common/navbar";
import NextQueryClientProvider from "@/provider/query-client-provider";
import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import "./globals.css";

const narrow = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-narrow",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${narrow.className} antialiased pb-[500px]`}>
        <NextQueryClientProvider>
          <Navbar />
          {children}
        </NextQueryClientProvider>
      </body>
    </html>
  );
}
