'use client'
import { Suspense } from "react"
import { TradingViewWidget } from "../Chart"


export const OverView = ({slug}) => {
    return(
    <div className="w-[100%] mb-20 h-[300px] ">
        <div className="flex ">
            <div className="w-[20%] py-14 px-28">
                <div className="w-[240px] h-[240px]  mr-2 lg:mt-0 rounded-full bg-white flex flex-wrap  py-0.5 px-0.5 ">
                 <img src="/nvidia--big.svg" className="ml-auto mr-auto w-full h-full rounded-full" />
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
                       <p className="text-sm mt-5 w-[60px] ml-1 h-7 py-1 px-4  rounded-3xl bg-white/10">USD</p> 
                    </div>
                    <div className=" ml-4 mr-4 text-xl text-green-500 mt-1.5">
                        +23.77%
                    </div>
                </div>
            </div>
            </Suspense>
            
            <div className="w-[40%]  py-12  flex items-center mt-4 px-12">
              <button className="w-[214px] h-10 border text-xl border-white ml-auto mr-36 rounded-xl hover:bg-white/8  5 hover:text-black ">{`Mint X${slug}`}</button>
            </div>
        </div>
        <div className="py-3 mt-5 px-12">
            <p className="text-4xl">{`${slug} Chart>`}</p>
        </div>
        <div className="w-[97%] h-[590px] ml-auto mr-auto text-center mb-[120px] py-1 px-2 mt-[20px] rounded-2xl bg-white/0">
          <TradingViewWidget slug={slug}/>
        </div>
        <div className="w-[97%] h-[590px] ml-auto mr-auto mb-[120px] py-4 px-2 mt-[90px] rounded-2xl">
            <div className="py-2 px-6 text-4xl">
            About {slug}
            </div>
          
        </div>
        
    </div>
)
}