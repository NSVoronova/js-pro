import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { ACTIVATE_USER } from 'src/actions/actions';
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

const ActivateUser = () => {
  const {uid, token} = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  let navigate = useNavigate();
  
  useEffect(() => {
    if ( uid && token) dispatch(ACTIVATE_USER(navigate, {uid, token}));
  }, [uid, token]);

  return (
    <div>
      ActivateUser
    </div>
  )
}

export default ActivateUser


//NzA2NQ/budasm-a72ed311910143d6f39d19b79d3de5df