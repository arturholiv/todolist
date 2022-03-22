import React from "react";
import InputField from "../components/InputField";
import TodosList from "../components/TodosList";
import { AiOutlineUnorderedList } from "react-icons/ai"
import { connect } from "react-redux";
import { deleteAll } from "../actions";

const Todo = ({deleteAll}) => {
  return(
    <div>
      <div className="title-todo">
      <AiOutlineUnorderedList className="list-img"/>
      <h1>To Do List</h1>
      </div>
      <InputField />
      <TodosList />
      <div>
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
  deleteAll: () => dispatch(deleteAll())
})

export default connect(null, mapDispatchToProps)(Todo)