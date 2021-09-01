import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>error: {error}</h2>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
