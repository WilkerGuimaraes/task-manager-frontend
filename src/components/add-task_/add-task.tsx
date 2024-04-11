import { ChangeEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CustomInput } from "../custom-imput_/custom-input";
import { CustomButtom } from "../custom-buttom_/custom-button";

import { AddTaskContainer } from "./add-task.style";

interface AddTaskProps {
  fetchTasks: () => void;
}

export function AddTask({ fetchTasks }: AddTaskProps) {
  const [task, setTasks] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTasks(e.target.value);
  }

  async function handleTaskAddition() {
    try {
      if (task.length === 0) {
        return toast.error(
          "A tarefa precisa de uma descrição para ser adicionada.",
          {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
          }
        );
      }

      await axios.post("http://localhost:3333/tasks", {
        description: task,
        isCompleted: false,
      });

      await fetchTasks();

      setTasks("");

      toast.success("A tarefa foi adicionada com sucesso!", {
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
    <AddTaskContainer>
      <CustomInput
        label="Adicionar Tarefa..."
        value={task}
        onChange={onChange}
      />
      <CustomButtom onClick={handleTaskAddition}>
        <FaPlus size={14} color="#fff" />
      </CustomButtom>
    </AddTaskContainer>
  );
}
