import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Vista",
  description:
    "SkyVista is your ultimate weather companion, providing real-time updates and forecasts with stunning visualizations. Stay ahead of the weather with precise radar tracking, customizable notifications, and detailed insights for any location worldwide. Whether you're planning your day or preparing for an outdoor adventure, trust SkyVista to keep you informed and empowered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
