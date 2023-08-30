import styled from "styled-components"

export const StyledModalDiv = styled.div<{openModal?: boolean}>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => props.openModal === false ? "scale(0)" : "scale(1)"};
`

export const StyledModalContentDiv = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`