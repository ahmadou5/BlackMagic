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
        <div className="text-4xl ml-5 mb-4 mt-20 py-10 px-12">
           <p className="t">Market</p>
        </div>
        <div className="mb-20">
        <div className="w-[96%] mt-2 flex bg-white/15 py-2 px-2 h-[280px] flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-3 mr-3 ml-8 px-6 text-end">
            
        </div>
        <div className="flex">
        {ner && ner.map((item, i) => (
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
        </div>
        <div className="w-[96%] mt-2 flex bg-white/15 py-2 px-2 h-auto flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-3 mr-3 ml-8 mb-16 px-6 text-end">
            
        </div>
        <div className="flex flex-col">
        {stocks && stocks.map((item, i) => (
            <>
            <div className="w-[98%] mt-2 mb-2 cursor-pointer hover:bg-white/25 ml-auto mr-auto py-1.5 px-1.5 h-[56%] flex rounded-full bg-black/45">
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