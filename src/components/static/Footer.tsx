"use client";

import { Instagram, Mail, MapPinCheckInside } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] py-6 md:py-12">
      <div className="container mx-auto  text-white ">
        <div className="flex flex-col  sm:flex-row justify-between flex-wrap gap-6">
          <div>
            <Image src={"/image/white-logo.png"} height={60} width={160} alt="Logo" />
            <p className="ps-2 font-bold">Self Drive Car Rent</p>
          </div>
          <div className="quality-container flex flex-col gap-4 ">
            <ul className="flex flex-col gap-4 list-disc ps-4 md:ps-0">
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
          </div>
          <div className="info-container flex flex-col gap-4">
            <div className="flex gap-2">
              <Mail strokeWidth="1px" />
              <p>blackkbeast3139@gmail.com</p>
            </div>
            <div className="flex gap-2">
              <MapPinCheckInside strokeWidth="1px" />
              <p> Rampur Parori , Dumra Sitamarhi</p>
            </div>
            <div className="flex gap-2">
              <Instagram strokeWidth="1px" />
              <p>blackbeastcars</p>
            </div>
          </div>

          <div className="flex items-center">
            <a
              href="https://wa.me/9929974214?text=Hello%20Black%20Beast!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white py-2 px-5 text-black font-semibold rounded"
            >
              Get in Touch on whatsapp
            </a>
          </div>
        </div>
        <div className="w-[100%] h-[0.2px] bg-[#fff]/30 my-6"></div>
        <div className="flex flex-col text-center justify-between">

          © {new Date().getFullYear()} All rights reserved to Black Beast
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
