// import logo from './logo.svg';
import "./App.css";
import Header from "../src/component/Header";
import AddTask from "../src/component/AddTask";
import ShowTask from "./component/ShowTask";

import {useEffect, useState} from 'react';


function App() {
  const [taskList , setTaskList] = useState( JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});


  useEffect( () => {
    localStorage.setItem("taskList" , (JSON.stringify(taskList)));
  } , [taskList]);

  return (
    <>
      <header>
        <Header></Header>
        <AddTask taskList={taskList} 
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}></AddTask>
        <ShowTask taskList={taskList} 
              setTaskList={setTaskList}
              task={task}
              setTask={setTask}
        ></ShowTask>
      </header>
    </>
  );
}

export default App;
