import Image from "next/image";

import { Each } from "../Each";
import RadialGradient from "../magicui/Gradient";
import TradingView from "./TradingView";

export const Hero = () => {
  const stocks = [
    {
      name: "Apple",
      id: 3,
      imgSrc: "./apple--big.svg",
    },
    {
      name: "Alphabet Inc",
      id: 3,
      imgSrc: "./alphabet--big.svg",
    },
    {
      name: "NVIDIA",
      id: 3,
      imgSrc: "./nvidia--big.svg",
    },
    {
      name: "Tesla",
      id: 3,
      imgSrc: "./tesla--big.svg",
    },
  ];
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center justify-between w-11/12 max-w-6xl p-10 rounded-lg bg-white shadow-lg h-5/6 overflow-hidden">
        <RadialGradient />
        <h1 className="z-10 mb-6 text-5xl font-bold text-center text-black w-full">
          Stocks, Tokenized
        </h1>
        <div className="z-10 flex flex-col md:flex-row items-center justify-center w-full flex-grow">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <p className="text-lg text-black font-semibold max-w-prose leading-relaxed">
              Dive into the world of limitless possibilities with our synthetic
              tokens. Backed by ETH, these tokens reflect the value of top
              global stocks, allowing you to invest securely and effortlessly.
              Break free from borders and explore a new era of decentralized
              finance.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-center pl-4">
            <Image
              src="/path/to/your/image.jpg"
              alt="Hero Image"
              width={500}
              height={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
