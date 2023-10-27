import styled, { css } from 'styled-components';

export const WideContainer = styled.div`
  width: 100%;
  overflow:hidden;
  margin:30px;
  height:50px;
  background-color:${({ theme }) => theme.colors.background.paper};

  display: flex;
  padding: 15px 50px 15px 40px;
  justify-content: space-between;
  align-items: center;

  border-radius: 18px;
  border: 1px solid #1D1D1D;
`;
export const Clickable = styled.div`
  cursor:pointer;
  display:flex;
  gap:10px;
  align-items:center;
`;
export const Divider = styled.div`
  flex:1;
  width:50%;
  padding:10px;
`
export const Box = styled.div`
  padding:5px 20px 5px 20px;
  border:1px solid ${({ theme }) => theme.colors.text.primary}33;
  border-radius:5px;
`
