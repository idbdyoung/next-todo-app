import axios from './index';
import { TodoType } from '../../types/todo';

interface AddTodosAPIBody {
  color: TodoType['color'];
  text: string;
}

export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');
export const writeTodosAPI = (id: number) => axios.patch<TodoType[]>(`api/todos/${id}`);
export const deleteTodosAPI = (id: number) => axios.delete<TodoType[]>(`api/todos/${id}`);
export const addTodosAPI = (body: AddTodosAPIBody) => axios.post('api/todos/', body);
