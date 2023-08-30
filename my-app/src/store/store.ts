import { legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  theme: "light",
  modalInfo: {
    isOpen: false,
    id: null
  }
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
          posts: action.posts
        },
      }
    }
    default :
      return state;
  }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;