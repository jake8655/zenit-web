import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-background text-foreground font-arial">
        {children}
      </body>
    </html>
  );
}
