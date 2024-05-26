import { Hero } from "../Hero";
import TradingView from "../TradingView";
import StockMarquee from "../Marquee";
import { BorderBeam } from "../magicui/BorderBeam";

export const Home2 = () => {
  return (
    <div className="w-[100%] mt-12 ml-auto mr-auto">
      <Hero />
      <StockMarquee />

      <div className="relative flex items-center justify-center h-screen">
        <div className="relative flex flex-col items-center justify-center w-11/12 max-w-6xl p-10 bg-white rounded-2xl shadow-2xl h-5/6 overflow-hidden">
          <BorderBeam size={250} duration={12} delay={9} />
          <h1 className="z-10 mb-6 text-5xl font-bold text-center text-black">
            Stocks, Tokenized
          </h1>
          <TradingView />
        </div>
      </div>
    </div>
  );
};
