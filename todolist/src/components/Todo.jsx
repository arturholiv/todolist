import React from "react";
import { AiFillDelete } from "react-icons/ai"
import { connect } from "react-redux";
import { removeTodo } from "../actions";

const Todo = ({ todo, id, removeTodo }) => {
  return (
    <div className="todo-item" >
      <div>{todo}</div>
      <AiFillDelete onClick={() => removeTodo(id)} className="todo-remove"/>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo);