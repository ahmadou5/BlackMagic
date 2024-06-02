import { GlobalContext } from "@/context/context"

export const MintCard = () => {
  const { mintCard, setMintCard } = GlobalContext()
    return(
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex">
      <div className="lg:h-[600px] h-auto w-[80%] lg:w-[55%] py-3 px-3 mb-20 mt-12 drop-shadow-glow2 bg-black/65 rounded-3xl ml-auto mr-auto">
        <div className="h-[52px] flex flex-col items-end py-2 px-4 bg-red-300/0 w-[100%]">
          <div  onClick={() => setMintCard(false)} className="h-8 w-[78px] py-1 px-6 border hover:bg-white/95 hover:text-black  border-white rounded-2xl">
            <p className="w-20 font-bold ">esc</p>
          </div>
        </div>
        <div className="h-[520px] flex flex-col items-end py-2 px-4 bg-red-300/55 w-[100%]">
hh
        </div>
      </div>
    </div>
  )
}