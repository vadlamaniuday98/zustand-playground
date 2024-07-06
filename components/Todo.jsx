"use client";
import React, { useState } from "react";
import { useTodoStore } from "@/store/todo-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Cookies from "universal-cookie";

const Todo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [todo, setTodo] = useState("");

  const cookies = new Cookies();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      return alert("Please enter a todo");
    }
    addTodo({
      id: Math.ceil(Math.random() * 100000),
      todo: todo.trim(),
      completed: false,
    });
    setTodo("");
    cookies.set("todo", todo, { path: "/" });
    localStorage.setItem("message", "hello fam");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Todo</h2>
      <form onSubmit={handleTodoSubmit} className="flex space-x-2">
        <Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your todo"
          className="flex-grow"
        />
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Add
        </Button>
      </form>
    </div>
  );
};

export default Todo;
