import { Each } from "../Each"
import TradingView from "./TradingView"

export const Hero = () => {
    const handleClick = () => alert('Hey Im clickeed') 
    const stocks = [
        {
            name: 'Apple Inc',
            id: 3
        },
        {
            name: 'Alphabet',
            id: 3
        },
        {
            name: 'NVIDIA',
            id: 3
        },
        {
            name: 'Meta Platforms',
            id: 3
        }
    ]
    return (
    <div className="w-[100%] h-[600px] py-8 px-8 flex flex-col rounded-sm">
        
        <div className="w-[96%] mt-8 flex bg-white/5 py-2 px-2 h-[150px] flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-2 px-6 text-end">
            <p>View All </p>
        </div>
        <div className="flex">
        {stocks && stocks.map((item, i) => (
            <>
            <div className="w-[22%] mt-9 mb-2 cursor-pointer hover:bg-white/25 ml-auto mr-auto py-1.5 px-1.5 h-[56%] flex rounded-full bg-black/45">
                <div className="w-12 h-12 rounded-full bg-white py-0.5 px-0.5 ">
                 <img  src="./f2.png" className=" rounded-full" />
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
       
        <div className="w-[96%] ml-auto mr-auto rounded-xl mt-14 bg-black/55 h-[3900px] ">
            <TradingView />
        </div>
    </div>
)
}
