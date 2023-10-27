import React from 'react'
import { styled } from 'styled-components'

const Box = styled.div`
  border-radius:8px;
  height:30px;
  width:30px;
  background-color:${({ color }) => color};
  border:1px solid ${({ theme }) => theme.colors.text.primary}33;

`
export default function ColorBox({color='purple'}) {
  return (
    <Box color={color} />
  )
}
