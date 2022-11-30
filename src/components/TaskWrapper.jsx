import React from "react";
import TaskContainer from "./TaskContainer";
import { useSelector } from "react-redux";
import TaskForm from "./TaskForm";

import {
  TASK_TODO_STATUS,
  TASK_IN_PROGRESS_STATUS,
  TASK_DONE_STATUS,
} from "../constant/tasks";

const TaskWrapper = () => {
  const tasks = useSelector((state) => state.tasks);
  const todoList = [];
  const inProgressList = [];
  const doneList = [];

  Object.values(tasks).forEach((task) => {
    switch (task.status) {
      case TASK_TODO_STATUS:
        todoList.push(task);
        break;

      case TASK_IN_PROGRESS_STATUS:
        inProgressList.push(task);
        break;

      case TASK_DONE_STATUS:
        doneList.push(task);
    }
  });

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <TaskForm />
      </div>
      <div className="task-wrapper">
        <div className="todo-task-conatiner">
          <TaskContainer header="Todo" taskList={todoList} />
        </div>
        <div className="working-task-conatiner">
          <TaskContainer header="In Progress" taskList={inProgressList} />
        </div>
        <div className="done-task-conatiner">
          <TaskContainer header="Done" taskList={doneList} />
        </div>
      </div>
    </div>
  );
};

export default TaskWrapper;
