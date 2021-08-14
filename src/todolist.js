import React, {createContext, useState, useEffect} from 'react';

export const Todolist = createContext();

export const TodolistProvider = props => {


    const todoRequest = () => {
        const todoListArr = [];
        setTodo(todoListArr);
    }

    
    useEffect(()=>{
        const temp = localStorage.getItem("todo");
        var loadedTodos = JSON.parse(temp);
        if (loadedTodos) {
            console.log(todo);
            setTodo(loadedTodos);
            console.log(loadedTodos);
        }else {
            todoRequest();
            console.log('local storage not working');
        }

    }, []);
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || []);
    
    return (
        <Todolist.Provider value={[todo, setTodo]}>
            {props.children}
        </Todolist.Provider>
    )
}
