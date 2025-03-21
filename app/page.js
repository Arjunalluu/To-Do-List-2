"use client";

import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingDueDate, setEditingDueDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await fetch("https://to-do-list-2-navy.vercel.app/api/todos");
    const data = await res.json();
    if (data.success) setTodos(data.data);
    setLoading(false);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    const res = await fetch("https://to-do-list-2-navy.vercel.app/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text.trim(),
        dueDate: dueDate ? new Date(dueDate) : null,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setTodos([...todos, data.data]);
      setText("");
      setDueDate("");
    }
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    setLoading(true);
    const res = await fetch("https://to-do-list-2-navy.vercel.app/api/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (data.success) setTodos(todos.filter((todo) => todo._id !== id));
    setLoading(false);
  };

  const toggleCompleted = async (todo) => {
    setLoading(true);
    const updated = await fetch("https://to-do-list-2-navy.vercel.app/api/todos", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: todo._id,
        text: todo.text,
        completed: !todo.completed,
        dueDate: todo.dueDate,
      }),
    });
    const data = await updated.json();
    if (data.success)
      setTodos(todos.map((t) => (t._id === todo._id ? data.data : t)));
    setLoading(false);
  };

  const startEditing = (todo) => {
    setEditingId(todo._id);
    setEditingText(todo.text);
    setEditingDueDate(
      todo.dueDate ? new Date(todo.dueDate).toISOString().slice(0, 10) : ""
    );
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingText("");
    setEditingDueDate("");
  };

  const saveEditing = async (id) => {
    setLoading(true);
    const res = await fetch("https://to-do-list-2-navy.vercel.app/api/todos", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        text: editingText,
        dueDate: editingDueDate ? new Date(editingDueDate) : null,
        completed: todos.find((t) => t._id === id).completed,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setTodos(todos.map((t) => (t._id === id ? data.data : t)));
      cancelEditing();
    }
    setLoading(false);
  };

  const clearCompleted = async () => {
    setLoading(true);
    const completedTodos = todos.filter((t) => t.completed);
    await Promise.all(
      completedTodos.map((todo) =>
        fetch("https://to-do-list-2-navy.vercel.app/api/todos", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: todo._id }),
        })
      )
    );
    setTodos(todos.filter((t) => !t.completed));
    setLoading(false);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
    // Note: To persist order, update an "order" field in your backend.
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500 flex flex-col items-center py-10 transition-colors duration-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      {/* Header */}
      <div className="w-full max-w-4xl px-6 flex justify-between items-center mb-8">
        <h1 className="text-6xl font-extrabold drop-shadow-xl animate-fadeIn text-white">
          Supercharged To‑Do List
        </h1>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors shadow-lg"
          >
            {theme === "dark" ? (
              <>
                <SunIcon className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-sm font-medium text-white">
                  Light Mode
                </span>
              </>
            ) : (
              <>
                <MoonIcon className="h-6 w-6 text-indigo-300 mr-2" />
                <span className="text-sm font-medium text-white">Dark Mode</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTodo} className="flex w-full max-w-4xl mb-8 space-x-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-grow px-4 py-3 rounded-l-lg border-none focus:outline-none text-gray-900 shadow-lg"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-4 py-3 border border-gray-300 focus:outline-none shadow-lg"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 font-bold rounded-r-lg transition-colors shadow-lg"
        >
          Add
        </button>
      </form>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6 w-full max-w-4xl justify-center">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full ${
              filter === f
                ? "bg-white text-gray-900"
                : "bg-gray-600 text-white hover:bg-gray-500"
            } transition-colors shadow-md`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {loading && <p className="mb-4 text-xl text-white">Loading...</p>}

      {/* Task List with Drag-and-Drop */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="w-full max-w-4xl space-y-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos.map((todo, index) => (
                <Draggable key={todo._id} draggableId={todo._id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-lg shadow-2xl flex items-center justify-between transition transform hover:scale-105 animate-fadeIn"
                    >
                      <div className="flex items-center space-x-4">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleCompleted(todo)}
                          className="h-6 w-6 text-green-500 border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                        />
                        <div>
                          {editingId === todo._id ? (
                            <>
                              <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none shadow"
                              />
                              <input
                                type="date"
                                value={editingDueDate}
                                onChange={(e) => setEditingDueDate(e.target.value)}
                                className="ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none shadow"
                              />
                            </>
                          ) : (
                            <div>
                              <p
                                className={`text-xl ${
                                  todo.completed
                                    ? "line-through text-gray-300"
                                    : "text-white"
                                }`}
                              >
                                {todo.text}
                              </p>
                              {todo.dueDate && (
                                <p className="text-sm text-gray-200">
                                  Due:{" "}
                                  {new Date(todo.dueDate).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {editingId === todo._id ? (
                          <>
                            <button
                              onClick={() => saveEditing(todo._id)}
                              className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors text-white shadow"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-full transition-colors text-white shadow"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEditing(todo)}
                              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors text-white shadow"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteTodo(todo._id)}
                              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors text-white shadow"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {todos.some((t) => t.completed) && (
        <button
          onClick={clearCompleted}
          className="mt-8 px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors text-white shadow-xl"
        >
          Clear Completed
        </button>
      )}
      <p className="mt-6 text-white text-lg">
        Total tasks: {todos.length} | Active:{" "}
        {todos.filter((t) => !t.completed).length}
      </p>
    </div>
  );
}
