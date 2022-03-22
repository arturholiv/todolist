import React, { useEffect } from "react";
import InputField from "../components/InputField";
import TodosList from "../components/TodosList";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { connect } from "react-redux";
import { deleteAll, saveTodos } from "../actions";

const Todo = ({deleteAll, saveTodos}) => {
  useEffect(() => {
    saveTodos();
  }, [saveTodos])
  return(
    <div>
      <div className="title-todo">
      <AiOutlineUnorderedList className="list-img"/>
      <h1>To Do List</h1>
      </div>
      <InputField />
      <TodosList />
      <div className="deleteAll-div">
        <button
          onClick={() => deleteAll()}
          className="btn-submit"
        >
          Delete All
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  saveTodos: () => dispatch(saveTodos())
})

export default connect(null, mapDispatchToProps)(Todo)