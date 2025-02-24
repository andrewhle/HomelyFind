"use client"
import Property from "@/components/Property";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function SuggestionProperty() {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[900px] lg:max-w-[1024px] xl:max-w-[1280px] h-full py-10 mt-5">
        <h2 className="text-gray-800 text-2xl md:text-4xl font-semibold font-sans">
          Homes For You
        </h2>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <p className="text-gray-700 text-lg md:text-xl">Explore All</p>
          <FaArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pr-2 md:pr-5">
            <FaArrowAltCircleLeft className="w-8 h-8 md:w-10 md:h-10 text-gray-800 hover:text-gray-600" onClick={slideLeft}/>
        </div>
        <div id="slider" className="flex gap-2 md:gap-5 max-w-[300px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1280px] h-full overflow-x-scroll scroll scroll-smooth whitespace-nowrap">
          <Property image="property-1.jpeg" />
          <Property image="property-2.jpg" />
          <Property image="property-3.jpg" />
          <Property image="property-4.jpg" />
          <Property image="property-5.jpeg" />
          <Property image="property-5.jpeg" />
          <Property image="property-5.jpeg" />
        </div>
        <div className="pl-2 md:pl-5">
            <FaArrowAltCircleRight className="w-8 h-8 md:w-10 md:h-10 text-gray-800 hover:text-gray-600" onClick={slideRight}/>
        </div>
      </div>
    </div>
  );
}

export default SuggestionProperty;