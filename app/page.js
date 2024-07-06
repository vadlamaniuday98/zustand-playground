"use client";
import React from "react";

import Todo from "@/components/Todo";
import TodoList from "@/components/TodoList";
const Home = () => {
  return (
    <>
      <div className="container mx-auto max-w-2xl p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Zustand Playground
        </h1>
        <Todo />
        <TodoList />
      </div>
    </>
  );
};

export default Home;
