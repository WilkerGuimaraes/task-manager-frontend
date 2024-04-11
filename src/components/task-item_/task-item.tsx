import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { ChangeEvent } from "react";
import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CheckboxLabel,
  Checkmark,
  TaskDescription,
  TaskItemContainer,
} from "./task-item.style";

interface TaskItemProps {
  task: {
    id: string;
    description: string;
    isCompleted: boolean;
  };
  fetchTasks: () => void;
}

export function TaskItem({ task, fetchTasks }: TaskItemProps) {
  async function handleTaskDeletion() {
    try {
      await axios.delete(`http://localhost:3333/tasks/${task.id}`);

      await fetchTasks();

      toast.success("A tarefa foi removida com sucesso!", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleTaskCompletionChange(e: ChangeEvent<HTMLInputElement>) {
    try {
      await axios.patch(`http://localhost:3333/tasks/${task.id}`, {
        is_completed: e.target.checked,
      });

      await fetchTasks();

      toast.success("A tarefa foi modificada com sucesso!", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskItemContainer>
      <TaskDescription>
        <CheckboxLabel $isCompleted={task.isCompleted}>
          <input
            type="checkbox"
            defaultChecked={task.isCompleted}
            onChange={(e) => handleTaskCompletionChange(e)}
          />
          <Checkmark $isCompleted={task.isCompleted}></Checkmark>
          <p className="description">{task.description}</p>
        </CheckboxLabel>
      </TaskDescription>

      <div className="delete">
        <AiFillDelete size={18} color="#f97474" onClick={handleTaskDeletion} />
      </div>
    </TaskItemContainer>
  );
}
