export interface CarData {
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
      bestCars:boolean;
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
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.4500",
          },
          bestCars:true,
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
          bestCars:true,
          image: "/image/scorpio.png",
        },
        {
          name: "Land Rover",
          features: ["With diesel + Toll tax + parking", "Rs.14999 with driver "],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.4500",
          },
          bestCars:false,
          image: "/image/landrover.png",
        },
        {
          name: "Fortuner",
          features: ["With diesel + Toll tax + parking", "Rs.11999 with driver "],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.4500",
          },
          bestCars:false,
          image: "/image/fortuner.png",
        },
        {
          name: "Ertiga",
          features: ["With diesel + Toll tax + parking", "Rs.1999 with driver "],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.2999",
          },
          bestCars:true,
          image: "/image/ertiga.png",
        },
        {
          name: "Creta",
          features: ["With diesel + Toll tax + parking", "Rs.3499 with driver "],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.2000",
            twelveHour: "Rs.3000",
            oneDayHour: "Rs.2999",
          },
          bestCars:true,
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
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.2500",
          },
          bestCars:false,
          image: "/image/dzire.jpg",
        },
        {
          name: "Audi",
          features: ["With diesel + Toll tax + parking", "Rs.19999 with driver"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.2500",
          },
          bestCars:false,
          image: "/image/audi.png",
        },
        {
          name: "I10",
          features: ["With diesel + Toll tax + parking", "Rs.1399 with driver"],
          selfDrive: {
            threeHour: "Rs.300",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.1999",
          },
          bestCars:false,
          image: "/image/i10.png",
        },
        {
          name: "Punch",
          features: ["With diesel + Toll tax + parking", "Rs 10/km + vehicle charge"],
          selfDrive: {
            threeHour: "Rs.300",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.2499",
          },
          bestCars:false,
          image: "/image/punch.png",
        },
        {
          name: "Alto",
          features: ["With diesel + Toll tax + parking", "Rs.1399 with driver"],
          selfDrive: {
            threeHour: "Rs.300",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.1999",
          },
          bestCars:false,
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
          features: ["With diesel + Toll tax + parking", "Rs.19999 with driver"],
          selfDrive: {
            threeHour: "Rs.1000",
            sixHour: "Rs.600",
            twelveHour: "Rs.1500",
            oneDayHour: "Rs.2500",
          },
          bestCars:false,
          image: "/image/audi.png",
        },
      ],
    },
  ];
  
  export default carsData;
  