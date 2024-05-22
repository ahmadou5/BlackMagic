"use client";

import { LogInCard } from "@/components/loginCard";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import { useAccount, useUser } from "@alchemy/aa-alchemy/react";

export default function Home() {
  const { account, address, isLoadingAccount } = useAccount({
    type: "MultiOwnerModularAccount",
  });
  const user = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <Navbar />
      Hello World
    </main>
  );
}