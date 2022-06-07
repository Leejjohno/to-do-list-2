import ListTodo from './components/ListTodo';
// import ListDone from './components/ListDone';
// import ListDoing from './components/ListDoing';

import { useState } from "react";

export const App = () => {
  const [todo, setTodo] = useState ()
  const [todoArray, setTodoArray] = useState ([])

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

const submitHandler = (event) => {
  event.preventDefault()
  const tempArray = [...todoArray]
  tempArray.push(todo)
  setTodoArray(tempArray)
  setTodo("")
}

const deleteHandler = (event) => {
  const tempArray = [...todoArray]
  tempArray.splice(event.target.value, 1)
  console.log(tempArray)
  setTodoArray(tempArray)
  console.log(todoArray)
}

return (
  <div className='App'>
    <div className='container'>
      <input value={todo} placeholder="Task" onChange={ handleChange }/>
        <button onClick={ submitHandler }
        >+</button>
        <label>To-Do</label>
      <ListTodo deleteHandler={deleteHandler} todoArray={todoArray} />
        
      </div>
    </div>
  )
}

export default App;
