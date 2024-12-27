import carsData from "@/data/cardData";

interface CarDetailsPageProps {
  params: {
    name: string;
  };
}

const CarDetailsPage: React.FC<CarDetailsPageProps> = ({ params }) => {
  const { name } = params;

  const car = carsData
    .flatMap((data) => data.cars)
    .find((car) => car.name === decodeURIComponent(name));

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <div>
      <h1>{car.name}</h1>
      <img src={car.image} alt={car.name} width="500" />
      <h3>Features:</h3>
      <ul>
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h3>Self Drive Prices:</h3>
      <ul>
        <li>24hr: {car.selfDrive.oneDayHour}</li>
        <li>12hr: {car.selfDrive.twelveHour}</li>
        <li>6hr: {car.selfDrive.sixHour}</li>
        <li>3hr: {car.selfDrive.threeHour}</li>
      </ul>
      jvuv
      <button>Book Now</button>
    </div>
  );
};

export default CarDetailsPage;
