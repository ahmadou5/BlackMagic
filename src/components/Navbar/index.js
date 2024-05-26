"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "../Buttons/CustomButton";

export const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-md", "backdrop-blur-lg");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-white", "shadow-md", "backdrop-blur-lg");
        navbar.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center pl-[150px]">
          <Link href="/">
            <div className="text-3xl font-thin flex items-center cursor-pointer">
              <Image
                src="/stox_transparent.png"
                width={90}
                height={90}
                className="pb-[5px]"
                alt="StoX Icon"
              />
              {/* <span className="font-extrabold">StoX</span> */}
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-[40px] text-black text-lg">
          <Link href="/market">
            <span className="cursor-pointer font-semibold">Market</span>
          </Link>
          <Link href="/trade">
            <span className="cursor-pointer font-semibold">Dashboard</span>
          </Link>
        </div>
        <div className="hidden lg:flex pr-[150px]">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};
