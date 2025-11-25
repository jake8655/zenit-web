import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Zenit25KK",
  description: "Zenit website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground font-montserrat font-normal">
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
