import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const todoStore = (set) => ({
  todo: [],

  addTodo: (todo) => set((state) => ({ todo: [...state.todo, todo] })),
  removeTodo: (id) =>
    set((state) => ({ todo: state.todo.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todo: state.todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
});

const useTodoStore = create(
  devtools(
    persist(todoStore, {
      name: "todo-storage",
    })
  )
);

export { useTodoStore };
