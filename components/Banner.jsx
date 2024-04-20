import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="py-[50px] flex justify-end bg-amber-50 md:py-5">
      <div className="flex flex-row mx-20 w-full items-center justify-between gap-5 md:p-5">
        <div className="flex flex-col gap-10 justify-start max-w-[44%]">
          <h1 className="text-gray-800 text-[50px] font-sanss font-semibold">
            Find your next dream house
          </h1>
          <p className="w-[85%] font-sans text-xl text-gray-500">Your personal gateway to finding the home you've always imagined. Connect you with a space that resonates to your unique style and comfort needs.</p>
          <div class="bg-white rounded-lg justify-self-start shadow-md p-7 mx-auto w-full">
            <div class="mb-4">
              <label for="city_street" class="sr-only">
                City/Street
              </label>
              <div class="mt-1 relative rounded-lg shadow-sm">
                <input
                  class="block w-full py-4 px-3 text-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg"
                  placeholder="City/Street"
                ></input>
              </div>
            </div>
            <div class="mb-4">
              <label for="property_type" class="sr-only">
                Property Type
              </label>
              <select
                id="property_type"
                name="property_type"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Property Type</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="price_range" class="sr-only">
                Price Range
              </label>
              <select
                id="price_range"
                name="price_range"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Price Range</option>
              </select>
            </div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/modern-house.png"
            width={800}
            height={800}
            objectFit="fill"
            objectPosition="center"
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
