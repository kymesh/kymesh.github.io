import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import type { Metadata } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KyMesh | Quantum-Resistant Mesh Network",
  description:
    "KyMesh provides quantum-resistant, decentralized communication infrastructure for critical applications and off-grid environments. Secure your communications for the post-quantum era.",
  keywords: [
    "quantum-resistant",
    "mesh network",
    "secure communications",
    "decentralized",
    "post-quantum cryptography",
    "low power",
    "long range",
    "off-grid",
  ],
  authors: [
    {
      name: "KyMesh Team",
    },
  ],
  creator: "KyMesh",
  publisher: "KyMesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kymesh.com",
    title: "KyMesh | Quantum-Resistant Mesh Network",
    description: "Secure, decentralized communication infrastructure for the post-quantum era",
    siteName: "KyMesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "KyMesh | Quantum-Resistant Mesh Network",
    description: "Secure, decentralized communication infrastructure for the post-quantum era",
    creator: "@kymesh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
