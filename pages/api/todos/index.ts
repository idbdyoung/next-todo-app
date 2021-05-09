import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';

const todos = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const todos = await Data.todo.getTodoList();
      res.statusCode = 200;

      return res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;

      return res.send(e);
    }
  }
  if (req.method === 'POST') {
    try {
      const { text, color } = req.body;
      const todos = await Data.todo.getTodoList();
      const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 0,
        checked: false,
        text,
        color,
      };
      await Data.todo.write([...todos, newTodo]);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;

      return res.send(e);
    }
  }
  res.statusCode = 405;

  return res.end();
};

export default todos;
