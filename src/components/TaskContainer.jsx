import React from "react";
import TaskCard from "./TaskCard";
import { TASK_TODO_STATUS, TASK_DONE_STATUS } from "../constant/tasks";

const TaskContainer = (props) => {
  const { header, taskList } = props;

  const getClassName = (status) =>
    status === TASK_TODO_STATUS
      ? "todo"
      : status === TASK_DONE_STATUS
      ? "in-progress"
      : "done";

  return (
    <div className="task-container">
      <h3>{header}</h3>
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
