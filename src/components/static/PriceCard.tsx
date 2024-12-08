import React from "react";
import "../../styles/PriceCardPage.css";

interface CarData {
  id: number;
  category: string;
  cars: {
    name: string;
    features: string[];
    selfDrive: {
      threeHour: string;
      sixHour: string;
      twelveHour: string;
      oneDayHour: string;
    };
    image: string;
  }[];
}

interface PriceCardProps {
  category: string;
}

const PriceCard: React.FC<PriceCardProps> = ({ category }) => {
  const carsData: CarData[] = [
    {
      id: 1,
      category: "Suv",
      cars: [
        {
          name: "Thar",
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.4500",
          },
          image: "/image/thar.jpg",
        },
        {
          name: "Scorpio",
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.4500",
          },
          image: "/image/thar.jpg",
        },
      ],
    },
    {
      id: 2,
      category: "Sedan",
      cars: [
        {
          name: "Dzire",
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.2500",
          },
          image: "/image/thar.jpg",
        },
      ],
    },
    {
      id: 3,
      category: "Others",
      cars: [
        {
          name: "Bolero",
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.2500",
          },
          image: "/image/thar.jpg",
        },
        {
          name: "Duster",
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1200",
            sixHour: "Rs.800",
            twelveHour: "Rs.1800",
            oneDayHour: "Rs.3000",
          },
          image: "/image/thar.jpg",
        },
      ],
    },
  ];

  const selectedCategory = carsData.find((data) => data.category === category);

  return (
    <div className="price-card-container">
      <div className="container">
        <div className="price-card">
          <h2 className="category-heading">{category}</h2>
          <div className="card-container">
            {selectedCategory ? (
              selectedCategory.cars.map((car) => (
                <div key={car.name} className="car-card">
                  <div className="content-box">
                    <div className="left-box">
                      <div className="image-box">
                        <img src={car.image} alt={car.name} width="300" height="200" />
                        <h3>{car.name}</h3>
                      </div>
                    <div className="vertical-line"></div>
                    <div className="self-drive-box">
                    <h4 className="self-drive">Self drive</h4>
                      <ul className="price-details">
                        <li>24hr : {car.selfDrive.oneDayHour}</li>
                        <li>12hr : {car.selfDrive.twelveHour}</li>
                        <li>03hr : {car.selfDrive.threeHour}</li>
                        <li>06hr : {car.selfDrive.sixHour}</li>
                      </ul>
                    </div>
                    </div>
                    <div className="right-box">
                      <div className="feature-list">
                        {car.features.map((feature, index) => (
                          <p key={index}>{feature}</p>
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
