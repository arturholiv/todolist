import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo"

const TodosList = ({todos}) => {
  return (
    <div className="todos-list">
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} id={i}/>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todo.todos
});

export default connect(mapStateToProps)(TodosList);