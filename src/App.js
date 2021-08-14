import React from 'react';
import Nav from './nav';
import TodoInput from './todoinput';
import { TodolistProvider } from './todolist';
import TodoItem from './todoitem';
import Footer from './footer';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <Nav />
      <TodolistProvider>
        <TodoInput />
        <TodoItem />
      </TodolistProvider>

      
      <Footer />
    </div>
  );
}

export default App;
