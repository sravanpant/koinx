import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import YouMayLike from "@/components/YouMayLike";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <Header />

      <main className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-[#3E424A] text-sm mb-4">
          <span>Cryptocurrencies</span>
          <MdKeyboardDoubleArrowRight />

          <span className="text-black">Bitcoin</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <MainContent />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
        
      </main>
      <YouMayLike />
    </div>
  );
}
