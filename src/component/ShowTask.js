import React from "react";
import { useState } from "react";
import styles from "../css/showTask.module.css";

const ShowTask = ({taskList , setTaskList , task , setTask}) => {
 const clearAll= () =>{
    setTaskList([]);
 }

 const deleteTaskList = (id) => {
     setTaskList (taskList.filter((task) => task.id != id));
 }

 const editTaskList = (id) => {
    //find task 
    const findTask = taskList.find((task)=> task.id === id);
    setTask(findTask);
 }

 

  


  
  return (
    <div className={styles.showTask}>
      <div className={styles.header}>
        <div className={styles.header_sub}>
          <span className={styles.title}>TODO</span>
          <span className={styles.counter}>{taskList.length}</span>
        </div>
        <button onClick={clearAll}className="addTask_button">Clear all</button>
      </div>

      <div className={styles.showTask_list}>
        {taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.task_content}>
              <span>{task.title}</span>
              <span className={styles.task_date}>{task.date}</span>
            </div>
            <div className={styles.task_action}>
              <a onClick={deleteTaskList.bind(this, task.id)} className={`${styles.action_button} bi bi-trash`}></a>
              <a onClick={editTaskList.bind(this, task.id)} className={`${styles.action_button} bi bi-pencil-square`}></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTask;
