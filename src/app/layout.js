import { Inter, Farro, Aboreto } from "next/font/google";
import "./globals.css";
// import { cookieToInitialState } from "@alchemy/aa-alchemy/config";
import { Providers } from "./provider";
import { headers } from "next/headers";
import { config } from "./config";
import "./globals.css";

const inter = Farro({ subsets: ["latin"] , weight: '300' });

export const metadata = {
  title: "Stock X",
  description: "The First Decentralised OnChain Stock MarketPlace Trade Stocks Securely",
};



export default function RootLayout({ children }) {
  // const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers >
       {children}
      </Providers>
      </body>
    </html>
  );
}
