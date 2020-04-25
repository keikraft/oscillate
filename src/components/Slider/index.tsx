import React from 'react';
import styled from 'styled-components';

import {secondaryColor, primaryColor} from 'components/GlobalStyles';

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;
const SliderLabel = styled.label`
  margin-bottom: 8px;
  color: ${secondaryColor};
  font-size: 14px;
`;
const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background-color: ${secondaryColor};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${primaryColor};
  }
  &:focus {
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    box-shadow: none;
    border: 1px solid ${secondaryColor};
    border-radius: 25px;
    background: black;
    cursor: pointer;
  }
  &:hover::-webkit-slider-thumb {
    border: 1px solid ${primaryColor};
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    box-shadow: none;
    border: 1px solid ${secondaryColor};
    border-radius: 25px;
    background: black;
    cursor: pointer;
  }
  &:hover::-moz-range-thumb {
    border: 1px solid ${primaryColor};
  }
`;

type SliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: string) => void;
};

export const Slider: React.FC<SliderProps> = ({
  label,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange,
}) => {
  return (
    <SliderWrapper>
      <SliderLabel>{label}</SliderLabel>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </SliderWrapper>
  );
};
