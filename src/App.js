import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faListUl, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faListUl, faCircleMinus);

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    { done: true, name: "Apprendre le Javascript" },
    { done: true, name: "Apprendre le HTML et le CSS" },
    { done: true, name: "Utiliser React JS" },
    { done: false, name: "Effectuer un stage" },
  ]);

  //fonction déclenchée lorsque l'on tape quelque chose dans l'input
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  //fonction déclenchée lorsque l'on clique sur le bouton "Add Task"
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input) {
      alert("Veuillez rentrer une nouvelle tâche");
    } else {
      let tasksCopy = [...tasks];
      tasksCopy.push({
        name: input.length > 30 ? input.substring(0, 30) + " ..." : input,
        done: false,
      });
      setTasks(tasksCopy);
      setInput("");
    }
  };

  const handleClickDone = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasks(tasksCopy);
  };

  const handleClickRemove = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };

  return (
    <div className="body">
      <Header />
      <div className="container">
        <Tasks
          tasks={tasks}
          handleClickDone={handleClickDone}
          handleClickRemove={handleClickRemove}
        />
        <Form
          input={input}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
