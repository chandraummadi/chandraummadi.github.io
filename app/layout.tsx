import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandra Ummadi — AI + DevOps Engineer",
  description:
    "AWS Platform Engineer & Terraform expert building intelligent infrastructure automation and AI-powered DevOps workflows.",
  metadataBase: new URL("https://chandraummadi.github.io"),
  openGraph: {
    title: "Chandra Ummadi — AI + DevOps Engineer",
    description:
      "AWS Platform Engineer & Terraform expert building intelligent infrastructure automation and AI-powered DevOps workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
