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
                                    "I rented a car for my family trip to Goa, and it was an amazing experience! The car was clean and well-maintained, and the process was hassle-free. Definitely recommend this service."
                                </p>
                                <h3 className="font-bold text-md">– Rajesh Kumar</h3>
                            </Card>
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2 hidden lg:block">
                                <p className="text-gray-700 text-lg mb-4">
                                    "I needed a car for a wedding in Jaipur, and the team went out of their way to ensure I got a premium vehicle on time. Great service and affordable rates!"
                                </p>
                                <h3 className="font-bold text-md">– Priya Sharma</h3>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center space-x-4">
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2">
                                <p className="text-gray-700 text-lg mb-4">
                                    "The car rental service made my road trip to Ladakh unforgettable. The SUV was in perfect condition and handled the tough terrain effortlessly. Thank you for an incredible experience!"
                                </p>
                                <h3 className="font-bold text-md">– Anjali Patel</h3>
                            </Card>
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2 hidden lg:block">
                                <p className="text-gray-700 text-lg mb-4">
                                    "I rented a car for a business trip in Bengaluru, and the process was seamless. The staff was professional, and the car was delivered to my doorstep. Highly satisfied!"
                                </p>
                                <h3 className="font-bold text-md">– Arjun Verma</h3>
                            </Card>
                        </CarouselItem>
                        <CarouselItem className="flex justify-center space-x-4">
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2">
                                <p className="text-gray-700 text-lg mb-4">
                                    "Booked a car for a short trip to Kerala. The experience was smooth, the vehicle was in excellent condition, and the staff was very accommodating. Will use this service again!"
                                </p>
                                <h3 className="font-bold text-md">– Sneha Nair</h3>
                            </Card>
                            <Card className="shadow p-6 bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-2 hidden lg:block">
                                <p className="text-gray-700 text-lg mb-4">
                                    "Affordable and reliable car rental service. I rented a car for a pilgrimage to Varanasi, and everything went perfectly. The service exceeded my expectations."
                                </p>
                                <h3 className="font-bold text-md">– Devendra Singh</h3>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;
