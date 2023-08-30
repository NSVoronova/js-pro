import styled from "styled-components";



export const StyledMain = styled.main`
  padding-top: 60px;
`
export const StyledFooter = styled.footer<{theme: "light" | "dark"}>`
   background-color: ${props => props.theme === "light" ? "rgb(235, 231, 231)" : "rgba(128, 128, 128, 0.9)"};
`

export const StyledWrapper = styled.div<{theme: "light" | "dark"}>`
 height: 100vh;
  overflow-y: auto;
  background-color: ${props => props.theme === "light" ? "rgb(235, 231, 231)" : "rgba(128, 128, 128, 0.9)"};
`