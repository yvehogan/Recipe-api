import React, { useState } from 'react';
import '../Form.css';

const AddTodo = ({ text,  setTodoList, todo, todoList, setEditTodo, item }) => {
const [toggle, setToggle] = useState(false);
 
    const toggler = () => {
        setToggle((prev) => !prev);
    };

   

    return (
        <div className="addTodo">
        <li className={ toggle ? "active" : ""}
        >{ text }
        <input type="checkbox"
        onClick={() => toggler(todo)}
        className={ toggle ? "active" : ""}
        />
        <button
        className="edit-buttton">Delete</button>
        </li>
    </div>
    );
}

export default AddTodo;