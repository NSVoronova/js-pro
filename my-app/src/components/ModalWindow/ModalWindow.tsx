import React, { ReactNode, useEffect, useState } from "react";
import { StyledModalContentDiv, StyledModalDiv } from "./StyledModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IPost } from "../Posts/PostsList";
import PostViewPage from "../Posts/PostViewPage/PostViewPage";
import MiddlePost from "../Posts/MiddlePost/MiddlePost";
import { Link } from "react-router-dom";

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
