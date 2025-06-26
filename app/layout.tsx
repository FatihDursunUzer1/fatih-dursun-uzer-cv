import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatih Dursun - .NET Backend Developer",
  description: ".NET Backend Developer ve Azure ekosistemi uzmanı. Mikroservis mimarileri, cloud-native uygulamalar ve enterprise çözümler geliştiriyorum.",
  keywords: [".NET", "Backend", "Developer", "Azure", "C#", "Mikroservis", "Cloud"],
  authors: [{ name: "Fatih Dursun" }],
  creator: "Fatih Dursun",
  openGraph: {
    title: "Fatih Dursun - .NET Backend Developer",
    description: ".NET Backend Developer ve Azure ekosistemi uzmanı",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatih Dursun - .NET Backend Developer",
    description: ".NET Backend Developer ve Azure ekosistemi uzmanı",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
