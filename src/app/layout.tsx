import type { Metadata } from "next";
import cn from "classnames";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customers Table",
  description: "Renormalize test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-white dark:bg-purple-dark text-black dark:text-white text-sm",
          montserrat.className
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
