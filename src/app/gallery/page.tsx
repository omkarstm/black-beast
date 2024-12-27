"use client";

import React from "react";
import "@/styles/Gallery.css"

const images = [
    { src: "https://via.placeholder.com/400x300", alt: "Landscape 1", aspect: "landscape" },
    { src: "https://via.placeholder.com/300x400", alt: "Portrait 1", aspect: "portrait" },
    { src: "https://via.placeholder.com/400x600", alt: "Square 1", aspect: "square" },
    { src: "https://via.placeholder.com/600x400", alt: "Landscape 2", aspect: "landscape" },
    { src: "https://via.placeholder.com/400x600", alt: "Portrait 2", aspect: "portrait" },
    { src: "https://via.placeholder.com/400x400", alt: "Square 2", aspect: "square" },
];

const Gallery: React.FC = () => {
    return (
        <div className="gallery-page min-h-screen">
            <div className="container">
                <div className="gallery">

                    {images.map((image, index) => (
                        <div key={index} className={`gallery-item ${image.aspect}`}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
