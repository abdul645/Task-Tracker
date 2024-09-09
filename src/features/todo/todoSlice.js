import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid is used to generate unique id

//how store look like initially
//The initialState contains a todos array with one initial todo object (id: 1 and text: "Hello"). 
//This is the default state of your todo list when the application starts.
const initialState = {
    todos: [{
        id:1,
        text: "Hello"
    }]
}

//almost it like reducer
//and What is reducer -> reducer is nothing but a functionality
export const todoSlice = createSlice({
    name: "todo", //name is built in
    initialState,
    reducers: {
        //reducer can have properties and function
        //addTodo is property 
        // (state, action) => {} is function
        // In context we only write function but we don't write function definition.
        // But, in redux toolkit we will write function with its definition.
        // (state, action) -> we will get these(state, action) thing always.
        // you always have access to both of these
        //state - variable
        //action - value

        // This reducer adds a new todo to the todos array.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), //It uses nanoid() to generate a unique id for the new todo,
                text: action.payload // action.payload provides the text of the new todo.
            }
            state.todos.push(todo) //It pushes the new todo object into the todos array
        },

        //This reducer removes a todo from the todos array.
        removeTodo: (state, action) => {
            //filter only return true value
            //It filters out the todo with an id that matches action.payload.
            // it will return all todos whose id does not match the payload
            state.todos = state.todos.filter((todo)=> 
            todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => 
            todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo )
        }
    }
})

// export individual functionality
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

//export a main source of all reducer
export default todoSlice.reducer