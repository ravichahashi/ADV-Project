import {
  SET_CHILD,
  SET_CHILDREN,
  ADD_CHILD,
  SET_QUESTIONS,
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT,
} from "../types";

const initialState = {
  screams: [],
  scream: {},
  questions: [],
  question: {},
  children: [],
  child: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CHILD:
      return {
        ...state,
        child: action.payload,
        loading: false,
      };
    case SET_CHILDREN:
      return {
        ...state,
        children: action.payload,
        loading: false,
      };
    case ADD_CHILD:
      return {
        ...state,
        children: [action.payload, ...state.children],
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };

    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case SET_SCREAM:
      return {
        ...state,
        scream: action.payload,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      if (state.scream.screamId === action.payload.screamId) {
        state.scream = action.payload;
      }
      return {
        ...state,
      };
    case DELETE_SCREAM:
      index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(index, 1);
      return {
        ...state,
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [action.payload, ...state.screams],
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [action.payload, ...state.scream.comments],
        },
      };
    default:
      return state;
  }
}
