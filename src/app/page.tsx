import Booking from "@/components/static/Booking";
import Category from "@/components/static/Category";
import Contact from "@/components/static/Contact";
import Details from "@/components/static/Details";
import Footer from "@/components/static/Footer";
import Header from "@/components/static/Header";
import Hero from "@/components/static/Hero";
import Map from "@/components/static/Map";
import Nav from "@/components/static/Nav";
import Testimonial from "@/components/static/Tetimonial";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />
     <Header />
     <main>
      <Hero />
      <Details />
      <Category />
      <Booking />
      <Testimonial />
      <Contact />
      <Map />
      <Footer />
     </main>
    </div>
  );
}
