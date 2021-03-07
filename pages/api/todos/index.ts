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
  res.statusCode = 405;

  return res.end();
};

export default todos;
