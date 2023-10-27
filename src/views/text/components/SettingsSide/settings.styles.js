import { styled } from "styled-components";

export const MainContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};;
  border-radius: 16px;
  flex: 1;
  padding:20px;
  margin:20px;
  min-height:300px;
`;

export const ColorContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  background-color: ${({ theme }) => theme.colors.background.hover};;
  border-radius: 6px;
  padding:10px 20px 10px 20px;
`