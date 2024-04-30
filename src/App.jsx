 import logo from './logo.svg';
import './App.css';
import Counter from './reducer/counter';
import CounterR from './reducer/counterR';
import TodolistR from './reducer/todolistR';

function App() {
  return (
    <div className="App">
       <Counter></Counter>
       <CounterR></CounterR>
       <TodolistR></TodolistR>
    </div>
  );
}

export default App;
