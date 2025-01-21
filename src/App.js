import "./App.css";
import Logo from "./components/ui/logo";
import Input from "./components/ui/input";
import Tasks from "./components/tasks/tasks";
import { v7 as uuid } from "uuid";
import { useState } from "react";
import Tabs from "./components/tabs/tabs";

let tasks = {
  personal: [
    {
      id: uuid(),
      createdAt: Date.now(),
      task: "personal 1",
      state: "completed",
      modify: [],
    },
    {
      id: uuid(),
      createdAt: Date.now(),
      task: "personal 2",
      state: "pending",
      modify: [],
    },
    {
      id: uuid(),
      createdAt: Date.now(),
      task: "personal 3",
      state: "pending",
      modify: [],
    },
  ],
  professional: [
    {
      id: uuid(),
      createdAt: Date.now(),
      task: "professional 1",
      state: "pending",
      modify: [],
    },
    {
      id: uuid(),
      createdAt: Date.now(),
      task: "professional 2",
      state: "pending",
      modify: [],
    },
    {
      id: uuid(),
      createdAt: Date.now(),
      task: "professional 3",
      state: "pending",
      modify: [],
    },
  ],
};

function App() {
  const [activeTab, setActiveTab] = useState("personal");
  const [personalTasks, setPersonalTask] = useState(tasks.personal);
  const [professionalTasks, setprofessionalTasks] = useState(
    tasks.professional
  );
  const [newTask, setNewTask] = useState("");
  console.log(personalTasks);
  function handleAdd() {
    if (!newTask.trim()) return;
    if (activeTab === "personal") {
      setPersonalTask((personalTasks) => [
        ...personalTasks,
        { id: uuid(), task: newTask, createdAt: Date.now(), modify: [] },
      ]);
    } else {
      setprofessionalTasks((professionalTasks) => [
        ...professionalTasks,
        { id: uuid(), task: newTask, createdAt: Date.now(), modify: [] },
      ]);
    }
    setNewTask("");
  }
  function handleDelete(id) {
    if (activeTab === "personal") {
      setPersonalTask((personalTasks) =>
        personalTasks.filter((task) => task.id != id)
      );
    } else {
      setprofessionalTasks((professionalTasks) =>
        professionalTasks.filter((task) => task.id != id)
      );
    }
  }
  function handleChecked(id) {
    if (activeTab === "personal") {
      setPersonalTask((personalTasks) =>
        personalTasks.map((task) =>
          task.id == id ? { ...task, state: toggleTaskState(task.state) } : task
        )
      );
    } else {
      setprofessionalTasks((professionalTasks) =>
        professionalTasks.map((task) =>
          task.id == id ? { ...task, state: toggleTaskState(task.state) } : task
        )
      );
    }
  }
  function deleteChecked() {
    if (activeTab === "personal") {
      setPersonalTask((personalTasks) =>
        personalTasks.filter((task) => task.state != "completed")
      );
    } else {
      setprofessionalTasks((professionalTasks) =>
        professionalTasks.filter((task) => task.state != "completed")
      );
    }
  }
  function toggleTaskState(state) {
    if (state === "completed") {
      return "pending";
    } else {
      return "completed";
    }
  }
  return (
    <>
      <nav style={{ backgroundColor: "var(--secondary-background)" }}>
        <Logo />
        <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
      </nav>
      <main>
        <Input
          placeholder="What do you need to do?"
          text={newTask}
          setText={setNewTask}
          onAdd={handleAdd}
        />
        {activeTab === "personal" && (
          <Tasks
            tasks={personalTasks}
            onDelete={handleDelete}
            onChecked={handleChecked}
            deleteChecked={deleteChecked}
          />
        )}
        {activeTab === "professional" && (
          <Tasks
            tasks={professionalTasks}
            onDelete={handleDelete}
            onChecked={handleChecked}
            deleteChecked={deleteChecked}
          />
        )}
      </main>
    </>
  );
}

export default App;
