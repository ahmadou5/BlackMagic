"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CustomButton } from "../Buttons/CustomButton";



export const Navbar = () => {
   
  
    const router = useRouter()
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
          className="lg:w-[55%] w-[90%] ml-auto mr-auto rounded-full bg-white/5 py-1 px-1.5 z-100 mt-3  fixed inset-x-0 top-2 flex justify-center items-center"
        >
          <div className="lg:py-2.5 py-1.5 lg:px-2.5 px-1.5  mt-auto mb-auto ml-auto mr-auto w-[98%] flex flex-row  h-[90%]">
            <div className="ml-0 mr-auto">
              <Link href={"/"}>
                <div className="text-sm flex">
                  <p className="text-white/85 flex text-3xl font-thin ml-1"> <div className="w-12 h-12  mr-2 lg:mt-0.5 rounded-full bg-white flex flex-wrap  py-0.5 px-0.5 ">
                 <img src="./stoxicon.png" className="ml-auto mr-auto rounded-full" />
                </div><span className=" mt-2.5 font-extrabold">StoX</span></p>
                </div>
              </Link>
            </div>
            <div className="py-2.5 mt-1 lg:flex hidden text-white px-1">
              <div className="flex justify-between">
                <div className="ml-5 mr-5 cursor-pointer" onClick={() => router.push('/market')}>Market</div>
                
            
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