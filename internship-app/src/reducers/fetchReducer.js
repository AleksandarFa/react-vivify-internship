import {
  FETCH_USERS,
  FETCH_TODOS,
  CREATE_COMMENT,
  POST_COMMENT,
} from "../actions/constants";

const initialState = {
  users: [],
  todos: [],
  comment: "",
};

const fetchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case CREATE_COMMENT:
      console.log(payload);
      return {
        ...state,
        comment: payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
