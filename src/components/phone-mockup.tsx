import Image from "next/image";
import { CardDescription } from "./ui/card";

export function PhoneMockup() {
  return (
    <div className="relative w-[300px] h-[600px] md:w-[200px] md:h-[400px] lg:w-[250px] lg:h-[500px] bg-white rounded-[2.5rem] shadow-xl overflow-hidden ring-offset-background ring-1 ring-gray-200">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-black rounded-b-3xl z-10" />

      {/* Dynamic Island Area */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start pt-2">
        <div className="w-[40%] h-4 bg-black rounded-full flex justify-around items-center text-[8px] text-white px-1">
          <span>9:41</span>
          <span>📶 🔋</span>
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative w-full h-full flex flex-col pt-8 pb-4 px-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] text-gray-400">Owner</span>
          <span className="text-[10px] text-gray-400">☰</span>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm font-semibold text-blue-600">You've made $5,700 today</p>
          <div className="flex items-center justify-center text-xs text-orange-500 mt-1">
            {/* <AlertTriangle className="h-3 w-3 mr-1" /> */}
            <span>1 thing needs your attention.</span>
          </div>
        </div>

        {/* Small Card 1 */}
        <div className="bg-gray-50 p-2 rounded-lg shadow-sm mt-4">
          <div className="flex items-center text-xs text-gray-700">
            <span className="mr-2">🗓️</span> Catering request $433.00, 23 items
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="bg-gray-50 p-2 rounded-lg shadow-sm mt-2 flex justify-between items-center">
          <span className="text-xs text-gray-700">3 items out of stock</span>
          <span className="text-xs text-gray-500">›</span>
        </div>

        {/* Chart Card */}
        <div className="bg-gray-50 p-2 rounded-lg shadow-sm mt-2">
          <div className="flex justify-between items-center text-xs text-gray-700">
            <span>Overall sales</span>
            <span className="font-semibold">$34,423.45</span>
          </div>
          {/* Placeholder for chart */}
          <div className="h-12 bg-gray-200 rounded mt-1">
            <Image src="/next.svg" alt="Chart" width={100} height={40} className="w-full h-full object-cover" />
          </div>
        </div>

        <CardDescription className="text-sm text-gray-500 text-center mt-auto">Overview</CardDescription>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-gray-300 rounded-full" />
    </div>
  );
}
