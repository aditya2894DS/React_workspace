const taskList = [
  { id: 1, task: "This is task 1" },
  { id: 2, task: "This is task 2" },
  { id: 3, task: "This is task 3" },
];

function TaskContainerCard({ weekNo, selectedDate }) {
  return (
    <div
      className={`container task-container ${selectedDate === weekNo + 1 ? "open" : "closed"}`}
      id={`task-container-container-${weekNo + 1}`}
    >
      {taskList.map((task) => (
        <p className="task-text" key={task.id}>
          {task.task}
        </p>
      ))}
    </div>
  );
}

export default TaskContainerCard;
