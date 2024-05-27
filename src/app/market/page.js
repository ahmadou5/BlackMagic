import { Market2 } from "@/components/Market";
import { Navbar } from "@/components/Navbar";

export default function Market() {
    
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-1 px-2 py-4">
        <Navbar />
        <Market2 />
      </main>
    );
  }