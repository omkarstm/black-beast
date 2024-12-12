"use client"

import { CarFront, Menu, PhoneIncoming } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';



const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleScroll = useCallback(() => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <header className='py-4'>
      <div className=' container flex justify-between items-center'>
        <div className='logo_container flex items-center gap-2'>
          <Image src={"/image/logo.png"} alt='Logo' height={50} width={150} />
        </div>
        <nav>
          <ul className='md:flex lg:gap-20 md:gap-5 hidden'>
            <li>
              <Link href={"#"} className='font-medium'>Best Cars</Link>
            </li>
            <li>
              <Link href={"/price?category=All Vehicle"} className='font-medium'>Pricing</Link>
            </li>
            <button onClick={handleScroll} className="font-medium">
          Contact
        </button>
          </ul>
        </nav>
        <Link href={"tel:+91 9929974214"} className=' text-black gap-2 hidden md:flex'>
          <PhoneIncoming />
          <p className='font-medium'>+91 9929974214</p>
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
                      <Link href={"/price?category=all"} className='font-medium'>Pricing</Link>
                    </li>
                    <li className=' bg-[#1a1a1a] py-2 rounded-sm pb-2'>
                      <Link href={"tel:+91 9929974214"} className=' text-white gap-2 flex justify-center'>
                        <PhoneIncoming />
                        <p className='font-medium'>+91 9929974214</p>
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
