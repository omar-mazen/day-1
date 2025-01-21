import styles from "./delete-btn.module.css";
const DeleteButton = function ({ onClick }) {
  return (
    <button onClick={onClick} className={styles["delete-btn"]}>
      🗑️
    </button>
  );
};
export default DeleteButton;
