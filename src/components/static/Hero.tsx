"use client";

import { Button } from '../ui/button';
import Image from 'next/image';



const Hero: React.FC = () => {
    return (
        <div className="py-16 hero flex justify-center items-center">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="text-center w-full lg:w-3/4 xl:w-1/2">
                        <h1 className="text-white text-[30px] md:text-[60px] font-bold">
                            Car Bulao Khud Chalao
                        </h1>
                        <p className="text-[16px] md:text-xl text-white  ">
                            Self-drive or with a driver, our <strong>24/7</strong> car rentals are ready for you at just ₹99 per hour!
                        </p>
                        <Button className="mt-8" variant={'secondary'}>See cars</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
