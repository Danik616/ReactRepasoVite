import React, { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask(title)
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
