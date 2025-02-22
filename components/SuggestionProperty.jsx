"use client";
import Property from "@/components/Property";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  padding: 2.5rem 0;
  margin-top: 1.25rem;
`;

const Title = styled.h2`
  color: #4a4a4a;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: sans-serif;
`;

const Explore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExploreText = styled.p`
  color: #4a4a4a;
  font-size: 1.25rem;
`;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled.div`
  padding-right: 1.25rem;
  &:hover {
    color: #4a4a4a;
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 1.25rem;
  max-width: 1280px;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;
`;

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
    <Container>
      <Header>
        <Title>Homes For You</Title>
        <Explore>
          <ExploreText>Explore All</ExploreText>
          <FaArrowRight className="w-5 h-5" />
        </Explore>
      </Header>
      <SliderContainer>
        <ArrowButton>
          <FaArrowAltCircleLeft className="w-10 h-10" onClick={slideLeft} />
        </ArrowButton>
        <Slider id="slider">
          <Property image="property-1.jpeg" />
          <Property image="property-2.jpg" />
          <Property image="property-3.jpg" />
          <Property image="property-4.jpg" />
          <Property image="property-5.jpeg" />
          <Property image="property-5.jpeg" />
          <Property image="property-5.jpeg" />
        </Slider>
        <ArrowButton>
          <FaArrowAltCircleRight className="w-10 h-10" onClick={slideRight} />
        </ArrowButton>
      </SliderContainer>
    </Container>
  );
}

export default SuggestionProperty;