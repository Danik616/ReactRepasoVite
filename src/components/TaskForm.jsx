import React, { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>Add Task</button>
      </form>
    </>
  );
}

export default TaskForm;
