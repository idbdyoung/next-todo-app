import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        return res.end();
      }
      const todos = Data.todo.getTodoList();
      const changedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      await Data.todo.write(changedTodos);
      res.statusCode = 200;

      return res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;

      return res.send(e);
    }
  }
  res.statusCode = 405;

  return res.end();
};
