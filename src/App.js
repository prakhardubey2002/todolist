import Header from "./MyComponents/Header.js";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer.js";
import "./App.css";

function App() {
  const onDelete =()=>{
    console.log("I am onDelete")
  }
  let todos = [
    {sno: 1,
    title:"Go to market",
    desc:"You need to go to market"
    },
    {sno: 2,
    title:"Go to mall",
    desc:"You need to go to market2"
    },
    {sno: 3,
    title:"Go to ghat",
    desc:"You need to go to market3"
    }
  ]
  return (
    <>
      <Header title="TodosList" searchbar={false} />
      <Todos todos={todos} onDelete={onDelete} />
     
      <Footer/>
    </>
  );
}

export default App;
