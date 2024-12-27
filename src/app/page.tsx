"use client"
import Booking from "@/components/static/Booking";
import Category from "@/components/static/Category";
import Contact from "@/components/static/Contact";
import Details from "@/components/static/Details";
import Hero from "@/components/static/Hero";
import Map from "@/components/static/Map";
import Testimonial from "@/components/static/Tetimonial";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     <main>
      <Hero />
      <Details />
      <Category />
      <Booking />
      <Testimonial />
      <Contact />
      <Map />
     </main>
    </div>
  );
}
