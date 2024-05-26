"use client";

import { Home2 } from "../components/Home/index";
import { Navbar } from "../components/Navbar/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-4">
      <Navbar />
      <Home2 />
    </main>
  );
}
