// import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import InputTodo from './components/todo/InputTodo';
import Todo from './components/todo/Todo';
// import InputField from './Components/InputField';

function App() {
  return (
    <div className="App">
     
     <Counter/>
     <InputTodo/>
     <Todo/>
        
    </div>
  );
}

export default App;
