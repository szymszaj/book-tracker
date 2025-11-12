import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookTracker - Track Your Reading Journey",
  description: "Transform your reading habit with intelligent tracking, beautiful statistics, and insights that help you read more effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
