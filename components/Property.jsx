"use client";
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { PiBedFill } from "react-icons/pi";
import { PiShowerFill } from "react-icons/pi";
import { FaHouse } from "react-icons/fa6";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";
import styled from '@emotion/styled';

const PropertyContainer = styled.div`
  display: inline-block;
  width: 370px;
  flex-shrink: 0;
`;

const PropertyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PropertyDetails = styled.div`
  border-radius: 0 0 10px 10px;
  padding: 19px;
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid #d1d5db;
  background-color: #f3f4f6;
`;

const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 95%;
  gap: 1.5rem;
  margin: 0.5rem 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DetailText = styled.p`
  color: #4b5563;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 500;
`;

const DetailTitle = styled.p`
  color: #374151;
  font-size: 1.125rem;
  font-family: sans-serif;
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 10px;
  min-width: 156px;
  padding: 0 31px;
  height: 48px;
  background-color: #1f2937;
  font-size: 1rem;
  font-family: sans-serif;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const Price = styled.p`
  color: #374151;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: sans-serif;
`;

function Property({ image }) {
  return (
    <PropertyContainer>
      <PropertyContent>
        <Image
          src={`/${image}`}
          width={400}
          height={260}
          alt="property"
          className="rounded-tl-[10px] rounded-tr-[10px] h-[260px]"
        />
        <PropertyDetails>
          <DetailsContent>
            <DetailItem>
              <FaLocationDot className="w-6 h-6" />
              <DetailTitle>2861 62nd Ave, Oakland, CA 94605</DetailTitle>
            </DetailItem>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between gap-5">
                <DetailItem>
                  <PiBedFill className="w-5 h-5 text-gray-700" />
                  <DetailText>3 Bed Room</DetailText>
                </DetailItem>
                <DetailItem>
                  <PiShowerFill className="w-5 h-5 text-gray-700" />
                  <DetailText>2.5 Bath</DetailText>
                </DetailItem>
              </div>
              <div className="flex justify-between gap-5">
                <DetailItem>
                  <FaArrowsUpDownLeftRight className="w-5 h-5 text-gray-700" />
                  <DetailText>1,0321 sqft</DetailText>
                </DetailItem>
                <DetailItem>
                  <FaHouse className="w-5 h-5 text-gray-700" />
                  <DetailText>Single Home</DetailText>
                </DetailItem>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 pr-11">
              <Button>View Details</Button>
              <Price>$949,000</Price>
            </div>
          </DetailsContent>
        </PropertyDetails>
      </PropertyContent>
    </PropertyContainer>
  );
}

export default Property;