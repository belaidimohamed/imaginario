import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  padding: 13px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: fit-content;
  border-radius: ${({ borderRadius }) => {
    switch (borderRadius) {
      case 'left':
        return '12px 0 0 12px';
      case 'right':
        return '0 12px 12px 0';
      case 'both':
        return '12px';
      case 'none':
      default:
        return '0';
    }
  }};
  background-color: ${({ theme, variant }) =>
    variant === 'neutral'
      ? theme.colors.background.hover
      : theme.colors[variant].main};
  cursor: pointer;
  font-size: calc(14px + 0.2vw);
  color: ${({ theme, variant }) =>
    variant === 'neutral' ? theme.colors.text.primary : theme.colors[variant].contrastText};
`;

export default function Button({ onPress, variant = 'neutral', borderRadius = 'both', children }) {
  return (
    <StyledButton onClick={onPress} variant={variant} borderRadius={borderRadius}>
      {children}
    </StyledButton>
  );
}
