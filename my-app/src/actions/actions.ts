import { IPost } from "src/components/Posts/PostsList";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useNavigate } from "react-router-dom";



export const TOGGLE_THEME_CREATOR = (payload: string) => ({
  type: "TOGGLE_THEME",
  payload,
});

export const TOGGLE_MODAL_CREATOR = (
  openModal: boolean,
  payload: number | null
) => ({ type: "TOGGLE_MODAL", openModal, payload });

export const ADD_LIKE_CREATOR = (payload: number) => ({
  type: "ADD_LIKE",
  payload,
});

export const REMOVE_LIKE_CREATOR = (payload: number) => ({
  type: "REMOVE_LIKE",
  payload,
});

export const ADD_TO_FAVORITE_CREATOR = (payload: number) => ({
  type: "ADD_TO_FAVORITE",
  payload,
});

export const SET_POSTS_CREATOR = (payload: IPost[]) => ({
  type: "SET_POSTS",
  payload,
});

export const SET_LOADING_CREATOR = () => ({ type: "SET_LOADING" });
export const SET_USER_CREATOR = (payload: {username: string, email: string, id: number}) => ({
  type: "SET_USER",
  payload,
});

export const SET_ACTIVE_TAB_CREATOR = (payload: string) => ({
  type: "SET_ACTIVE_TAB",
  payload,
});

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=12"
      );
      let jsonPosts = await response.json();
      console.log(jsonPosts.results);
      dispatch(SET_POSTS_CREATOR(jsonPosts.results));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const CREATE_USER = (payload: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload)}
      );
      console.log(response);
      let jsonUser = await response.json();
      let user = jsonUser;
      dispatch(SET_USER_CREATOR(user))
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const ACTIVATE_USER = (navigate: any, payload: { uid: string, token: string}) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload)}
      );
        dispatch({type: "SET_ACTIVATION", payload: true});
        navigate("/success");
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const FETCH_POST = (id: number) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/${id}`
      );
      let jsonPost = await response.json();
      dispatch({type: "SET_CURRENT_POST", payload: jsonPost} )
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

