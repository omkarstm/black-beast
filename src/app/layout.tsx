import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/static/Nav";
import Header from "@/components/static/Header";
import Footer from "@/components/static/Footer";
import ReduxProvider from "@/redux/ReduxProvider"; // Import the ReduxProvider

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
  title: "Black Beasts",
  description: "Black beasts a car rent service provider",
  alternates: {
    canonical: "https://www.blackbeasts.in/",
  },
  openGraph: {
    title: "Black Beasts - Car Rental Service",
    description: "Rent cars with ease at Black Beasts, your trusted car rental service provider.",
    url: "https://www.blackbeasts.in/",
    siteName: "Black Beasts",
    images: [
      {
        url: "/image/",
        width: 1200,
        height: 630,
        alt: "Black Beasts Car Rental Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <Nav />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
