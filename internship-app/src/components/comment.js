import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  POST_COMMENT_REQUESTED,
  CREATE_COMMENT_REQUESTED,
} from "../actions/constants";

const Comment = () => {
  // const comment = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment("dddd");
    e.preventDefault();
  };
  return (
    <form onSubmit={handleChange}>
      <label>Comment:</label> {JSON.stringify(comment)}
      <input type="text" placeholder="Write short comment here..."></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Comment;
