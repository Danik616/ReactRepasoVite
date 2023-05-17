import TaskList from "./Tasklist";
import TaskForm from "./TaskForm";
import { tasks as data } from "./Tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleTask) {
    setTasks([
      ...tasks,
      {
        title: titleTask,
        description: "algo",
        id: tasks.length,
      },
    ]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
