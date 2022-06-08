import ListTodo from './components/ListTodo';

import { useState } from "react";

export const App = () => {

  //javascript goes below

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
  console.log(todo)
}

const deleteHandler = (event) => {
  const tempArray = [...todoArray]
  tempArray.splice(event.target.value, 1)
  // console.log(tempArray)
  setTodoArray(tempArray)
  // console.log(todoArray)
}

const tickHandler = (event) => {
  if (event.target.style.textDecoration) {
    (event.target.style.removeProperty('text-decoration'))
  } else {
    (event.target.style.setProperty('text-decoration', 'line-through'))
  }
  console.log(event.target.value)
  // console.log(event.target.style)
  // console.log(event.target)
  // console.log(event)
}

//end of javascript

//jsx goes below

return (
  <div className='App'>
    <div className='container'>
      <input value={todo} placeholder="Task" onChange={ handleChange }/>
        <button onClick={ submitHandler }
        >+</button>
        <h1>To-Do</h1>
      <ListTodo tickHandler={ tickHandler } deleteHandler={ deleteHandler } todoArray={todoArray} />
      </div>
    </div>
  )
}

//end of jsx

export default App;
