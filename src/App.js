import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Todositem from "./MyComponents/Todositem.js";
import {Footer} from "./MyComponents/Footer.js";
import "./App.css";

function App() {
  return (
    <>
      <Header title="TodosList" searchbar={false} />
      <Todos/>
      <Todositem/>
      <Footer/>
    </>
  );
}

export default App;
