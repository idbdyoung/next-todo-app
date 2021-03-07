import { readFileSync } from 'fs';
import { TodoType } from '../../types/todo';

const getTodoList = () => {
  const todoBuffer = readFileSync('data/todo.json');
  const todoString = todoBuffer.toString();

  if (!todoString) return [];
  const todos: TodoType[] = JSON.parse(todoString);

  return todos;
};

export default {
  getTodoList,
};
