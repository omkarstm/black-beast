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
  title: "Black Beasts - Car Rental Service Provider | Rent Cars Online | Self Drive Cars in Sitamarhi",
  description:
    "Black Beasts offers affordable car rental services, including self-drive cars in Sitamarhi. Rent a car online with ease and enjoy your journey.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Black Beasts",
    "url": "https://www.blackbeasts.in/",
    "logo": "https://www.blackbeasts.in/logo.png", // Replace with your logo URL
    "description": "Black Beasts offers affordable car rental services, including self-drive cars in Sitamarhi. Rent a car online with ease and enjoy your journey.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Replace with your business address
      "addressLocality": "Sitamarhi",
      "addressRegion": "Bihar",
      "postalCode": "843302",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9929974214", 
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "Hindi"
    },
    "sameAs": [
      "https://www.instagram.com/blackbeastcars"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.56657355, 
      "longitude": 85.5171692335844 
    }
  }
  return (
    <html lang="en">
      <head>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <link rel="canonical" href="https://www.blackbeasts.in/" />
      <link rel="alternate" href="https://www.blackbeasts.in/" hrefLang="en-in" />
      </head>
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
