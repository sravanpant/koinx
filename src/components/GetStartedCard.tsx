import { FaArrowRight } from "react-icons/fa6";

export default function GetStartedCard() {
    return (
      <div className="bg-[#0052FE] text-white rounded-2xl p-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 leading-tight ">
            Get Started with KoinX<br />for FREE
          </h2>
          <p className="text-sm mb-6 opacity-90 leading-normal">
            With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.
          </p>
          
          <img
            src="https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMMdKOhbvZR9OtF1HyLzuj7ioECfAUeQ0cTrsD"
            alt="Get Started"
            className="mx-auto mb-6 w-full max-w-[178px]"
          />
          
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2">
            Get Started for FREE
            <FaArrowRight />
          </button>
        </div>
      </div>
    )
  }