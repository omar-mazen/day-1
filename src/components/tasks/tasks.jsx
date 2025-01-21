import Task from "./task";
import styles from "./tasks.module.css";

const Tasks = function ({ tasks, onDelete, onChecked, deleteChecked }) {
  return (
    <div className={styles.tasks}>
      <div className={styles.actions}>
        <span onClick={deleteChecked} className={styles.action}>
          ❌clear completed
        </span>
      </div>
      <ul>
        {!tasks.length && <li>there is no tasks. add new task</li>}
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDelete={onDelete}
            onChecked={onChecked}
          />
        ))}
      </ul>
    </div>
  );
};
export default Tasks;
