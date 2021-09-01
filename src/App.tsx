import React from "react";
import Bank from "./components/Bank";
import UsersList from "./components/UsersList";
import TodoList from "./components/TodoList";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Bank />
      <UsersList />
      <TodoList />
    </div>
  );
}

export default App;
