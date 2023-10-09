import { IPost } from "src/components/Posts/PostsList";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "src/axiosConfig/axiosConfig";

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
export const SET_USER_CREATOR = (payload: {
  username: string;
  email: string;
  id: number;
}) => ({
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
      let response = await  instance.get("/blog/posts/?limit=12");
      let posts = response.data.results;
      dispatch(SET_POSTS_CREATOR(posts));
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
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      console.log(response);
      let jsonUser = await response.json();
      let user = jsonUser;
      dispatch(SET_USER_CREATOR(user));
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const ACTIVATE_USER = (
  navigate: any,
  payload: { uid: string; token: string }
) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      dispatch({ type: "SET_ACTIVATION", payload: true });
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
      dispatch({ type: "SET_CURRENT_POST", payload: jsonPost });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const SIGN_IN = (
  navigate: any,
  payload: { email: string; password: string }
) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      let responseJson: { refresh: string; access: string } =
        await response.json();
      if (responseJson.refresh) {
        localStorage.setItem("token", JSON.stringify(responseJson));
        await navigate("/posts");
      } else {
        alert("Неверно введены данные");
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const GET_USER = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    try {
      let token: string | null = localStorage.getItem("token");
      if (token) {
        let objectToken = JSON.parse(token);
        let response = await fetch(
          "https://studapi.teachmeskills.by/auth/users/me",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${objectToken.access}`,
            },
          }
        );
        let responseUser = await response.json();
        localStorage.setItem("userInfo", JSON.stringify(responseUser));
      }
    } catch (err) {
      console.log(err);
    }
  };
};


export const CREATE_POST  = (
  payload: { title: string; lessonNumber: number; image: any; description: string; text: string }
) => {
  
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());    
    try {
      const formdata = new FormData();
      formdata.append("title", payload.title);
      formdata.append("lesson_num", payload.lessonNumber.toString());
      formdata.append("image", payload.image[0].file);
      formdata.append("description", payload.description);
      formdata.append("text", payload.text);
      console.log(formdata);
    let response = await  instance.post("blog/posts/", formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
      let post = response.data.results;
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const FETCH_MY_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response = await  instance.post("blog/posts/my_posts?limit=10", {
          headers: {
    'Content-Type': 'application/json',
  },
      });
      console.log(response.data.results)
      dispatch({ type: "SET_MY_POSTS", payload: response.data.results });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};