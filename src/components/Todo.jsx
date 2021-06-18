
import AddTodo from './AddTodo';


const Todo = ({ todoList, setTodoList }) => {
  console.log(todoList)

 let updateData = {
   id: 'b5d5cb91-da1e-478b-ace1-80aabda0cdff',
   completed: true,
 } 
 fetch(`https://user-manager-three.vercel.app/api/todo/update`, {
   method: 'POST',
   headers: {
     'content-type': 'application/json',
   },
   body:JSON.stringify(updateData)
 })
 .catch(err => {
   console.log(updateData)
 })
 .catch(err => {
   console.log('an error occured', err)
 })
  
return ( 
    <div className="todo-container">
        <ul className="todo-list">
          {todoList.map(todo => (

          <AddTodo setTodoList={setTodoList}
          todoList={todoList}
           key={todo.id}
            text={todo.text}/>

      ))}
        </ul>
</div>
);
};
export default Todo;
 