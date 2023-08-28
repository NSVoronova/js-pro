import styled from "styled-components";

export const StyledUserImg = styled.img`
  width: 32px;
`;

export const StyledBurgerUserDiv = styled.div`
  width: 100%;
  padding: 20px;
`;

export const StyledBurgerHomeDiv = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: black;
`;

export const StyledBurgerThemeDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: white;
  color: black;
  width: 100%;
  text-align: center;
`;

export const StyledInOutDiv = styled.div`
background-color:  rgb(191, 191, 191);
width: 100%;
padding: 20px;
`;

export const StyledThemeDiv = styled.div<{isLight?: boolean}>`
color: ${props => props.isLight ? 'grey' : 'black'};
`
