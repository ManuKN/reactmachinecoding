import React from 'react'
import { useOptimistic , startTransition   } from 'react';

function ReactOptimitic() {
  const [todos, setTodos] = useOptimistic(
    [{ id: 1, text: "Learn React 19" }],
    (state, action) => {
      switch (action.type) {
        case "add":
          return [...state, { id: Date.now(), text: action.text }];
        case "delete":
          return state.filter((todo) => todo.id !== action.id);
        default:
          return state;
      }
    }
  );

  const handleAddTodo = async () => {
    const newTodo = "Write Optimistic UI Hook";
    startTransition(() =>setTodos({ type: "add", text: newTodo }));

    try {
      const result = await fakeApiCall();
      console.log(result)
    } catch (error) {
      console.error("Failed to add todo. Rolling back.");
      setTodos({ type: "delete", id: Date.now() });
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

const fakeApiCall = () =>
  new Promise((resolve, reject) => setTimeout(resolve({ok:true}), 3000));

export default ReactOptimitic;
