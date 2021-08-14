import React, {useContext, useEffect} from 'react';
import { Todolist } from './todolist';

const TodoItem = () => {

    const [todo, setTodo] = useContext(Todolist);
    // console.log(todo);

    const deleteTodo = function (id){
        let updateArr = todo.filter(t => {
          return  t.id !== id;
        })
        // console.log(updateArr);
            let newArr = [];
        function writeArr() {
            updateArr.map(u =>{
                newArr.push({id: u.id, title: u.title, sno: newArr.length + 1})
            })
        }

        writeArr();

        // console.log(newArr);
        // const mapArr = findWithAttr(updateArr, 'sno', 2);
        // console.log(mapArr);
        //  updateArr.map(a =>{
             
        //         console.log(a.length);
        // })
        // // console.log(mapArr);
        setTodo(newArr);
        // console.log(todo)
        // localStorage.set(todo)
    }

    useEffect(()=> {
        const temp = JSON.stringify(todo);
        localStorage.setItem('todo', temp);
    }, [todo])

    return (
        <div className="container px-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Select To-Do</th>
                        <th scope="col">To-Do Name</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {(!todo.length ?
                <tr>
                   <th scope="row"></th>
                   <td className="text-start ps-2"  ></td>
                   <td className="text-start text-danger ps-2"  >No To-Do found, Please add some..</td>
                   <td className="text-start ps-2"  ></td>
                </tr> : 
                    todo.map( t =>(
                    <tr key={t.id}>
                        <th scope="row">{t.sno}</th>
                        <td><input type="checkbox" name="" data-id={t.sno}  onChange={(e)=> {
                            const id = e.target.dataset.id;
                            const elem = document.getElementById(`todo${id}`);
                            elem.classList.toggle('text-decoration-line-through');
                            elem.classList.toggle('fst-italic');
                            elem.classList.toggle('text-muted');
                            }}/>
                        </td>
                        <td className="text-start ps-2" id={`todo${t.sno}`} >{t.title}</td>
                        <td>
                            <button className="btn btn-outline-warning text-danger" onClick={(e)=>{deleteTodo(`${t.id}`)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                    ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TodoItem
