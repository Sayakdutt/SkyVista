"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { WeatherContextProvider } from "@/context/weatherContext";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <WeatherContextProvider>{children}</WeatherContextProvider>
    </NextThemesProvider>
  );
}
