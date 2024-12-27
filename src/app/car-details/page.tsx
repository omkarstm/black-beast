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
import { Input } from "@/components/ui/input";

const CarDetailsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [rentalDuration, setRentalDuration] = useState(""); // State for rental duration
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

  // Function to send WhatsApp message
  const handleSendWhatsApp = () => {
    const phoneNumber = "9929974214"; // Replace with your WhatsApp number
    const message = `Hello, I would like to book the car "${selectedCar.name}" for ${rentalDuration}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false); // Close modal after sending
  };

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
          <div className="flex gap-8">
            <ul className="flex flex-col gap-4 my-6">
              <li >24hr: {selectedCar.selfDrive.oneDayHour}</li>
              <li>12hr: {selectedCar.selfDrive.twelveHour}</li>
            </ul>
            <ul className="flex flex-col gap-4 my-6">
              <li>6hr: {selectedCar.selfDrive.sixHour}</li>
              <li>3hr: {selectedCar.selfDrive.threeHour}</li>
            </ul>
          </div>
          <ul className="">
            {selectedCar.features.map((feature, index) => (
              <li key={index} className="font-semibold">{feature}</li>
            ))}
          </ul>
          <Button
            className="book-now-button w-fit px-20 mt-4"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Modal for confirmation */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Booking</DialogTitle>
          </DialogHeader>
          <p>How long do you want to rent the car <strong>{selectedCar.name}</strong>?</p>

          {/* Dropdown for rental duration */}
          <div className="my-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="outline">{rentalDuration || "Select Rental Duration"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setRentalDuration("3 hours")}>3 hours</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRentalDuration("6 hours")}>6 hours</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRentalDuration("12 hours")}>12 hours</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRentalDuration("1 day")}>1 day</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRentalDuration("2 days")}>2 days</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setRentalDuration("1 week")}>1 week</DropdownMenuItem>
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
