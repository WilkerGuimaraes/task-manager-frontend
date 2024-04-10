import {
  CheckboxLabel,
  Checkmark,
  TaskDescription,
  TaskItemContainer,
} from "./task-item.style";
import { AiFillDelete } from "react-icons/ai";

interface TaskItemProps {
  task: {
    description: string;
    isCompleted: boolean;
  };
}

export function TaskItem({ task }: TaskItemProps) {
  return (
    <TaskItemContainer>
      <TaskDescription>
        <CheckboxLabel $isCompleted={task.isCompleted}>
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <Checkmark $isCompleted={task.isCompleted}></Checkmark>
          <p className="description">{task.description}</p>
        </CheckboxLabel>
      </TaskDescription>

      <div className="delete">
        <AiFillDelete size={18} color="#f97474" />
      </div>
    </TaskItemContainer>
  );
}
