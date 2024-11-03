"use client";

import { Check } from "lucide-react";

const Details: React.FC = () => {
    return (
        <div className="py-6 md:py-12 bg-[#F6F6F6]">
            <div className="container flex justify-between md:text-xl font-bold flex-wrap">
                <p className="w-1/2 md:w-fit flex gap-1"> <Check  className="border rounded-full p-1 md:hidden"/> 16+ Cars</p>
                <p className="w-1/2 md:w-fit flex gap-1"> <Check  className="border rounded-full p-1 md:hidden"/> 7+ Brand</p>
                <p className="w-1/2 mt-4 md:w-fit md:mt-0 flex gap-1"> <Check  className="border rounded-full p-1 md:hidden"/>30+ successful delivery</p>
                <p className="w-1/2 mt-4 md:w-fit md:mt-0 flex gap-1"> <Check  className="border rounded-full p-1 md:hidden"/>24/7 Available</p>
            </div>
        </div>
    );
};

export default Details;
