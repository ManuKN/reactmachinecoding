import React, { useState } from "react";

export default function TodoList() {
    const [task, setTask] = useState("");
    const [todoItems, setTodoItems] = useState([
        { item: "Walk the dog", isFinished: false },
        { item: "Water the plants", isFinished: false },
        { item: "Wash the dishes", isFinished: false },
    ]);

    const addItem = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        setTodoItems((prev) => [...prev, { item: task, isFinished: false }]);
        setTask("");
    }

    const deletedItem = (index) => {
        setTodoItems((prev) => prev.filter((item, i) => i !== index));
    };

    const updateItem = (index) => {
        setTodoItems((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, isFinished: !item.isFinished } : item
            )
        );
    };

    function asyncTask(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Done in ${delay}ms`);
            }, delay);
        });
    }


    return (
        <div>
            <button onClick={() => asyncTask(300)}>click me </button>
            <form onSubmit={addItem}>
                <input
                    type="text"
                    placeholder="Add your task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <ul>
                {todoItems.map((data, index) => (
                    <li key={index}>
                        <span>{data.item}</span>
                        <button onClick={() => deletedItem(index)}>Delete</button>
                        <input
                            type="checkbox"
                            checked={data.isFinished}
                            onChange={() => updateItem(index)}
                        />
                    </li>
                ))}

            </ul>
        </div>
    );
}