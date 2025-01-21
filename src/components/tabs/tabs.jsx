import styles from "./tasbs.module.css";
const Tabs = function ({ activeTab, setActiveTab }) {
  return (
    <div className={styles.tabs}>
      <div
        className={`${styles.tab} ${activeTab === "personal" && styles.active}`}
        onClick={() => setActiveTab("personal")}
      >
        personal
      </div>
      <div
        className={`${styles.tab} ${
          activeTab === "professional" && styles.active
        }`}
        onClick={() => setActiveTab("professional")}
      >
        professional
      </div>
    </div>
  );
};
export default Tabs;
