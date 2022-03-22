import React from "react";
import InputField from "../components/InputField";
import TodosList from "../components/TodosList";

export default class Todo extends React.Component {
  render() { 
    return(
      <div>
        <h1>To Do List</h1>
        <InputField />
        <TodosList />
      </div>
    );
  }
}