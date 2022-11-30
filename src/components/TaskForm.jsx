import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasks";

const TaskForm = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        name,
        desc,
      })
    );
    setName("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Description:{" "}
        <input
          type="dec"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
