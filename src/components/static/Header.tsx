"use client";

import { CarFront, Menu, PhoneIncoming } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Header: React.FC = () => {
  const category = "All Vehicle".replace(/ /g, "-");

  return (
    <header className="py-4 px-5">
      <div className="flex justify-between items-center max-w-[1600px] mx-auto">
        <div className="logo_container flex items-center gap-2 justify-center md:justify-start">
          <Link href={"/"} className="relative w-[120px] lg:w-[200px]">
            <Image
              src="/image/logo.png"
              alt="Logo"
              layout="intrinsic"
              width={200}
              height={90}
              priority
            />
          </Link>
        </div>
        <nav>
          <ul className="md:flex  xl:gap-20 md:gap-5 hidden">
            <li>
              <Link href="/bestcars" className="font-medium">
                Best Cars
              </Link>
            </li>
            <li>
              <Link href={`/price?category=${category}`}
                className="font-medium"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/gallery"
                className="font-medium"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Link
            href="tel:+91 9929974214"
            className="text-black gap-2 hidden md:flex"
          >
            <PhoneIncoming className="h-5" />
            <p className="font-medium md:text-[14px] lg:text-[16px]">+91 9929974214</p>
          </Link>
          <Link
            href="tel:+91 9929974214"
            className="text-black gap-2 hidden md:flex"
          >
            <p className="font-medium md:text-[14px] lg:text-[16px]">+91 9934991143</p>
          </Link>
          <Sheet>
            <div className="md:hidden">
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            </div>

            <SheetContent className="px-2">
              <SheetHeader>
                <SheetTitle>Black Beasts</SheetTitle>
                <nav>
                  <ul className="flex flex-col gap-4 text-start pt-5">
                    <li className="border-b border-b-gray-300 py-2">
                      <Link href="/bestcars" className="font-medium">
                        Best Cars
                      </Link>
                    </li>
                    <li className="border-b border-b-gray-300 pb-2">
                      <Link href={`/price?category=${category}`}
                        className="font-medium"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="border-b border-b-gray-300 py-2">
                      <Link href="/gallery" className="font-medium">
                        Gallery
                      </Link>
                    </li>
                    <li className="bg-[#1a1a1a] py-2 rounded-sm pb-2">
                      <Link
                        href="tel:+91 9929974214"
                        className="text-white gap-2 flex justify-center"
                      >
                        <PhoneIncoming />
                        <p className="font-medium">
                          +91 9929974214
                        </p>
                      </Link>
                    </li>
                    <li className="bg-[#1a1a1a] py-2 rounded-sm pb-2">
                      <Link
                        href="tel:+91 9929974214"
                        className="text-white gap-2 flex justify-center"
                      >
                        <PhoneIncoming />
                        <p className="font-medium">
                          +91 9934991143
                        </p>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
