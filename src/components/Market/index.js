'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export const Market2 = () => {

    const [search, setSearch] = useState('')
    const route = useRouter()
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
        },
        {
            name: 'NVIDIA',
            id: 3,
            imgSrc: './nvidia--big.svg'
        },
        {
            name: 'NVIDIA',
            id: 3,
            imgSrc: './nvidia--big.svg'
        },
        {
            name: 'NVIDIA',
            id: 3,
            imgSrc: './nvidia--big.svg'
        },
        {
            name: 'NVIDIA',
            id: 3,
            imgSrc: './nvidia--big.svg'
        },
        {
            name: 'NVIDIA',
            id: 3,
            imgSrc: './nvidia--big.svg'
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
        },
        {
            name: 'Tesla',
            id: 3,
            imgSrc: './tesla--big.svg'
        },
        {
            name: 'Tesla',
            id: 3,
            imgSrc: './tesla--big.svg'
        },
        {
            name: 'Tesla',
            id: 3,
            imgSrc: './tesla--big.svg'
        },
    ]
    const ner = []
    return(
    <div className="w-[100%] h-auto py-1 px-3 flex flex-col rounded-sm  ">
        <div className="text-5xl ml-5 mb-0 flex mt-20 py-10 px-12">
           <p className="mr-20">Market</p>
           <div className=" flex ml-[20px] mt-1.5 w-auto">
            <div className="text-xl  ml-2 mt-1.5 mr-2">Total Value Lock</div>
            <div className="w-28 ml-2 mr-2 text-xl h-10 py-1.5 px-1.5 text-black bg-white/65 rounded-xl">
            <p className="text-center ">367 Ether</p>
            </div>
           </div>
           <div className=" flex ml-[120px] mt-1.5 w-auto">
            <div className="text-xl  ml-2 mt-1.5 mr-2">Available Stocks</div>
            <div className="w-28 ml-2 mr-2 text-xl h-10 py-1.5 px-1.5 bg-white/65 text-black rounded-xl">
                <p className="text-center">34 stocks</p>
            </div>
           </div>
        </div>
        <div className="mb-20">
        <div className="w-[96%] mt-2 flex bg-white/15 py-2 px-2 h-[280px] flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-3 mr-3 ml-8 px-6">
            <div className="mt-2 mb-4">
              <p>Assets</p>
            </div>
            <div className="h-[78px] mt-2 flex mb-2 rounded-full py-2.5 px-2.5 bg-black/45  w-[100%]">
                <div className="w-[59px] h-[59px]  mr-2 lg:mt-0 rounded-full bg-white flex flex-wrap  py-0 px-0 ">
                 <img src="https://zengo.com/wp-content/uploads/ETH_desktop.png" className="ml-auto mr-auto rounded-full" />
                </div>
                <div className="ml-auto mt-2 py-2 px-2 mr-auto">
                    Ethereum
                </div>
                <div className="ml-auto mt-2 py-2 px-2 mr-auto">
                    {`$${2430}`}
                </div>
                <div className="ml-auto mt-2 py-1 px-2 mr-12">
                    <button className="w-[114px] h-8 rounded-xl bg-blue-800">Details</button>
                </div>
            </div>
           
            
        </div>
       
        </div>
        </div>
        <div className="w-[96%] mt-2 flex bg-white/15 py-1 px-2 h-auto flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-4 flex mr-3 ml-8 mb-2 py-1 px-6">
           <div className="ml-5 py-4 text-2xl mt-2 mr-auto">
                 Wrapped Stocks
           </div>
            
            <div className=" ml-auto mr-3 w-[20%] mt-4 h-[65px]">
                    <div className="h-[60%] mt-auto mb-auto bg-transparent w-[95%] text-lg ml-auto mr-auto">
                        <input onChange={(e) => setSearch(e.target.value)} className=" h-[100%] w-[100%] outline-none rounded-full bg-black/15 py-3 px-3" type="text" placeholder="Search Stock"/>
                    </div>
            </div>
        </div>
        <div className="flex flex-col">
        {stocks && stocks.filter((chain) => {
                    return search.toLowerCase() == '' ?
                    chain : chain.name.toLowerCase().includes(search)
                   }).map((chain,i) => (
            <>
            <div onClick={() => route.push(`/market/${chain.name}`) } className="w-[98%] mt-2 mb-2 cursor-pointer hover:bg-white/25 ml-auto mr-auto py-1.5 px-2.5 h-[56%] flex rounded-full bg-black/45">
                <div className="w-12 h-12 rounded-full bg-white py-0.5 px-0.5 ">
                 <img  src={chain.imgSrc} className=" rounded-full" />
                </div>
                <div className="px-1 ml-auto w-[80%] py-2 ">
              
                <div className="flex items-end mt-1.5 text-end">
                <div className="text-center">
                    {chain.name}
                </div>
                   <div className="ml-auto text-center mr-12">
                    $123
                   </div>
                   <div className="ml-auto text-green-600 mr-8">
                    3.56%
                   </div>
                </div>
                </div>
            </div>
            </>
          ))}
        </div>
        </div>
    </div>
)
}