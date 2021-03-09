import axios from './index';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');
export const writeTodosAPI = (id: number) => axios.patch<TodoType[]>(`api/todos/${id}`);
export const deleteTodosAPI = (id: number) => axios.delete<TodoType[]>(`api/todos/${id}`);
