import { GeistSans } from "geist/font/sans";
import { headers } from "next/headers";

import "./globals.css";
import { Providers } from "./provider";
import { cn } from "../lib/utils";
import DotPattern from "../components/magicui/DotPattern";

export const metadata = {
  title: "StoX - Tokenize Stocks",
  description:
    "Tokenize your favourite stocks and trade them on the blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} relative min-h-screen`}>
        <div className="fixed inset-0 -z-10">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(circle_at_top_center,white,transparent_75%)]"
            )}
          />
        </div>
        <div className="relative z-10 min-h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
