import { GlobalContext } from "@/context/context";

export const MintCard = ({ slug }) => {
  const { mintCard, setMintCard } = GlobalContext();
  return (
    <div className="inset-0 fixed bg-black/15 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex">
      <div className="lg:h-[600px] h-auto w-[80%] lg:w-[55%] py-3 px-3 mb-20 mt-12 drop-shadow-glow2 bg-black/65 rounded-3xl ml-auto mr-auto">
        <div className="h-[52px] mb-10 flex flex-col items-end py-2 px-4 bg-red-300/0 w-[100%]">
          <div
            onClick={() => setMintCard(false)}
            className="h-8 w-[78px] py-0.5 px-6 border hover:bg-white/95 hover:text-black  border-white rounded-2xl"
          >
            <p className="w-20 font-bold ">esc</p>
          </div>
        </div>
        <div className="h-[520px] flex flex-row items-center bg-white/0 rounded-2xl w-[100%]">
          <div className="bg-red-400/0 w-[50%] h-auto ml-auto mr-auto">
            <div className="w-[55%] mt-[80px] mb-[5px] h-[50%] ml-auto mr-auto lg:mt-0 rounded-full bg-white flex flex-wrap  py-1 px-1 ">
              <img
                src="/nvidia--big.svg"
                className="ml-auto mr-auto w-[100%] h-[100%] rounded-full"
              />
            </div>
            <div className="mt-[70px] mb-[70px]">
              <div className="bg-white/0 w-[98%] h-[200px] rounded-2xl py-2 px-2">
                <div className="bg-white/0 border border-white w-[50%] mt-2 mb-2 ml-5 mr-auto h-[39px] rounded-xl py-1.5 text-center px-2">
                  <p className="text-md">X{slug}</p>
                </div>
                <div className="bg-white/0 border border-white w-[50%] mt-2 mb-2 ml-5 mr-auto h-[39px] rounded-xl py-1.5 text-center px-2">
                  <p className="text-md">Price : $290</p>
                </div>
                <div className="bg-white/0 border border-white w-[50%] mt-2 mb-2 ml-5 mr-auto h-[39px] rounded-xl py-1.5 text-center px-2">
                  <p className="text-md">Asset : ETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80%] w-[45%] ml-auto mr-auto">
            <div className=" py-3 px-3">
              <div className="h-[60%] mt-[20px] mb-auto bg-transparent rounded-2xl w-[95%] text-lg border border-white ml-auto mr-auto">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  className=" h-[100%] w-[100%] outline-none bg-black/0 py-3 px-3"
                  type="text"
                  placeholder="Enter Eth Amount"
                />
              </div>
              <div className="bg-white/0 border border-white rounded-xl py-3 px-3 h-24 w-[96%] mt-12 ml-auto mr-auto ">
                <p className="text-center">X{slug} to Receive</p>
                <p className="py-1 px-2 text-center h-9 ml-auto mr-auto w-[70%] mt-2 rounded-2xl  bg-black/25 text-white border border-white">
                  0
                </p>
              </div>
              <div className="bg-white/0 flex items-center rounded-xl py-3 px-3 h-24 w-[96%] mt-12 ml-auto mr-auto ">
                <button className="ml-auto mr-auto h-10 rounded-xl border border-white w-[70%] bg-green-700/45">Mint X{slug}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
