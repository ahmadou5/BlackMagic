export const Market2 = () => {
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
        <div className="w-[96%] mt-2 flex bg-white/15 py-2 px-2 h-auto flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-3 flex mr-3 ml-8 mb-12 px-6">
            <p>Stocks</p>
            <div>
                hey
            </div>
        </div>
        <div className="flex flex-col">
        {stocks && stocks.map((item, i) => (
            <>
            <div className="w-[98%] mt-2 mb-2 cursor-pointer hover:bg-white/25 ml-auto mr-auto py-1.5 px-2.5 h-[56%] flex rounded-full bg-black/45">
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
    </div>
)
}