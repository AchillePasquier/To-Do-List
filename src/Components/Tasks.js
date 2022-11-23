import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({ tasks, handleClickDone, handleClickRemove }) => {
  return (
    <ul className="tasks">
      {tasks.length > 0 &&
        tasks.map((task, index) => {
          return (
            <li key={index} className="task">
              <input
                className="checkbox"
                type="checkbox"
                checked={task.done ? true : false}
                onChange={() => handleClickDone(index)}
              />
              <p
                className={task.done ? "done" : ""}
                key={index}
                onClick={() => handleClickDone(index)}
              >
                {task.name}
              </p>
              <FontAwesomeIcon
                className="delete-icon"
                icon="fa-solid fa-circle-minus"
                onClick={() => handleClickRemove(index)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Tasks;
