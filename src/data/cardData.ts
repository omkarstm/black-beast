export interface CarData {
  id: number;
  category: string;
  cars: {
    name: string;
    withDriver: string[]
    isSelfDriveAvailable: boolean; 
    selfDrive?: { 
      threeHour?: string;
      sixHour?: string;
      twelveHour?: string;
      oneDayHour?: string;
    };
    bestCars: boolean;
    image: string;
  }[];
}

const carsData: CarData[] = [
  {
    id: 1,
    category: "Suv",
    cars: [
      {
        name: "Thar",
        withDriver: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
        isSelfDriveAvailable: true,
        selfDrive: {
          threeHour: "Rs.1000",
          sixHour: "Rs.2000",
          twelveHour: "Rs.3000",
          oneDayHour: "Rs.4500",
        },
        bestCars: true,
        image: "/image/thar.jpg",
      },
      {
        name: "Scorpio",
        withDriver: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
        isSelfDriveAvailable: true, 
        selfDrive: {
          threeHour: "Rs.1000",
          sixHour: "Rs.2000",
          twelveHour: "Rs.3000",
          oneDayHour: "Rs.4500",
        },
        bestCars: true,
        image: "/image/scorpio.png",
      },
      {
        name: "Land Rover",
        withDriver: ["With diesel + Toll tax + parking "," Rs.14999 with driver + 7Km/l Petrol"],
        isSelfDriveAvailable: false,
        bestCars: false,
        image: "/image/landrover.png",
      },
      {
        name: "Fortuner",
        withDriver: ["With Petrol/Diesel + Toll tax + parking", "Rs.11999 with driver"],
        isSelfDriveAvailable: false,
        bestCars: false,
        image: "/image/fortuner.png",
      },
      {
        name: "Ertiga",
        withDriver: ["With Petrol + Toll tax + parking", "Rs.1999 with driver 10Km/l petrol"],
        isSelfDriveAvailable: true,
        selfDrive: {
          twelveHour: "Rs.1999",
          oneDayHour: "Rs.2999",
        },
        bestCars: true,
        image: "/image/ertiga.png",
      },
      {
        name: "Creta",
        withDriver: ["With diesel + Toll tax + parking", "Rs.3499 with driver"],
        isSelfDriveAvailable: true,
        selfDrive: {
          twelveHour: "Rs.2000",
          oneDayHour: "Rs.3499",
        },
        bestCars: true,
        image: "/image/creta.png",
      },
    ],
  },
  {
    id: 2,
    category: "Sedan",
    cars: [
      {
        name: "Dzire",
        withDriver: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
        isSelfDriveAvailable: true,
        selfDrive: {
          sixHour: "Rs.999",
          twelveHour: "Rs.1599",
          oneDayHour: "Rs.2499",
        },
        bestCars: false,
        image: "/image/dzire.jpg",
      },
      {
        name: "Audi",
        withDriver: ["With diesel + Toll tax + parking", "Rs.19999 with driver 6Km/l petrol"],
        isSelfDriveAvailable: false,
        bestCars: false,
        image: "/image/audi.png",
      },
      {
        name: "I10",
        withDriver: ["With diesel + Toll tax + parking", "Rs.1399 with driver"],
        isSelfDriveAvailable: true,
        selfDrive: {
          threeHour: "Rs.297",
          sixHour: "Rs.600",
          twelveHour: "Rs.1500",
          oneDayHour: "Rs.1999",
        },
        bestCars: false,
        image: "/image/i10.png",
      },
      {
        name: "Punch",
        withDriver: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
        isSelfDriveAvailable: true,
        selfDrive: {
          threeHour: "Rs.599",
          sixHour: "Rs.999",
          twelveHour: "Rs.1500",
          oneDayHour: "Rs.2499",
        },
        bestCars: false,
        image: "/image/punch.png",
      },
      {
        name: "Alto",
        withDriver: ["With diesel + Toll tax + parking", "Rs.1399 with driver"],
        isSelfDriveAvailable: true,
        selfDrive: {
          threeHour: "Rs.300",
          sixHour: "Rs.600",
          twelveHour: "Rs.1500",
          oneDayHour: "Rs.1999",
        },
        bestCars: false,
        image: "/image/alto.png",
      },
    ],
  },
  {
    id: 3,
    category: "Others",
    cars: [
      {
        name: "Audi",
        withDriver: ["With diesel + Toll tax + parking", "Rs.19999 with driver"],
        isSelfDriveAvailable: false,
        bestCars: false,
        image: "/image/audi.png",
      },
      {
        name: "Land Rover",
        withDriver: ["With diesel + Toll tax + Rs.14999 with driver + 7Km/l Petrol"],
        isSelfDriveAvailable: false,
        bestCars: false,
        image: "/image/landrover.png",
      },
      {
        name: "Fortuner",
        withDriver: ["With Petrol/Diesel + Toll tax + parking", "Rs.11999 with driver"],
        isSelfDriveAvailable: false,
        bestCars: false,
        image: "/image/fortuner.png",
      },
    ],
  },
];

export default carsData;
