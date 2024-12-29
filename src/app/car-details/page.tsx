"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CarDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [rentalDuration, setRentalDuration] = useState(""); 
  const selectedCar = useSelector((state: RootState) => state.car.selectedCar);

  if (!selectedCar) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-[400px] flex items-center justify-center text-center border font-semibold rounded shadow p-8">
          No car details available. Please go back and select a car from the list.
        </div>
      </div>
    );
  }

  const handleSendWhatsApp = () => {
    const phoneNumber = "9929974214"; 
    const message = `Hello, I would like to book the car "${selectedCar.name}" for ${rentalDuration}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false); 
  };


  const availableDurations = selectedCar.isSelfDriveAvailable
    ? [
        { label: "3 hours", key: "threeHour", value: selectedCar.selfDrive?.threeHour },
        { label: "6 hours", key: "sixHour", value: selectedCar.selfDrive?.sixHour },
        { label: "12 hours", key: "twelveHour", value: selectedCar.selfDrive?.twelveHour },
        { label: "1 day", key: "oneDayHour", value: selectedCar.selfDrive?.oneDayHour },
      ].filter((option) => option.value) 
    : [
        { label: "1 day", key: "default1" },
        { label: "2 days", key: "default2" },
        { label: "3 days", key: "default3" },
      ];

  return (
    <div className="container md:h-[70vh] lg:h-screen flex flex-col gap-6 items-center ">
      <h2 className="text-[20px] lg:text-[30px] text-center font-semibold pb-16 pt-8">Book the Car By Black Beasts</h2>
      <div className="car-details-container md:flex shadow-lg py-6 px-4 gap-6 rounded">
        <div>
          <h3 className="font-bold text-[30px] text-center">{selectedCar.name}</h3>
          <img src={selectedCar.image} alt={selectedCar.name} className="lg:w-[800px]" />
        </div>
        <div className="lg:w-[400px] flex flex-col justify-center items-center md:items-start">
          <h3 className="font-semibold text-[20px]">Self Drive</h3>
          {selectedCar.isSelfDriveAvailable ? (
            <div className="flex gap-8">
              <ul className="flex flex-col gap-4 my-6">
                {selectedCar.selfDrive?.oneDayHour && <li>24hr: {selectedCar.selfDrive?.oneDayHour}</li>}
                {selectedCar.selfDrive?.twelveHour && <li>12hr: {selectedCar.selfDrive?.twelveHour}</li>}
              </ul>
              <ul className="flex flex-col gap-4 my-6">
                {selectedCar.selfDrive?.sixHour && <li>6hr: {selectedCar.selfDrive?.sixHour}</li>}
                {selectedCar.selfDrive?.threeHour && <li>3hr: {selectedCar.selfDrive?.threeHour}</li>}
              </ul>
            </div>
          ) : (
            <p className="mt-2 mb-4">Not for Self Drive</p>
          )}
          <ul>
            <h4 className="font-bold mt-6 mb-4">Price With Driver</h4>
            {selectedCar.withDriver.map((feature, index) => (
              <li key={index} className="font-regular">{feature}</li>
            ))}
          </ul>
          <Button
            className="book-now-button w-fit px-20 mt-4"
            onClick={() => setIsModalOpen(true)}
          >
            Book Now
          </Button>
        </div>
      </div>


      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Booking</DialogTitle>
          </DialogHeader>
          <p>How long do you want to rent the car <strong>{selectedCar.name}</strong>?</p>


          <div className="my-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="outline">{rentalDuration || "Select Rental Duration"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {availableDurations.map((duration) => (
                  <DropdownMenuItem key={duration.key} onClick={() => setRentalDuration(duration.label)}>
                    {duration.label}
                  </DropdownMenuItem>
                ))}
                 <DropdownMenuItem onClick={() => setRentalDuration("More days")}>
                  More Days
                 </DropdownMenuItem >
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendWhatsApp} className="mb-2 md:mb-0">
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CarDetailsPage;
