import Input from "./input";
import Card from "./card";
import { useState, useEffect } from "react";

const Task = () => {
  const initialTask = [
    { text: "First Task", id: 0 },
    { text: "Second Task", id: 1 },
  ];

  const [taskList, setTaskList] = useState(initialTask);

  const handleNewTask = async (newTask) => {
    const body = {
      task_is: newTask.id,
      task_name: newTask.text,
    };
    await fetch("http://localhost:8010/", {
      method: "POST",
      headers :{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    await handleGetTasks();
  };

  const handleDelete = (id) => {
    setTaskList((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const handleGetTasks = async () => {
    const response = await fetch("http://localhost:8010/");
    const data = await response.json();
    setTaskList(
      data.map((item) => ({
        id: item.task_id,
        text: item.task_name,
      }))
    );
    console.log(data);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <>
      <header>
        <h1> My Todo</h1>
      </header>

      <div id="tasks">
        <Input onAddTask={handleNewTask} />

        {taskList.map((task) => {
          return <Card props={task} OnDelete={handleDelete} />;
        })}
      </div>
    </>
  );
};

export default Task;