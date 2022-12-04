import React from "react";
import TaskCard from "./TaskCard";
import {
  TASK_TODO_STATUS,
  TASK_DONE_STATUS,
  TASK_IN_PROGRESS_STATUS,
} from "../constant/tasks";
import { changeTaskStatus } from "../store/tasks";
import { useDispatch } from "react-redux";

const TaskContainer = (props) => {
  const { header, taskList } = props;
  const dispatch = useDispatch();
  const nextStatus =
    header === "Todo"
      ? TASK_TODO_STATUS
      : header === "Done"
      ? TASK_DONE_STATUS
      : TASK_IN_PROGRESS_STATUS;

  const getClassName = (status) =>
    status === TASK_TODO_STATUS
      ? "todo"
      : status === TASK_DONE_STATUS
      ? "in-progress"
      : "done";

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, nextStatus) => {
    const dropableELementId = e.dataTransfer.getData("id");
    dispatch(changeTaskStatus({ id: dropableELementId, status: nextStatus }));
  };

  return (
    <div
      className="task-container"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, nextStatus)}
    >
      <h3 align="center">{header}</h3>
      <hr />
      <div>
        {taskList.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            cssClass={getClassName(task.status)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
