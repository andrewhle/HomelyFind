import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { PiBedFill } from "react-icons/pi";
import { PiShowerFill } from "react-icons/pi";
import { FaHouse } from "react-icons/fa6";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";

function Property({image}) {
  return (
    <div className='inline-block w-[370px] shrink-0'>
      <div className="flex w-full flex-col">
        <Image
          src={`/${image}`}
          width={400}
          height={260}
          alt="property"
          className="rounded-tl-[10px] rounded-tr-[10px] h-[260px]"
        />
        <div class="rounded-br-[10px] rounded-bl-[10px] p-[19px] flex w-full justify-center border border-solid border-gray-300 bg-gray-100">
          <div className="flex flex-col w-full max-w-[95%] gap-6 my-2">
            <div className="flex items-center gap-3">
              <FaLocationDot className="w-6 h-6" />
              <p className="text-gray-700 text-lg font-sans font-semibold">
                2861 62nd Ave, Oakland, CA 94605
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between gap-5">
                <div className="flex items-center gap-3">
                    <PiBedFill className='w-5 h-5 text-gray-700' />
                    <p className='text-gray-500 font-sans text-base font-medium'>3 Bed Room</p>
                </div>
                <div className="flex items-center gap-3">
                    <PiShowerFill className='w-5 h-5 text-gray-700' />
                    <p className='text-gray-500 font-sans text-base font-medium'>2.5 Bath</p>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <div className="flex items-center gap-3">
                    <FaArrowsUpDownLeftRight className='w-5 h-5 text-gray-700' />
                    <p className='text-gray-500 font-sans text-base font-medium'>1,0321 sqft</p>
                </div>
                <div className="flex items-center gap-3">
                    <FaHouse className='w-5 h-5 text-gray-700' />
                    <p className='text-gray-500 font-sans text-base font-medium'>Single Home</p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-5 pr-11'>
                <button className='rounded-[10px] min-w-[156px] px-[31px] h-[48px] bg-gray-900 text-base font-sans text-white sm:px-5 flex items-center justify-center text-center cursor-pointer'>View Details</button>
                <p className='text-gray-700 text-2xl font-semibold font-sans'>$949,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property;
