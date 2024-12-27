"use client";

import React from "react";
import { useDispatch } from "react-redux"; // Import Redux dispatch
import { useRouter } from "next/navigation"; // Use router for navigation
import "../../styles/PriceCardPage.css";
import carsData from "@/data/cardData";
import { selectCar } from "@/redux/carSlice";

interface PriceCardProps {
  category: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ category }) => {
  const dispatch = useDispatch(); // Initialize dispatch
  const router = useRouter(); // Initialize router for navigation

  // Filter cars based on the category
  const selectedCars = category === "all"
    ? carsData.flatMap((data) => data.cars)
    : carsData.find((data) => data.category === category)?.cars || [];

  // Handle car selection
  const handleCarClick = (car: any) => {
    dispatch(selectCar(car)); // Dispatch car details to Redux
    router.push(`/car-details/${car.name}`); // Navigate to the car details page
  };

  return (
    <div className="price-card-container">
      <div className="container">
        <div className="price-card">
          <h2 className="category-heading">{category === "all" ? "All Vehicles" : category}</h2>
          <div className="card-container">
            {selectedCars.length > 0 ? (
              selectedCars.map((car, index) => (
                <div
                  key={`${car.name}-${index}`}
                  className="car-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCarClick(car)} // Handle click
                >
                  <div className="content-box">
                    <div className="left-box">
                      <div className="image-box">
                        <img src={car.image} alt={car.name} width="300" height="200" />
                        <h3>{car.name}</h3>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="self-drive-box">
                        <h4 className="self-drive">Self Drive</h4>
                        <ul className="price-details">
                          <li>24hr : {car.selfDrive.oneDayHour}</li>
                          <li>12hr : {car.selfDrive.twelveHour}</li>
                          <li>06hr : {car.selfDrive.sixHour}</li>
                          <li>03hr : {car.selfDrive.threeHour}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className="feature-list">
                        {car.features.map((feature, idx) => (
                          <p key={idx}>{feature}</p>
                        ))}
                      </div>
                      <button className="book-now-button">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No cars available for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
