"use client"

import { CarFront, Menu, PhoneIncoming } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='py-8'>
      <div className=' container flex justify-between'>
        <div className='logo_container flex items-center gap-2'>
          <CarFront className='text-red' />
          <p className='text-xl font-bold'><span className='text-red'>Black</span>beast</p>
        </div>
        <nav>
          <ul className='md:flex lg:gap-20 md:gap-5 hidden'>
            <li>
              <Link href={"#"} className='font-medium'>Best Cars</Link>
            </li>
            <li>
              <Link href={"#"} className='font-medium'>Pricing</Link>
            </li>
            <li>
              <Link href={"#"} className='font-medium'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Link href={"tel:+91 7644015588"} className=' text-red gap-2 hidden md:flex'>
          <PhoneIncoming />
          <p className='font-medium'>+91 7644015588</p>
        </Link>

        <div  className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>

            <SheetContent className='px-2'>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <nav>
                  <ul className='flex flex-col gap-4 text-start pt-5'>
                    <li className=' border-b border-b-gray-300 py-2'>
                      <Link href={"#"} className='font-medium'>Best Cars</Link>
                    </li>
                    <li className=' border-b border-b-gray-300 pb-2'>
                      <Link href={"#"} className='font-medium'>Pricing</Link>
                    </li>
                    <li className=' border-b border-b-gray-300 pb-2'>
                      <Link href={"#"} className='font-medium'>Contact</Link>
                    </li>
                    <li className=' bg-red py-2 rounded-sm pb-2'>
                      <Link href={"tel:+91 7644015588"} className=' text-white gap-2 flex justify-center'>
                        <PhoneIncoming />
                        <p className='font-medium'>+91 7644015588</p>
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
