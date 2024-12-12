"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Category: React.FC = () => {
    const router = useRouter();

    const handleCategoryClick = (category: string) => {
        router.push(`/price?category=${category}`);
    };

    return (
        <div className="py-14 mt-5 md:mt-14">
            <div className="container text-center">
                <h2 className="font-bold text-[30px]">Vehicle Category</h2>
                <div className="flex justify-center mt-10 flex-wrap md:gap-2 lg:gap-4">
                    <Card
                        className="md:w-[48%] lg:w-[32%] cursor-pointer"
                        onClick={() => handleCategoryClick("Suv")}
                    >
                        <CardHeader className="pb-0">
                            <Image src={"/image/luxury-car.avif"} width={370} height={300} alt="Luxury cars" />
                            <CardTitle className="text-xl font-bold">Suv</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-gray-600 list-disc ml-4 mt-2 text-start">
                                <li>
                                    Brand-New 2024 Models
                                </li>
                                <li>
                                    Top Model Options
                                </li>
                                <li>
                                    Fully Maintained & Ready
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card
                        className="md:w-[48%] lg:w-[32%] mt-4 md:mt-0 cursor-pointer"
                        onClick={() => handleCategoryClick("Sedan")}
                    >
                        <CardHeader className="pb-0">
                            <Image src={"/image/scarpio.avif"} width={370} height={300} alt="Normal cars" />
                            <CardTitle className="text-xl font-bold mb-0">Sedan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-gray-600 list-disc ml-4 mt-2 text-start">
                                <li>
                                    Brand-New 2024 Models
                                </li>
                                <li>
                                    Top Model Options
                                </li>
                                <li>
                                    Fully Maintained & Ready
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card
                        className="md:w-[48%] lg:w-[32%] mt-4 md:mt-0 cursor-pointer"
                        onClick={() => handleCategoryClick("Others")}
                    >
                        <CardHeader className="pb-0">
                            <Image src={"/image/tractor.avif"} width={370} height={300} alt="Tractors & others" />
                            <CardTitle className="text-xl font-bold">Others</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="text-gray-600 list-disc ml-4 mt-2 text-start">
                                <li>
                                    Brand-New 2024 Models
                                </li>
                                <li>
                                    Top Model Options
                                </li>
                                <li>
                                    Fully Maintained & Ready
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Category;
