"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/laleli1.jpg",
    quote: "Mesih Paşa Mah. Şair Haşmet Sk. No:44",
    name: "DARKMEN 1",
  },
  {
    image: "/images/darkmen2.jpg",
    quote:
      "Hayriye Tüccarı Cad. Paşazade Sk. No:9",
    name: "DARKMEN 2",
  },

  {
    image: "/images/darkmenosmanbey.jpg",
    quote:
      "Şair Nigar Sk. Emiray Apt. No:45/1-2",
    name: "DARKMEN OSMANBEY",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Our Stores <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We have three different shops across Istanbul.
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="darkwin store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
