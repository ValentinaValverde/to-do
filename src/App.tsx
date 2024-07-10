import './styles/App.css';
import ToDoTwo from './components/ToDo2';
import Image from './assets/todo_favicon.png';

function App() {
  return (
    <>
      <div className="nav">
        <p>vals to do</p>
        <img src={Image} className="image" />
      </div>

      <div className="todo-container">
        <ToDoTwo />
      </div>
    </>
  );
}

export default App;
