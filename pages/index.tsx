import { NextPage } from 'next';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';

interface IProps {
  todos: TodoType;
}

const mockData: TodoType[] = [{'id':1,'text':'아무개','color':'red','checked':true},{'id':2,'text':'아무개나','color':'navy','checked':false}];

const index: NextPage<IProps> = () => {
  return <TodoList todos={mockData}/>;
};

export default index;
