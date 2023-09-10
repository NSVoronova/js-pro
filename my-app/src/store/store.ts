import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  theme: "light",
  modalInfo: {
    isOpen: false,
    id: null
  },
  posts: [],
  activeTab: "All",
  isLoading: false,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME" : {
      return {
        ...state,
        theme: action.payload,
      }
    }
    case "TOGGLE_MODAL" : {
      return {
        ...state,
        modalInfo:{
          isOpen: action.openModal,
          id: action.payload,
        },
      }
    }
    case "SET_POSTS" : {
      return {
        ...state,
        posts: action.payload
      }
    }
    case "ADD_LIKE" : {
      return {
        ...state,
        posts: state.posts.map((post: {id: number, likes?: number}) => {
          if (post.id === action.payload) {
            post = {...post, likes: post.likes !== undefined ? post.likes + 1 : 1};
            return post;
          }
          return post;
        })
      }
    }
    case "REMOVE_LIKE" : {
      return {
        ...state,
        posts: state.posts.map((post: {id: number, likes?: number}) => {
          if (post.id === action.payload) {
           post = {...post, likes: post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0};
           return post;
          }
          return post;
        })
      }
    }
    case "ADD_TO_FAVORITE" : {
      return {
        ...state,
        posts: state.posts.map((post: {id: number, isFavorite?: boolean}) => {
          if (post.id === action.payload) {
           post = {...post, isFavorite: post.isFavorite !== undefined && post.isFavorite === true ? post.isFavorite = false : true};
           return post;
          }
          return post;
        })
      }
    }
    case "SET_ACTIVE_TAB" : {
      return {
        ...state,
        activeTab: action.payload,
      }
    }
    case "SET_LOADING" : {
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    }
    default :
      return state;
  }
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;