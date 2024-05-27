import { Each } from "../Each"
import { React, useRef, } from 'react'
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "../Gemini"
import {IoArrowForward } from 'react-icons/io5'
import TradingView from "./TradingView"
import { LampContainer } from "../Lamp";

export const Hero = () => {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
 const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    const handleClick = () => alert('Hey Im clickeed') 
    const chains = [
        {
            name: 'Butt',
            id:2,
            imgSrc: './chain1.svg'
        }
    ]
    const stocks = [
        {
            name: 'Apple',
            id: 3,
            imgSrc: './apple--big.svg'
        },
        {
            name: 'Alphabet Inc',
            id: 3,
            imgSrc: './alphabet--big.svg'
        },
        {
            name: 'NVIDIA',
            id: 3,
            imgSrc: './nvidia--big.svg'
        },
        {
            name: 'Tesla',
            id: 3,
            imgSrc: './tesla--big.svg'
        }
    ]
    return (
    <div className="w-[100%] h-auto py-8 px-8 flex flex-col rounded-sm  " >
        <div className="w-[100%] ml-auto mr-auto h-auto mb-[450px] mt-[210px] z-0" ref={ref}>
         <GoogleGeminiEffect pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}  title={'StoX '} description={'Stock Simplified'} className={'z-20'}/>
        </div>
        <div className="w-[96%] mt-8 flex bg-white/5 py-2 px-2 h-[150px] flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-3 mr-3 ml-8 px-6 text-end">
            <p>View All Markets</p>
        </div>
        <div className="flex">
        {stocks && stocks.map((item, i) => (
            <>
            <div className="w-[22%] mt-9 mb-2 cursor-pointer hover:bg-white/25 ml-auto mr-auto py-1.5 px-1.5 h-[56%] flex rounded-full bg-black/45">
                <div className="w-12 h-12 rounded-full bg-white py-0.5 px-0.5 ">
                 <img  src={item.imgSrc} className=" rounded-full" />
                </div>
                <div className="px-1 w-[60%] py-0.5 ml-5">
                <div className="text-start">
                    {item.name}
                </div>
                <div className="flex items-end text-end">
                   <div className="ml-auto mr-auto">
                    $123
                   </div>
                   <div className="ml-auto text-green-600 mr-auto">
                    3.56%
                   </div>
                </div>
                </div>
            </div>
            </>
          ))}
        </div>
        
          
        </div>
        <div className="w-[96%] py-2 px-2 ml-auto mr-auto rounded-xl mt-14 bg-white/5 h-[580px] ">
            <TradingView />
        </div>
        <div className="w-[96%] py-10 px-2 ml-auto mr-auto bg-black/0 rounded-xl flex mt-20 mb-auto  h-[80px] ">
           <LampContainer  >
             <p className="text-2xl py-8 px-10 mt-6">Dive into the world of limitless possibilities with our synthetic tokens. Backed by ETH, these tokens reflect the value of top global stocks, allowing you to invest securely and effortlessly. Break free from borders and explore a new era of decentralized finance.</p>
           </LampContainer>
        </div>
        <div className="w-[96%] py-2 px-2 ml-auto mr-auto rounded-xl flex h-auto flex-col mt-[500px] ">
            <div className="bg-white/5 py-8 px-9 flex flex-col ml-0 mt-5 mb-6 w-[48%] h-64 rounded-2xl mr-auto">
                <p className="text-2xl text-center"></p>
                <div className="flex space-x-7 ml-auto mr-auto mt-12">
                {stocks && stocks.map((item,i) => (
                    <>
                    <div className="w-full flex ">
                    <div className="w-20 h-20 rounded-full   ">
                      <img  src={item.imgSrc} className="ml-auto mr-auto h-full w-full rounded-full" />
                    </div>
                    </div>
                    </>
                ))}
                </div>
            </div>
            
            <div className="bg-white/5 py-8 px-9 flex mb-4 mt-6 flex-col w-[48%] h-64 rounded-2xl ml-auto">
                <p className="text-2xl text-center"></p>
                <div className="flex space-x-7 ml-auto mr-auto mt-12">
                {chains && chains.map((item,i) => (
                    <>
                    <div className="w-full flex ">
                    <div className="w-20 h-20 rounded-full   ">
                      <img  src={item.imgSrc} className="ml-auto mr-auto h-full w-full rounded-full" />
                    </div>
                    </div>
                    </>
                ))}
                </div>
            </div>
        </div>  
    </div>
)
}
