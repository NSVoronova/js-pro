import React, { ReactNode} from "react";
import { StyledModalContentDiv, StyledModalDiv } from "./StyledModal";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_MODAL_CREATOR } from "src/actions/actions";

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
      $openModal={modalInfo.isOpen}
      onClick={() => dispatch(TOGGLE_MODAL_CREATOR(false,null))}
    >
        <StyledModalContentDiv onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContentDiv>
      
    </StyledModalDiv>
  );
};

export default ModalWindow;
