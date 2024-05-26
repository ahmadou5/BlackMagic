"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia, polygonAmoy } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const config = getDefaultConfig({
  appName: "Beat",
  projectId: "fa7b299471fa848b2dc52a5e1529ac37",
  chains: [sepolia, polygonAmoy],
  ssr: true,
});

const queryClient = new QueryClient();

export const EthProvider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          coolMode={true}
          theme={darkTheme({
            accentColor: "#75f07f",
            accentColorForeground: "white",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
