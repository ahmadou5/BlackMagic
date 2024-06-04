'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { GlobalContext } from "@/context/context"

export const Market2 = () => {
    const { 
        setInfo,
        setMarket,
        setFounded,
        setEmployee,
        setQuarter,
        setWeb,
        setCeo,
        setIndustry,
        setSector, 
        setImgS,
        setRedeemCard,
        setMintCard
    } = GlobalContext()
    const [search, setSearch] = useState('')
    const route = useRouter()
    const stocks = [
        {
            name: 'Apple',
            tick: 'AAPL',
            id: 3,
            imgSrc: 'https://black-magic-git-main-ahmadou5s-projects.vercel.app/apple--big.svg',
            sector: 'Electronic Technology',
            industry: 'Telecommunications Equipment',
            CEO: 'Timothy Donald Cook',
            site: 'https://apple.com',
            headQ: 'Cupertino',
            employees: 161000,
            founded: '1976',
            MarketCap: 0,
            about: 'Apple, Inc engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in 1976 and is headquartered in Cupertino, CA.',
        },
        {
            name: 'Alphabet Inc',
            tick: 'GOOGL',
            id: 3,
            imgSrc: 'https://black-magic-git-main-ahmadou5s-projects.vercel.app/alphabet--big.svg',
            sector: 'Technology Services',
            industry: 'Packaged Software',
            CEO: 'Sundar Pichai',
            site: 'https://abc.xyz',
            headQ: 'Mountain View',
            employees: 182000,
            founded: '2015',
            MarketCap: 0,
            about: 'Alphabet, Inc is a holding company, which engages in the business of acquisition and operation of different companies. It operates through the Google and Other Bets segments. The Google segment includes its main Internet products such as ads, Android, Chrome, hardware, Google Cloud, Google Maps, Google Play, Search, and YouTube. The Other Bets segment consists of businesses such as Access, Calico, CapitalG, GV, Verily, Waymo, and X. The company was founded by Lawrence E. Page and Sergey Mikhaylovich Brin on October 2, 2015 and is headquartered in Mountain View, CA.',
        },
        {
            name: 'NVIDIA',
            tick: 'NVDA',
            id: 3,
            imgSrc: 'https://black-magic-git-main-ahmadou5s-projects.vercel.app/nvidia--big.svg',
            sector: 'Electronic Technology',
            industry: 'Semiconductors',
            CEO: 'Jen Hsun Huang',
            site: 'https://nvidia.com',
            headQ: 'Santa Clara',
            employees: 29600,
            founded: '1993',
            MarketCap: 0,
            about: 'NVIDIA Corp engages in the design and manufacture of computer graphics processors, chipsets, and related multimedia software. It operates through the following segments: Graphics Processing Unit (GPU), Tegra Processor, and All Other. The GPU segment comprises of product brands, which aims specialized markets including GeForce for gamers; Quadro for designers; Tesla and DGX for AI data scientists and big data researchers; and GRID for cloud-based visual computing users. The Tegra Processor segment integrates an entire computer onto a single chip, and incorporates GPUs and multi-core CPUs to drive supercomputing for autonomous robots, drones, and cars, as well as for consoles and mobile gaming and entertainment devices. The All Other segment refers to the stock-based compensation expense, corporate infrastructure and support costs, acquisition-related costs, legal settlement costs, and other non-recurring charges. The company was founded by Jen Hsun Huang, Chris A. Malachowsky, and Curtis R. Priem in January 1993 and is headquartered in Santa Clara, CA.',
        },
        {
            name: 'Tesla',
            tick: 'TSLA',
            id: 3,
            imgSrc: 'https://black-magic-git-main-ahmadou5s-projects.vercel.app/tesla--big.svg',
            sector: 'Consumer Durables',
            industry: 'Motor Vehicles',
            CEO: 'Elon Reeve Musk',
            site: 'https://tesla.com',
            headQ: 'Austin',
            employees: 140047,
            founded: '2003',
            MarketCap: 0,
            about: 'Tesla, Inc engages in the design, development, manufacture, and sale of fully electric vehicles, energy generation and storage systems. It also provides vehicle service centers, supercharger station, and self-driving capability. The company operates through the following segments: Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes the design, manufacture, installation, sale, and lease of stationary energy storage products and solar energy systems, and sale of electricity generated by its solar energy systems to customers. It develops energy storage products for use in homes, commercial facilities and utility sites. The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA.',
        },
        {
            name: 'Meta Platforms',
            tick: 'META',
            id: 3,
            imgSrc: 'https://s3-symbol-logo.tradingview.com/meta-platforms--big.svg',
            sector: 'Technology Services',
            industry: 'Internet Software/Services',
            CEO: 'Mark Elliot Zuckerberg',
            site: 'https://meta.com',
            headQ: 'Menlo Park',
            employees: 67032,
            founded: '2004',
            MarketCap: 0,
            about: 'Meta Platforms, Inc., engages in the development of social media applications. It builds technology that helps people connect, find communities, and grow businesses. It operates through the Family of Apps (FoA) and Reality Labs (RL) segments. The FoA segment consists of Facebook, Instagram, Messenger, WhatsApp, and other services. The RL segment includes augmented and virtual reality related consumer hardware, software, and content. The company was founded by Mark Elliot Zuckerberg, Dustin Moskovitz, Chris R. Hughes, Andrew McCollum, and Eduardo P. Saverin on February 4, 2004, and is headquartered in Menlo Park, CA.',
        },
        {
            name: 'Amazon',
            tick: 'AMZN',
            id: 3,
            imgSrc: 'https://s3-symbol-logo.tradingview.com/amazon--big.svg',
            sector: 'Retail Trade',
            industry: 'Internet Retail',
            CEO: 'Andrew R. Jassy',
            site: 'https://amazon.com',
            headQ: 'Seattle',
            employees: 1530000,
            founded: '1994',
            MarketCap: 0,
            about: 'Amazon.com, Inc. engages in the provision of online retail shopping services. It operates through the following business segments: North America, International, and Amazon Web Services (AWS). The North America segment includes retail sales of consumer products and subscriptions through North America-focused websites such as amazon.com and amazon.ca. The International segment offers retail sales of consumer products and subscriptions through internationally-focused websites. The Amazon Web Services segment involves in the global sales of compute, storage, database, and AWS service offerings for start-ups, enterprises, government agencies, and academic institutions. The company was founded by Jeffrey P. Bezos in July 1994 and is headquartered in Seattle, WA.',
        },
        
    ]
    const assets = [
        {
            name: 'Ethereum',
            price: 2341,
            imgSrc: 'https://zengo.com/wp-content/uploads/ETH_desktop.png'
        },
        {
            name: 'StoX Token',
            price: 33,
            imgSrc: 'stoxicon.png'
        },
    ]
    return(
    <div className="w-[100%] h-auto py-1 px-3 flex flex-col rounded-sm  ">
        <div className="text-5xl ml-5 mb-0 flex mt-20 py-10 px-12">
           <p className="mr-20">Market</p>
           <div className=" flex ml-[20px] mt-1.5 w-auto">
            <div className="text-xl  ml-2 mt-1.5 mr-2">Total Value Lock</div>
            <div className="w-28 ml-2 mr-2 text-xl h-10 py-1.5 px-1.5 text-white bg-white/5 rounded-xl">
            <p className="text-center ">0 Ether</p>
            </div>
           </div>
           <div className=" flex ml-[120px] mt-1.5 w-auto">
            <div className="text-xl  ml-2 mt-1.5 mr-2">Available Stocks</div>
            <div className="w-[auto] ml-2 mr-2 text-xl h-10 py-1.5 px-3.5 bg-white/5 text-white rounded-xl">
                <p className="text-center px-2">{`${stocks.length} active stocks`}</p>
            </div>
           </div>
        </div>
        <div className="mb-20">
        <div className="w-[96%] mt-2 flex bg-white/15 py-2 px-2 h-[280px] flex-col rounded-3xl ml-auto mr-auto">
        <div className="mt-3 mr-3 ml-8 px-6">
            <div className="mt-2 mb-4">
              <p>Assets</p>
            </div>
            {
                assets && assets.map((asset,i) => (
                    <>
                    <div className="h-[78px] mt-2 flex mb-2 rounded-full py-2.5 px-2.5 bg-black/45  w-[100%]">
                <div className="w-[59px] h-[59px]  mr-2 lg:mt-0 rounded-full bg-white flex flex-wrap  py-0 px-0 ">
                 <img src={asset.imgSrc} className="ml-auto mr-auto rounded-full" />
                </div>
                <div className="ml-auto mt-2 py-2 px-2 mr-auto">
                    {asset.name}
                </div>
                <div className="ml-auto mt-2 py-2 px-2 mr-auto">
                    {`$${asset.price}`}
                </div>
                <div className="ml-auto mt-2 py-1 px-2 mr-12">
                    <button className="w-[114px] h-8 rounded-xl bg-blue-800">Details</button>
                </div>
            </div>
                    </>
                ))
            }
            
           
            
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
            <div onClick={() => {
                setCeo(chain.CEO)
                setEmployee(chain.employees)
                setFounded(chain.founded)
                setIndustry(chain.industry)
                setInfo(chain.about)
                setMarket(chain.MarketCap)
                setQuarter(chain.headQ)
                setSector(chain.sector)
                setWeb(chain.site)
                setImgS(chain.imgSrc)
                route.push(`/market/${chain.tick}`)
                } } className="w-[98%] mt-2 mb-2 cursor-pointer hover:bg-white/25 ml-auto mr-auto py-1.5 px-2.5 h-[56%] flex rounded-full bg-black/45">
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