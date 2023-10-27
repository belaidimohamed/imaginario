import styled, { css } from 'styled-components';

// export const Container = styled.div`
//   display:contents;
// `
export const Sidebar = styled.div`
  width: calc(7% + 160px);
  overflow:hidden;
  padding:20px;
  flex: 0 0 18%;
  height:100vh;
  background-color:${({ theme }) => theme.colors.background.paper};
`;

export const Logo = styled.img`
  width:168px;
  height:47px;
`;

export const ItemContainer = styled.div`
  display:flex;
  align-items:flex-start;
  justify-content:center;
  gap:15px;
  flex-direction:column;
  padding-top:40px;
`;
export const Item = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap:10px;
  border-radius: 12px;
  background-color:${({ theme, active }) => active ? theme.colors.background.hover : theme.colors.background.paper};
  padding: 9px 18px 9px 18px;
  width: calc(136px + 3vw);
  height: calc(16px + 0.5vh);
  cursor:pointer;
`;
export const Footer = styled.div`
  position:absolute;
  display:flex;
  align-items:flex-start;
  justify-content:flex-end;
  gap:15px;
  flex-direction:column;
  bottom:40px;
`;