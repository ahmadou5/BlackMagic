"use client";
import { useState } from "react";

import Link from "next/link";
import { CustomButton } from "../Buttons/CustomButton";



export const Navbar = () => {
   
  
  
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          setCopy(true);
          setTimeout(  () => 
            setCopy(false),
            1000)
          alert('address copied to clip Board')
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    const handleCopy2 = (value) => {
      navigator.clipboard.writeText(value).then(
        () => {
          // Successfully copied to clipboard
          console.log('Address copied to clipboard');
          alert('address copied to clip Board')
          
        },
        (err) => {
          // Failed to copy to clipboard
          console.error('Could not copy address: ', err);
        }
      );
    }
    return (
      <>
        {/**for mobile view **/}
        
        {/**for desktop view **/}
        <div
          style={{ "backdrop-filter": "blur(12px)" }}
          className="lg:w-[55%] w-[90%] ml-auto mr-auto rounded-full bg-white/90 py-1 px-1.5 z-0 mt-3  fixed inset-x-0 top-2 flex justify-center items-center"
        >
          <div className="lg:py-2.5 py-1.5 lg:px-2.5 px-1.5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div className="ml-0 mr-auto">
              <Link href={"/"}>
                <div className="text-sm flex">
                  <p className="text-black/85 flex text-3xl font-thin ml-1"><img className="h-9 mr-2 w-9 lg:mt-0.5 " src="./f2.png"/><span className=" mt-1 font-extrabold">Not</span></p>
                </div>
              </Link>
            </div>
            <div className="py-2 lg:flex hidden text-black px-1">
              <div className="flex justify-between">
                <div className="ml-5 mr-5">Market</div>
                <div  className="ml-5 mr-5">Trade</div>
            
              </div>
              
              </div>
            <div className=" lg:flex hidden ml-auto px-0.5 py-0">
              <CustomButton />
            </div>
            
          </div>          
        </div>
      </>
    );
  };