import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import {
  CompletedTaskContainer,
  LastTaskContainer,
  TaskContainer,
} from "./tasks.style";

interface TasksProps {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  async function fetchTasks() {
    try {
      const { data } = await axios.get("http://localhost:3333/tasks");
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => !task.isCompleted);
  }, [tasks]);

  const copmletedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted);
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContainer>
      <h2>Minhas Tarefas</h2>

      <LastTaskContainer>
        <h3>Últimas tarefas</h3>
        <div className="last-tasks-list">
          {lastTasks.map((lastTask) => (
            <p>{lastTask.description}</p>
          ))}
        </div>
      </LastTaskContainer>

      <CompletedTaskContainer>
        <h3>Tarefas Concluídas</h3>
        <div className="completed-tasks-list">
          {copmletedTasks.map((completedTask) => (
            <p>{completedTask.description}</p>
          ))}
        </div>
      </CompletedTaskContainer>
    </TaskContainer>
  );
}
