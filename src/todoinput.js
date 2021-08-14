import React, {useContext, useState} from 'react';
import { Todolist } from './todolist';
import { v4 as uuidv4 } from "uuid";


const TodoInput = () => {

    const [todo, setTodo] = useContext(Todolist);
    const [name, setName] = useState('');
    const [sno, setSno] = useState('');

    const updateName = e => {
            setName(e.target.value);      
    }

    const updateTodo = e => {
        e.preventDefault();
        if (name.trim()) {
            setTodo([...todo, {title: name, id: uuidv4() , sno: todo.length + 1} ]);
            console.log(todo);
            setName('');
        }
        else {
            alert('input can not be empty!')
        }
        
    }

    return (
        <form className="row m-auto" onSubmit={updateTodo}>
            <div className="col-8 my-5 m-auto ">

            <div className="input-group m-auto">
                <input type="text" className="form-control" placeholder="Write To-do here"
                 aria-label="Write To-do here"
                 aria-describedby="button-addon2"
                 value={name} 
                 onChange={updateName}/>
                <button className="btn btn-outline-secondary"
                 title="Add To-Do"
                 type="submit" id="button-addon2" style={{
                    paddingTop: "0",
                    paddingBottom : "5px"}} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
                </svg>
                </button>
            </div>
            </div>
        </form>
    )
}

export default TodoInput
