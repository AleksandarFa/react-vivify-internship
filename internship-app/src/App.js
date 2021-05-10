import React from "react";
import { FETCH_USERS_REQUESTED } from "./actions/constants";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Test</h1>
      <button
        onClick={() => {
          dispatch({ type: FETCH_USERS_REQUESTED });
        }}
      >
        fetchUsers
      </button>
      {users.users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
