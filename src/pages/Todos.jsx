import { Link } from 'react-router-dom';
import useContextGetter from '../hooks/useContext';
import React, { useState } from 'react';
import Form from '../components/Form';
import Todo from '../components/Todo';

const Todos = () => {
    const context = useContextGetter();
	console.log(context);

    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);



    fetch(`https://user-manager-three.vercel.app/api/todo?userId=[userId]`)
  
    .then(res => res.json())
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log('this error occured', err)
    })

    return (
        <div>
            <Form todoList={todoList}
                setTodoList={setTodoList}
                setInputText={setInputText}
                inputText={inputText} />

            <Todo todoList={todoList}
                setTodoList={setTodoList} />

            <Link to={`/home`}>
            
                <button>Sign-out</button>
            </Link>


        </div>
    )
};

export default Todos;
