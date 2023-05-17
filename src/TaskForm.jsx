import React, { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
