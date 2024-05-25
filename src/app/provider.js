"use client";

import { AlchemyClientState } from "@alchemy/aa-alchemy/config";
import { AlchemyAccountProvider } from "@alchemy/aa-alchemy/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { config, queryClient } from "./config";
import { MicroContextProvider } from "../context/context";
import { EthProvider } from "./ethProvider";

export const Providers = (props) => {
  return (
    <Suspense>
      <EthProvider>
        <MicroContextProvider>
          <QueryClientProvider client={queryClient}>
            <AlchemyAccountProvider
              config={config}
              queryClient={queryClient}
              initialState={props.initialState}
            >
              {props.children}
            </AlchemyAccountProvider>
          </QueryClientProvider>
        </MicroContextProvider>
      </EthProvider>
    </Suspense>
  );
};
