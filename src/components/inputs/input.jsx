import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  padding: 15px 20px;
  font-size: calc(14px + 0.2vw);
  border: 1px solid ${({ theme, variant }) => theme.colors.background[variant]};
  background-color: ${({ theme, variant }) => theme.colors.background[variant]};
  color: ${({ theme }) => theme.colors.text.primary}; 
  border-radius: ${({ borderRadius }) => {
    switch (borderRadius) {
      case 'left':
        return '6px 0 0 6px';
      case 'right':
        return '0 6px 6px 0';
      case 'both':
        return '6px';
      case 'none':
      default:
        return '0';
    }
  }};
  font-size: 14px;
  width: ${({ width }) => width} ;
  height: ${({ height }) => height} ;
  transition: border-color 0.3s, background-color 0.3s;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme, variant }) => theme.colors.background[variant]};
    background-color: ${({ theme, variant }) => theme.colors.background[variant]};
    outline: none;
  }
`;

export default function Input({ variant = 'default', width='auto', height='auto' ,borderRadius = 'both', ...rest }) {
  return <StyledInput variant={variant} width={width} borderRadius={borderRadius} height={height} {...rest} />;
}
