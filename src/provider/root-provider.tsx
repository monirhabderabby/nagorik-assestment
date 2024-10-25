"use client";
// Packages
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { Toaster } from "sonner";

// Local imports
import Navbar from "@/components/common/navbar";
import { ThemeOptions, useTheme } from "@/hooks/theme";
import { cn } from "@/lib/utils";
import NProgress from "./NProgress";
import NextQueryClientProvider from "./query-client-provider";

interface Props {
  children: React.ReactNode;
}

const RootProvider = ({ children }: Props) => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const currentTheme = getCookie("theme");

    if (!currentTheme) {
      setTheme("dark");
    } else {
      setTheme(currentTheme as ThemeOptions);
    }
  }, [setTheme]);
  return (
    <main className={cn(theme === "dark" ? "dark" : "")}>
      <NextQueryClientProvider>
        <Toaster />
        <NProgress />
        <Navbar />
        {children}
      </NextQueryClientProvider>
    </main>
  );
};

export default RootProvider;
