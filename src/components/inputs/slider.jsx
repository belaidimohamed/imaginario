import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
`;

const SliderInput = styled.input`
  width: 100%;
`;

const Slider = ({ value, min=0, max=100, step=5, onChange }) => {
  return (
    <SliderContainer>
      <SliderInput
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </SliderContainer>
  );
};

export default Slider;
