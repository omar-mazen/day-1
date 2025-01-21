import styles from "./checkbox.module.css";
const CheckBox = function ({ isChecked, handleCheck }) {
  return (
    <span style={{ display: "inline-block" }} onClick={handleCheck}>
      <span className={`${styles.checkbox} ${isChecked && styles.checked}`}>
        {isChecked && "✓"}
      </span>
    </span>
  );
};
export default CheckBox;
