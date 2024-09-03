import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://unedit.vercel.app/"),
  title: "UnEdit",
  description: "remove edits from your images",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
