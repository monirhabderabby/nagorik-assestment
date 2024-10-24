import Navbar from "@/components/common/navbar";
import NProgress from "@/provider/NProgress";
import NextQueryClientProvider from "@/provider/query-client-provider";
import type { Metadata } from "next";
import { CookiesProvider } from "next-client-cookies/server";
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
      <body
        className={`${inter.className} ${poppins.className} antialiased pb-[500px]`}
      >
        <CookiesProvider>
          <NextQueryClientProvider>
            <NProgress />
            <Navbar />
            {children}
          </NextQueryClientProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
