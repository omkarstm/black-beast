"use client";

import { Eye, Move, Signature, Smile } from "lucide-react";
import Link from "next/link";

const Booking: React.FC = () => {
    const MapLocation = "https://www.google.com/maps/dir//Black+beasts,+Dumra+Rd,+Sitamarhi,+Bihar+843302/@26.5690423,85.5064268,16.71z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39ecf12b325eeb7f:0xe8c1fa5b7976cada!2m2!1d85.5094058!2d26.5694704?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
    const category = "All Vehicle".replace(/ /g, "-");
    return (
        <div className="py-14 mt-20 ">
            <div className="container text-center">
                <h2 className="font-bold text-[30px]">How to book car</h2>
                <div className="md:w-1/2 mt-12 flex justify-center md:justify-between gap-6 md:gap-0 items-center">
                    <div className="w-32 flex flex-col items-center">
                        <div className="rounded-full  shadow-lg p-6 w-fit">
                            <Link href={`price?category=${category}`}>
                                <Eye size={40} />
                            </Link>
                        </div>
                        <p className="mt-2 text-medium">See Vehicle on our website</p>
                    </div>
                    <div className="border border-[#000] w-1/2 h-fit border-dashed hidden md:block"></div>
                    <div className="w-32 flex flex-col items-center">
                        <div className="rounded-full   shadow-lg p-6 w-fit">
                            <Link href={MapLocation} target="_blank">
                                <Move size={40} />
                            </Link>
                        </div>
                        <p className="mt-2 text-medium">Visit to our location</p>
                    </div>
                </div>
                <div className="w-11/12 hidden md:flex justify-center items-center h-[200px]">
                    <div className="border border-[#000]  h-3/5 border-dashed"></div>
                </div>
                <div className="w-full flex md:justify-end mt-4 md:mt-0">
                    <div className=" w-full  md:w-3/5 md:ps-2 flex justify-center md:justify-between gap-6 md:gap-0 items-center gap-12">
                        <div className="  w-32 flex flex-col items-center">
                            <div className="rounded-full  shadow-lg p-6 w-fit">
                                <Signature size={40} />
                            </div>
                            <p className="mt-2 text-medium">Sign the legal document</p>
                        </div>
                        <div className="border border-[#000] w-1/2 h-fit hidden md:block border-dashed"></div>
                        <div className="w-32 flex flex-col items-center">
                            <div className="rounded-full   shadow-lg p-6 w-fit">
                                <Smile size={40} />
                            </div>
                            <p className="mt-2 text-medium">Take the car</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
