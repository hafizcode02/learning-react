import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  isEditing: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");

  useEffect(() => {
    // Load todos from localStorage
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo,
        isCompleted: false,
        isEditing: false,
      },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodoText = (id: number, text: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
    setEditTodo(text);
  };

  const saveEditTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editTodo, isEditing: false } : todo
      )
    );
    setEditTodo("");
  };

  const canceleditTodo = () => {
    setTodos(todos.map((todo) => ({ ...todo, isEditing: false })));
    setEditTodo("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Simple To-Do List
        </h1>
        <form onSubmit={addTodo} className="flex mb-4 mt-8">
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new Task"
            className="flex-grow mr-2"
          />
          <Button type="submit">Add</Button>
        </form>

        <ul>
          {todos.map(
            (
              todo // foreach todos
            ) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-2 border-b"
              >
                {todo.isEditing ? ( // if todo is editing (fun fact: ternary operator)
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      saveEditTodo(todo.id);
                    }}
                    className="flex-grow flex"
                  >
                    <Input
                      type="text"
                      value={editTodo}
                      onChange={(e) => setEditTodo(e.target.value)}
                      className="flex-grow mr-2"
                    />
                    <Button type="submit" size="sm" className="mr-2">
                      Save
                    </Button>
                    <Button
                      onClick={canceleditTodo}
                      variant="outline"
                      size="sm"
                    >
                      Cancel
                    </Button>
                  </form>
                ) : (
                  // else
                  <>
                    <span
                      className={`flex-grow ${
                        todo.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                    <div>
                      <Button
                        onClick={() => toggleTodo(todo.id)}
                        variant="ghost"
                        size="sm"
                        className="mr-2"
                      >
                        <p
                          className={`h-4 w-4 ${
                            !todo.isCompleted
                              ? "text-green-500"
                              : "text-gray-500"
                          }`}
                        >
                          {todo.isCompleted ? "Undo" : "Finish"}
                        </p>
                      </Button>
                      <Button
                        onClick={() => editTodoText(todo.id, todo.text)}
                        variant="ghost"
                        size="sm"
                        className="mr-2"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => deleteTodo(todo.id)}
                        variant="ghost"
                        size="sm"
                      >
                        Hapus
                      </Button>
                    </div>
                  </>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
