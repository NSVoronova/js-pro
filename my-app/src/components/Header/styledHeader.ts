import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
z-index: 2;
width: 100%;
`
export const StyledUserImg = styled.img`
  margin-right: 15px;
  width: 32px;
`;

export const StyledBurgerUserDiv = styled.div`
  width: 100%;
  padding: 20px;
`;

export const StyledBurgerHomeDiv = styled.div<{theme: "light" | "dark"}>`
  padding-top: 20px;
  width: 100%;
  height: calc(100vh - 48px);
  background-color: ${props => props.theme === "light" ? "white" : "rgba(128, 128, 128)"};
  color: ${props => props.theme === "light" ? "rgb(235, 231, 231)" : "rgba(128, 128, 128)"};
`;

export const StyledBurgerThemeDiv = styled.div`
  cursor: pointer;
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
export const StyledLinkSpan = styled.span<{theme: "light" | "dark"}>`
color: ${props => props.theme === "light" ? "black" : "white"}
`