import { readFileSync, writeFileSync } from 'fs';
import { TodoType } from '../../types/todo';

const getTodoList = () => {
  const todoBuffer = readFileSync('data/todo.json');
  const todoString = todoBuffer.toString();

  if (!todoString) return [];
  const todos: TodoType[] = JSON.parse(todoString);

  return todos;
};
const exist = ({ id }: { id: number }) => {
  const todos = getTodoList();
  const todo = todos.some((todo) => todo.id === id);
  return todo;
};
const write = async (todos: TodoType[]) => {
  await writeFileSync('data/todo.json', JSON.stringify(todos));
};

export default {
  getTodoList,
  write,
  exist,
};
