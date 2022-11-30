import React from "react";
import { useDispatch } from "react-redux";
import { changeTaskStatus, deleteTask } from "../store/tasks";
import {
  TASK_TODO_STATUS,
  TASK_DONE_STATUS,
  TASK_IN_PROGRESS_STATUS,
} from "../constant/tasks";

const TaskCard = (props) => {
  const { task, cssClass } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  const handleStatus = (nextStatus) => {
    dispatch(changeTaskStatus({ id: task.id, status: nextStatus }));
  };

  const renderButton = (status) => {
    switch (status) {
      case TASK_TODO_STATUS:
        return (
          <div>
            <button onClick={(e) => handleStatus(TASK_IN_PROGRESS_STATUS)}>
              Move to In Progress
            </button>
            <button onClick={(e) => handleStatus(TASK_DONE_STATUS)}>
              Move to Done
            </button>
          </div>
        );

      case TASK_IN_PROGRESS_STATUS:
        return (
          <div>
            <button onClick={(e) => handleStatus(TASK_TODO_STATUS)}>
              Move to To Do
            </button>
            <button onClick={(e) => handleStatus(TASK_DONE_STATUS)}>
              Move to Done
            </button>
          </div>
        );

      case TASK_DONE_STATUS:
        return (
          <div>
            <button onClick={(e) => handleStatus(TASK_TODO_STATUS)}>
              Move to To Do
            </button>
            <button onClick={(e) => handleStatus(TASK_IN_PROGRESS_STATUS)}>
              Move to In Progress
            </button>
          </div>
        );
    }
  };

  return (
    <div className={`${cssClass}-task-card task-card`}>
      <span className="task-name">{task.name}</span> <span>{task.status}</span>
      <p>{task.desc}</p>
      <div>
        <button onClick={handleDelete}>Delete</button>
        {renderButton(task.status)}
      </div>
    </div>
  );
};

export default TaskCard;
