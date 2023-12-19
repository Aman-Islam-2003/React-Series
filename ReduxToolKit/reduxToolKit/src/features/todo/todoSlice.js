import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text:"Hello World"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addToDo: (state, action)=>{
           const todo= {
            id: nanoid(),
            text: action.payload.text
           }
           state.todos.push(todo)
        },
        removeToDo: (state, action)=>{
           state.todos = state.todos.filter((todo)=>{
            todo.id !== action.payload.id
           })
        }
    }
})

export const {addToDo, removeToDo} = todoSlice.actions;
export default todoSlice.reducer