import React from "react";
import { useTodoStore } from "@/store/todo-store";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const TodoList = () => {
  const { todo, removeTodo, toggleTodo } = useTodoStore((state) => ({
    todo: state.todo,
    removeTodo: state.removeTodo,
    toggleTodo: state.toggleTodo,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h2>
      <div className="space-y-4">
        {todo.map((todo) => (
          <Card key={todo.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">
                {todo.todo}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`text-sm ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.completed ? "Completed" : "Mark as complete"}
                </label>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeTodo(todo.id)}
                className="ml-auto text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
