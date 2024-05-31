import { OverView } from "@/components/Market/OverView";
import { Navbar } from "@/components/Navbar";
export default function Page({ params }) {
   
    return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-1 px-2 py-4">
    <Navbar />
    
    <OverView slug={params.slug} />
  </main>
  );
  }