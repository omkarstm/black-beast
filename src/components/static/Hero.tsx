"use client";

import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';



const Hero: React.FC = () => {
    const category = "All Vehicle".replace(/ /g, "-");
    return (
        <div className="py-16 hero flex justify-center items-center relative h-[700px]">
            <div className="container mx-auto absolute z-10">
                <div className="flex justify-center ">
                    <div className="text-center w-full lg:w-3/4 xl:w-1/2">
                        <h3 className=" text-[20px] text-[#fff] md:text-[30px] font-bold ">
                            Car Bulao Khud Chalao
                        </h3>
                        <h1 className=' text-[30px] md:text-[60px] text-[#fff] font-bold hero-text'>Self Drive, Car Rent.</h1>
                        <p className="text-[16px] md:text-xl text-[#fff] mb-2">
                            Drive self or with a driver, our <strong>24/7</strong> car rentals are ready for you at just ₹99 per hour!
                        </p>
                        <Link href={`/price?category=${category}`} className='bg-white py-2 px-4 font-semibold rounded '>See cars</Link>
                    </div>
                </div>
            </div>
            <Image
                src="/image/hero.jpg"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
    );
};

export default Hero;
