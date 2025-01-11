import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import YouMayLike from "@/components/YouMayLike";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <nav className="h-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <img
            src="https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMDyMXYC3afpqdTeOXJ97Ajk8NzEWi36PvmVbS"
            alt="KoinX"
            className="h-6"
          />
          <div className="hidden md:flex items-center gap-8">
            <button className="text-base font-semibold">Crypto Taxes</button>
            <button className="text-base font-semibold">Free Tools</button>
            <button className="text-base font-semibold">Resource Center</button>
            <button className="bg-[#0052FE] text-white px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>

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
