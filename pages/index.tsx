import { GetServerSideProps, NextPage } from 'next';
import { getTodosAPI } from '../lib/api/todo';
import { TodoType } from '../types/todo';

import TodoList from '../components/TodoList';

interface IProps {
  todos: TodoType[];
}

const index: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos}/>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: { todos: [] } };
  }
};

export default index;
