import { useState } from "react";
import CheckBox from "../ui/checkbox";
import DeleteButton from "../ui/delete-btn";
import styles from "./task.module.css";
const Task = function ({ task, onDelete, onChecked }) {
  const [isChecked, setIsChecked] = useState(task.state === "completed");
  function handleCheck() {
    setIsChecked((state) => !state);
    onChecked?.(task.id);
  }
  return (
    <li className={styles.task}>
      <CheckBox isChecked={isChecked} handleCheck={handleCheck} />
      <span
        className={`${styles["task-content"]} ${isChecked && styles.checked}`}
      >
        {task.task}
      </span>
      <DeleteButton onClick={() => onDelete(task.id)} />
    </li>
  );
};
export default Task;
