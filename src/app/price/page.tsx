"use client";

import React, { Suspense } from "react";
import Footer from "@/components/static/Footer";
import Header from "@/components/static/Header";
import Nav from "@/components/static/Nav";
import PriceCard from "@/components/static/PriceCard";
import { useSearchParams } from "next/navigation";

const PricePageContent: React.FC = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    return (
        <main>
            {category ? (
                <section className="price-card-section">
                    <PriceCard category={category === "All Vehicle" ? "all" : category} />
                </section>
            ) : (
                <div>
                    <p>Please select a category to see pricing details.</p>
                </div>
            )}
        </main>
    );
};

export default function PricePage() {
    return (
        <div className="font-geist-sans">
            <Nav />
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                <PricePageContent />
            </Suspense>
            <Footer />
        </div>
    );
}
