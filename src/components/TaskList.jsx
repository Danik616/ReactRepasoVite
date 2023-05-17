import TaskCard from "./TaskCard";

function Tasklist({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default Tasklist;
