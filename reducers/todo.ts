import { TodoType } from '../types/todo';

type Action = { type: 'CHECK_TODO' } | { type: 'DELETE_TODO' };

const initialState: TodoType = {
  id: 0,
  text: '',
  color: 'navy',
  checked: false,
};

const todo = (state = initialState, action: Action) => {
  switch (action.type) {

  }
};

export default todo;
