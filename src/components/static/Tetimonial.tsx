"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";

const Testimonial: React.FC = () => {
    return (
        <div className="py-14 mt-20">
            <div className="container text-center">
                <h2 className="font-bold text-[30px] mb-8">What Our Customers Say</h2>
                <Carousel className="mt-12">
                    <CarouselContent>
                        <CarouselItem className="flex justify-center space-x-4">
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2">
                                <p className="text-gray-700 text-lg mb-4">
                                    "I had an amazing experience with the car rental service! The car was in excellent condition, and the staff was incredibly helpful. I will definitely be renting again!"
                                </p>
                                <h3 className="font-bold text-md">– John Doe</h3>
                            </Card>
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2 hidden lg:block">
                                <p className="text-gray-700 text-lg mb-4">
                                    "Great service and friendly staff! The car I rented was perfect for my trip, and I appreciated the convenience of the pick-up and drop-off."
                                </p>
                                <h3 className="font-bold text-md">– Jane Smith</h3>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center space-x-4">
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2">
                                <p className="text-gray-700 text-lg mb-4">
                                    "I loved the selection of cars available! The booking process was easy, and the rates were very reasonable. Highly recommend!"
                                </p>
                                <h3 className="font-bold text-md">– Michael Johnson</h3>
                            </Card>
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2 hidden lg:block">
                                <p className="text-gray-700 text-lg mb-4">
                                    "Excellent experience overall! The team was professional, and the vehicle was perfect for my needs."
                                </p>
                                <h3 className="font-bold text-md">– Emily Davis</h3>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;
