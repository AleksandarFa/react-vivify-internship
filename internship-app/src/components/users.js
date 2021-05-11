import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USERS_REQUESTED } from "../actions/constants";

const Users = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: FETCH_USERS_REQUESTED });
        }}
      >
        Fetch Users
      </button>
      {todo.users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
