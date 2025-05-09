// import "@/styles/globals.css"



import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";

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

      </body>
    </html>
  );
}



