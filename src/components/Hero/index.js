import { Each } from "../Each"
import TradingView from "./TradingView"

export const Hero = () => {
    const handleClick = () => alert('Hey Im clickeed') 
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
    <div className="w-[100%] h-auto py-8 px-8 flex flex-col rounded-sm">
        
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
        <div className="w-[96%] py-2 px-2 ml-auto mr-auto rounded-xl mt-14 bg-black/5 h-[580px] ">
            <TradingView />
        </div>
        <div className="w-[96%] py-2 px-2 ml-auto mr-auto bg-black/0 rounded-xl flex mt-14  h-72 ">
            <div className="bg-black/10 ml-auto py-8 px-9 w-[95%] text-center h-64 rounded-2xl mr-auto">
                <p className="text-3xl">Buy Stock OnChain</p>
            </div>
            
        </div>
        <div className="w-[96%] py-2 px-2 ml-auto mr-auto rounded-xl flex mt-14  h-72 ">
            <div className="bg-black/10 ml-auto w-[48%] h-64 rounded-2xl mr-auto">
                <p>Multichain Real World Asset Management</p>
            </div>
            <div className=" ml-auto w-[48%] h-64 rounded-2xl mr-auto">
                {stocks && stocks.map((item,i) => (
                    <>
                    <div className="flex flex-wrap w-auto">
                    <div className="w-12 h-12 rounded-full bg-white flex flex-wrap  py-0.5 px-0.5 ">
                 <img  src={item.imgSrc} className="ml-auto mr-auto rounded-full" />
                </div>
                    </div>
                    </>
                ))}
            </div>
        </div>
    </div>
)
}
