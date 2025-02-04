import "../css/addTask.css";
import { useState , useEffect } from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (Object.keys(task).length != 0) {
      setNewTask(task.title);
    }
  }, [task]);

  const addNewTask = () => {
    if (Object.keys(task).length != 0) {
      // Edit existing task
      const updatedTaskList = taskList.map((taskItem) =>
        taskItem.id == task.id
          ? { ...taskItem, title: newTask, date: new Date().toISOString() }
          : taskItem
      );

      setTaskList(updatedTaskList);
      resetForm();
    } else {
      // Add new task
      if (newTask.trim() != "") {
        const newTaskObj = {
          id: taskList.length + 1,
          title: newTask.trim(),
          date: new Date().toISOString(),
        };

        setTaskList([...taskList, newTaskObj]);
        resetForm();
      } else {
        alert("Please enter a task");
      }
    }
  };

  const resetForm = () => {
    setNewTask("");
    setTask({});
  };

  return (
    <div className="addTask">
      <input
        type="text"
        value={Object.keys(task).length != 0 ?  newTask : newTask}
        onChange={(e) => setNewTask(e.target.value)}
        maxLength="25"
        className="addTask_input"
        placeholder="Add a task"
      />
      <button onClick={addNewTask} className="addTask_button" type="submit">
        {Object.keys(task).length != 0 ? "Update " : "Add "}
      </button>
    </div>
  );
};

export default AddTask;
