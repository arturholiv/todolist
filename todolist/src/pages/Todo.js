import React from "react";
import InputField from "../components/InputField";
import TodosList from "../components/TodosList";
import { AiOutlineUnorderedList } from "react-icons/ai"

export default class Todo extends React.Component {
  render() { 
    return(
      <div>
        <div className="title-todo">
        <AiOutlineUnorderedList className="list-img"/>
        <h1>To Do List</h1>
        </div>
        <InputField />
        <TodosList />
      </div>
    );
  }
}