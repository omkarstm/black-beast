"use client";

import React from "react";
import "@/styles/Gallery.css";

const images = [
    { src: "/image/gallery-1.jpeg", alt: "Landscape 1" },
    { src: "/image/gallery-2.jpeg", alt: "Portrait 1" },
    { src: "/image/gallery-3.jpeg", alt: "Square 1" },
    { src: "/image/gallery-4.jpeg", alt: "Landscape 2" },
    { src: "/image/gallery-5.jpeg", alt: "Portrait 2" },
    { src: "/image/gallery-3.jpeg", alt: "Square 2" },
];

const Gallery: React.FC = () => {
    return (
        <div className="gallery-page min-h-screen">
            <div className="container">
                <div className="gallery">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
