import ListTodo from './components/ListTodo';

import { useState } from "react";

export const App = () => {

  //javascript goes below

  const [todo, setTodo] = useState () // text box and a function allowing us to change that text boxes state.
  const [todoArray, setTodoArray] = useState ([]) // an array of todo items and a function allowing us to change the state of that array.

// a function that tells the todo 'input' box to update with every character that the user preses.

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

// here the I use a function to watch for an event when a button is clicked
// I created a temp array from the todo array, which I can then push values to
// then update the values of the todo array from the values in the temp array

const submitHandler = (event) => {
  event.preventDefault() // event prevent default stops the default value from being entered by the submit button
  const tempArray = [...todoArray] // create a temp array containing the values from todo array using a spread opperator
  tempArray.push(todo) // add item to the temp array
  setTodoArray(tempArray) // update the todo array values with the ones from temp array
  setTodo("") // set the input field to blank after we press the button
  // console.log(todo)
}

// here delete handler creates a temporary array from the todo array
// and deletes the item in the temporary array at the position of value (index)
// i have specified that I only want one item to be deleted.

const deleteHandler = (event) => {
  const tempArray = [...todoArray]
  tempArray.splice(event.target.value, 1)
  // console.log(tempArray)
  setTodoArray(tempArray) // I use the setTodoArray function to update the todo array with the temp array values
  // console.log(todoArray)
}

// this tick handler checks if theres a style applied to the checkbox, 
// then removes it if there is one, or adds a strikethrough if there isn't.

const tickHandler = (event) => {
  if (event.target.style.textDecoration) { // is there a text decoration style
    (event.target.style.removeProperty('text-decoration')) // if so remove it
  } else {
    (event.target.style.setProperty('text-decoration', 'line-through')) // if not then add a line through effect
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
