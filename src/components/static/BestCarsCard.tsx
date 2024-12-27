"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Use router for navigation
import { useDispatch } from "react-redux"; // Use Redux to manage state
import carsData from "@/data/cardData";
import "@/styles/BestCarsPage.css";
import { selectCar } from "@/redux/carSlice";

const BestCarsCard: React.FC = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const router = useRouter(); // Initialize router for navigation

  const bestCars = carsData.flatMap((data) =>
    data.cars.filter((car) => car.bestCars)
  );

  const handleCarClick = (car: any) => {
    dispatch(selectCar(car)); // Dispatch selected car details to Redux
    router.push(`/car-details/${car.name}`); // Navigate to car details page
  };

  return (
    <div className="best-cars-container">
      <div className="container">
        <div className="price-card">
          <h2 className="category-heading">Best Cars</h2>
          <div className="card-container">
            {bestCars.length > 0 ? (
              bestCars.map((car, index) => (
                <div
                  key={`${car.name}-${index}`}
                  className="car-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCarClick(car)} // Handle click to navigate
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
              <p>No best cars available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCarsCard;
