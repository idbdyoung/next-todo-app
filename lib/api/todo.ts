import axios from './index';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');
