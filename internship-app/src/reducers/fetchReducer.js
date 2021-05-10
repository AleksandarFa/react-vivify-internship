import { FETCH_USERS } from "../actions/constants";

const initialState = {
  users: [],
};

const fetchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
