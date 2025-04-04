import "@/styles/globals.css"
import "@/styles/globals.css";



import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

import Script from "next/script";

export const metadata: Metadata = {
  title: "ShoeKing",
  description: "Sneaker Shop",
  icons: [{ rel: "icon", url: "/shoe-king-removebg-preview.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        {/* Bootstrap JS (и Popper если нужно) */}
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />

      </body>
    </html>
  );
}



