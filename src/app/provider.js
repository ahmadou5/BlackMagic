"use client";

import { Suspense } from "react";
import { MicroContextProvider } from "../context/context";
import { EthProvider } from "./ethProvider";

export const Providers = (props) => {
  return (
    <Suspense>
      <EthProvider>
        <MicroContextProvider>{props.children}</MicroContextProvider>
      </EthProvider>
    </Suspense>
  );
};
