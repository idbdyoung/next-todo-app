import axios from './index';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');
export const writeTodosAPI = (id: number) => axios.patch<TodoType[]>(`api/todos/${id}`);
