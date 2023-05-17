import TaskCard from "./TaskCard";

function Tasklist({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default Tasklist;
