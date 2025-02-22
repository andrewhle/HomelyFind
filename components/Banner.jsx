import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import styled from "@emotion/styled";

const BannerContainer = styled.div`
  padding: 50px 0;
  display: flex;
  background-color: #ffeb99;
  border-radius: 1.5rem;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
`;

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: flex-start;
  max-width: 44%;
`;

const BannerTitle = styled.h1`
  color: #4a4a4a;
  font-size: 50px;
  font-family: sans-serif;
  font-weight: 600;
`;

const BannerDescription = styled.p`
  width: 85%;
  font-family: sans-serif;
  font-size: 1.25rem;
  color: #7a7a7a;
`;

const SearchContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.75rem;
  width: 60%;
`;

const SearchField = styled.div`
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
  }
`;

const SearchSelect = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
  }
`;

const SearchButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: #4a4a4a;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
  }
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>
          <BannerTitle>Find your perfect home</BannerTitle>
          <BannerDescription>
            Your personal gateway to finding the home you've always imagined.
            Connect you with a space that resonates to your unique style and
            comfort needs.
          </BannerDescription>
          <SearchContainer>
            <SearchField>
              <label htmlFor="city_street" className="sr-only">
                Address
              </label>
              <div className="relative rounded-lg shadow-sm">
                <SearchInput
                  id="city_street"
                  placeholder="Address, city, or ZIP code"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <CiLocationOn className="h-6 w-6 font-bold text-gray-500" />
                </div>
              </div>
            </SearchField>
            <SearchField>
              <label htmlFor="property_type" className="sr-only">
                Home Type
              </label>
              <SearchSelect id="property_type" name="property_type">
                <option selected disabled hidden>
                  Property Type
                </option>
                <option>Houses</option>
                <option>Townhomes</option>
                <option>Condos</option>
                <option>Apartments</option>
              </SearchSelect>
            </SearchField>
            <SearchField>
              <label htmlFor="price_range" className="sr-only">
                Price Range
              </label>
              <SearchSelect id="price_range" name="price_range">
                <option>Price Range</option>
              </SearchSelect>
            </SearchField>
            <SearchButton type="submit">Search</SearchButton>
          </SearchContainer>
        </BannerText>
        <div className="flex">
          <Image
            src="/modern-house.png"
            width={900}
            height={900}
            objectFit="fill"
            objectPosition="center"
            alt="Banner Image"
          />
        </div>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;