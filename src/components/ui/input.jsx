import styles from "./input.module.css";
const Input = function ({ text, setText, onAdd, placeholder = "" }) {
  return (
    <div className={styles["add-new-task-input"]}>
      <input
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button disabled={!text?.trim()} onClick={onAdd} className="uppercase">
        add
      </button>
    </div>
  );
};
export default Input;
