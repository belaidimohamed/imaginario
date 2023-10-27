import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 40px; /* Reduced width */
  height: 20px; /* Reduced height */
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme, variant, checked }) =>
    checked ? theme.colors[variant].main : 'grey'};
  border-radius: 20px; /* Adjusted border radius */
  transition: 0.4s;
  
  &::before {
    position: absolute;
    content: "";
    height: 20px; /* Reduced height */
    width: 20px; /* Reduced width */
    left: ${({ checked }) => (checked ? '2px' : '2px')};
    bottom: 0px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input`
  display: none;

  &:checked + ${Slider} {
    background-color: ${({ theme, variant }) => theme.colors[variant].main};
    &::before {
      transform: translateX(22px);
    }
  }
`;

const Switch = ({ checked, onChange, variant = 'primary' }) => {
  return (
    <SwitchContainer>
      <Checkbox variant={variant} type="checkbox" checked={checked} onChange={onChange} />
      <Slider variant={variant} checked={checked} />
    </SwitchContainer>
  );
};

export default Switch;
