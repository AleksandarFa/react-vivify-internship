import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODOS_REQUESTED } from "../actions/constants";

const Todos = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Fetch todos here</h1>
      <button
        onClick={() => {
          dispatch({ type: FETCH_TODOS_REQUESTED });
        }}
      >
        Fetch todos
      </button>
      {todo.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        );
      })}
      {}
    </div>
  );
};

export default Todos;
