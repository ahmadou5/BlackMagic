"use client";
import { Suspense, useState } from "react";
import { TradingViewWidget } from "../Chart";
import { MintCard } from "../Cards/MintCard";
import { GlobalContext } from "@/context/context";
import { RedeemCard } from "../Cards/RedeemCard";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const OverView = ({ slug }) => {
  const language = "en";

  const redeemable = true;
  const {
    mintCard,
    setMintCard,
    setRedeemCard,
    redeemCard,
    sector,
    industry,
    ceo,
    web,
    imgS,
    quarter,
    employee,
    founded,
    market,
    info,
  } = GlobalContext();
  return (
    <div className="w-[100%] mb-20 h-[300px] ">
      <div className="flex ">
        <div className="w-[20%] py-14 px-28">
          <div className="w-[240px] h-[240px]  mr-2 lg:mt-0 rounded-full bg-white flex flex-wrap  py-0.5 px-0.5 ">
            <img
              src={imgS}
              className="ml-auto mr-auto w-full h-full rounded-full"
            />
          </div>
        </div>
        <Suspense fallback={<p>Loading</p>}>
          <div className="w-[40%] mr-auto ml-10 flex mt-9 px-16 py-8 flex-col">
            <div className="mt-5 mb-1 h-[27%]">
              <p className="text-4xl">{`${slug}`}</p>
            </div>
            <div className="h-[25%] ml-12">
              <p className="text-lg">{`X ${slug}`}</p>
            </div>
            <div className="mb-5 flex h-[27%]">
              <div className="flex">
                <p className="text-4xl ml-2 mr-0 "> {`1105.00`}</p>
                <p className="text-sm mt-5 w-[60px] ml-1 h-7 py-1 px-4  rounded-3xl bg-white/10">
                  USD
                </p>
              </div>
              <div className=" ml-4 mr-4 text-xl text-green-500 mt-1.5">
                +23.77%
              </div>
            </div>
          </div>
        </Suspense>

        <div className="w-[40%]  py-12  flex items-center mt-4 px-3">
          {redeemable && (
            <button
              onClick={() => setRedeemCard(true)}
              className="w-[190px] h-10 border text-xl border-white ml-3 mr-3 bg-red-600/0 rounded-xl hover:bg-white  hover:border-black 5 hover:text-black "
            >{`Redeem X${slug}`}</button>
          )}
          <button
            onClick={() => setMintCard(true)}
            className="w-[190px] h-10 border text-xl bg-green-500/0 border-white ml-3 mr-36 rounded-xl hover:bg-white  hover:border-black 5 hover:text-black "
          >{`Mint X${slug}`}</button>
        </div>
      </div>
      <div className="py-3 mt-5 px-12">
        <div className="text-4xl flex font-extrabold">
          <p>{`${slug} Chart`}</p>
          <IoArrowForwardCircleOutline className="mt-1 mr-2 ml-2 " />
        </div>
      </div>
      <div className="w-[96%] h-[590px] ml-auto mr-auto text-center mb-[120px] py-5 px-5 bg-white mt-[20px] rounded-3xl bg-white/0">
        <TradingViewWidget slug={slug} />
      </div>
      <div className="w-[97%] h-[590px] ml-auto mr-auto mb-[120px] py-4 px-2 mt-[90px] rounded-2xl">
        <div className="py-2 px-4 mb-4 font-extrabold text-4xl">
          About {slug}
        </div>

        <div className="w-[100%] py-3 bg-white/0 flex h-[125px]">
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">Sector</p>
            <p className="text-xl py-2 font-semibold">{sector}</p>
          </div>
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">Industry</p>
            <p className="text-xl py-2 font-semibold">{industry}</p>
          </div>
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">CEO</p>
            <p className="text-xl py-2 font-semibold">{ceo}</p>
          </div>
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">Website</p>
            <Link href={`${web}`}>
              <div className="text-xl flex py-2 hover:text-blue-500 ">
                <p>{web}</p>
                <IoArrowForwardCircleOutline className="mt-1 ml-2 mr-2" />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[100%] py-3 bg-white/0 flex h-[125px]">
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">HeadQuarter</p>
            <p className="text-xl py-2 font-semibold">{quarter}</p>
          </div>
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">Employees</p>
            <p className="text-xl py-2 font-semibold">
              {Intl.NumberFormat(language, { notation: "compact" }).format(
                employee
              )}
            </p>
          </div>
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">Founded</p>
            <p className="text-xl py-2 font-semibold">{founded}</p>
          </div>
          <div className="bg-white/5 py-2 px-4 rounded-xl w-[24%] ml-auto mr-auto">
            <p className="text-md py-1 font-bold">Market Cap</p>
            <p className="text-xl py-2 font-semibold">{market}</p>
          </div>
        </div>
        <div className="w-[100%] py-3 mb-[600px] bg-white/0 flex h-auto">
          <div className="bg-white/5 py-6 px-12 rounded-xl w-[99%] h-auto ml-auto mr-auto">
            <p className="text-xl text-center py-3 px-3">{info}</p>
          </div>
        </div>
      </div>
      {mintCard && <MintCard slug={slug} />}
      {redeemCard && <RedeemCard slug={slug} />}
    </div>
  );
};
