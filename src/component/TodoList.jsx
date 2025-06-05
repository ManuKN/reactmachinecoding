import React, { useState } from 'react';

function TodoList() {
  const [content, setContent] = useState("");
  const [list, setList] = useState([
    { name: "studying", isFinished: false },
    { name: "coding", isFinished: false },
  ]);

  const handleAddingTask = () => {
    if (content.trim()) {
      setList((prev) => [
        ...prev,
        { name: content.trim(), isFinished: false },
      ]);
      setContent("");
    }
  };

  // ✅ Toggle task status
  const handleUpdateTask = (index) => {
    setList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isFinished: !item.isFinished } : item
      )
    );
  };

  // ✅ Delete task
  const handleDeletingTask = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddingTask}>Add</button>

      <div>
        {list.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <p
              style={{
                textDecoration: item.isFinished ? "line-through" : "none",
              }}
            >
              {item.name}
            </p>
            <input
              type="checkbox"
              checked={item.isFinished}
              onChange={() => handleUpdateTask(index)}
            />
            <button onClick={() => handleDeletingTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
