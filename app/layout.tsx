import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ITSTech",
  description: "ITSTech is a software development company",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  // Check if the children are iterable (array-like) and map over them
  const isArray = Array.isArray(children);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {/* Render children with unique keys if they are an array */}
          {isArray
            ? React.Children.map(children, (child, index) =>
                React.cloneElement(child as React.ReactElement, {
                  key: index, // Assigning a unique key based on index
                })
              )
            : children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
