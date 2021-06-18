
import useContextGetter from '../hooks/useContext';
import '../Form.css';
import {v4 as uuid } from 'uuid';

const Form = ({ setInputText, inputText, todoList, setTodoList }) => {
  const context = useContextGetter();
  //Targets the input value
  const inputHandler =(e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };


  const submitTodo = (e) => {
    e.preventDefault();

    if(!setInputText || !inputText) {
      return false;
    }
    setTodoList([
      ...todoList, {text: inputText, completed: false, id:uuid()}
    ]);

    
		context.dispatch({
			type: 'ADD_ITEM',
			payload: todoList,
		});

    setInputText("");
  };

    return (

<form className="input-form">
    <h2> TO-DO List</h2>
  <input 
  value={inputText}
  onChange={inputHandler}
  title="input"
  type='email'
  placeholder='Task'
  />
   
  <button
   onClick={submitTodo}>Save</button>
  </form>
      
    ); 
    
}

export default Form;