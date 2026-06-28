import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smavy.com"),
  title: {
    default: "Smavy Academy",
    template: "%s | Smavy Academy",
  },
  description: "Smart learning. Savvy success.",
  applicationName: "Smavy Academy",
  openGraph: {
    title: "Smavy Academy",
    description: "Smart learning. Savvy success.",
    siteName: "Smavy Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smavy Academy",
    description: "Smart learning. Savvy success.",
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  );
}
