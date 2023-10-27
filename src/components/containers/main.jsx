import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0.9;
`
export default function Main({children}) {
  return (
    <Container>{children}</Container>
  )
}