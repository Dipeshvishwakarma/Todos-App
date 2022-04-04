import { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Todos from "./Components/Todos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else
    initTodo = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  const onDelete = (todo) => {
    //console.log("i am deleting",todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0)
      sno = 0;
    else
      sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log("I am adding todo", myTodo);


  }
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={()=>{
            return (
              <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }}
          >
          </Route>
          <Route exact path="/about">
          <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
