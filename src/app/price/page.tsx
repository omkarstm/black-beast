"use client";

import Footer from "@/components/static/Footer";
import Header from "@/components/static/Header";
import Nav from "@/components/static/Nav";
import PriceCard from "@/components/static/PriceCard";
import { useSearchParams } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    return (
        <div className="font-geist-sans">
            <Nav />
            <Header />

            <main>
                {category ? (
                    <section className="price-card-section">
                        <PriceCard category={category === "All Vehicle" ? "all" : category} />
                    </section>
                ) : (
                    <p>Please select a category to see pricing details.</p>
                )}
                <Footer />
            </main>
        </div>
    );
}
