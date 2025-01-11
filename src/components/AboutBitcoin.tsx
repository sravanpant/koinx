import Image from "next/image";

export default function AboutBitcoin() {
  return (
    <div className="mb-8 bg-white  p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">About Bitcoin</h2>

      <div className="space-y-6">
        {/* What is Bitcoin */}
        <div>
          <h3 className="font-bold mb-2.5">What is Bitcoin?</h3>
          <div className="text-[#3E424A] space-y-4">
            <p>
              Bitcoin&apos;s price today is US$46,953.04, with a 24-hour trading
              volume of $23.25B. BTC is +2.35% in the last 24 hours. It is
              currently -4.91% from its 7-day all-time high of $49,343.83, and
              2.54% from its 7-day all-time low of $45,822.35. BTC has a
              circulating supply of 19.57M BTC and a max supply of 21M BTC.
            </p>
            <div className="w-full h-[1px] bg-[#DEE1E6]" />
          </div>
        </div>

        {/* Lorem Ipsum Section */}
        <div>
          <h3 className="font-bold mb-2.5">Lorem ipsum dolor sit amet</h3>
          <div className="text-[#3E424A] space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </p>
            <p>
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>
            <p>
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
            <div className="w-full h-[1px] bg-[#DEE1E6]" />
          </div>
        </div>

        {/* Already Holding Bitcoin? */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Already Holding Bitcoin?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] flex items-center gap-6">
              <Image
                src="https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMRd17LFPT8ZbjJYpyxt1LqNrVwQd6eoE70UhG"
                alt="Calculate Profits"
                width={128}
                height={128}
                className="w-32 h-32 rounded-lg contain"
              />
              <div className="text-white">
                <h3 className="font-bold text-lg mb-2">
                  Calculate your Profits
                </h3>
                <button className="bg-white text-black rounded-lg px-4 py-2 font-semibold">
                  Check Now →
                </button>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-[#FF9865] to-[#EF3031] flex items-center gap-6">
              <Image
                src="https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMdes6B9hEwjTi4yYMGfNupQ6OHU1ZblKCo0Ac"
                alt="Calculate Tax"
                width={128}
                height={128}
                className="w-32 h-32 rounded-lg contain"
              />
              <div className="text-white">
                <h3 className="font-bold text-lg mb-2">
                  Calculate your tax liability
                </h3>
                <button className="bg-white text-black rounded-lg px-4 py-2 font-semibold">
                  Check Now →
                </button>
              </div>
            </div>
          </div>

          <div className="text-[#3E424A] space-y-4 py-5">
            <div className="w-full h-[1px] bg-[#DEE1E6]" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
              lobortis tristique pharetra. Diam id et lectus urna et tellus
              aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
              sed. Quam scelerisque fermentum sapien morbi sodales odio sed
              rhoncus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
