import { IPost } from "src/components/Posts/PostsList";

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
})

export const SET_LOADING_CREATOR = () => ({type: "SET_LOADING"});

export const SET_ACTIVE_TAB_CREATOR = (payload: string) => ({
  type: "SET_ACTIVE_TAB",
  payload,
});
