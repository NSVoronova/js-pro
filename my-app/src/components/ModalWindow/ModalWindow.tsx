import React, { ReactNode, useEffect, useState } from "react";
import { StyledModalContentDiv, StyledModalDiv } from "./StyledModal";
import { useSelector, useDispatch } from "react-redux";

interface IModal {
  className?: string,
  children?: ReactNode,
  onClick?: () => {};
}
const ModalWindow: React.FC<IModal> = ({children}) => {
  const modalInfo: { isOpen: boolean; id: number } = useSelector(
    (state: { modalInfo: { isOpen: boolean; id: number } }) => state.modalInfo
  );

  const dispatch = useDispatch();
  return (
    <StyledModalDiv
      openModal={modalInfo.isOpen}
      onClick={() => dispatch({ type: "TOGGLE_MODAL", openModal: false, payload: null })}
    >
        <StyledModalContentDiv onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContentDiv>
      
    </StyledModalDiv>
  );
};

export default ModalWindow;
