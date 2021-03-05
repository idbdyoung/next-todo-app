import styled from 'styled-components';
import { TodoType } from '../types/todo';
import palette from '../styles/palette';

const Container = styled.div`
  width: 100%;
  height: 100px;
  .todo-list {
    width: 100%;
    height: 100%;
    .todo-item {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid ${palette.gray};
      .todo-left-side {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .todo-text {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          margin-left: 12px;
          font-size: 16px;
        }
        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
      }
      .todo-right-side {
        width: 50px;
        height: 100%;
        background: ${palette.gray}
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }
`;

interface IProps {
  todos: TodoType[];
}

const TodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <Container>
      <ul className='todo-list'>
        {
          todos.map(todo => (
            <li className='todo-item'>
              <div className='todo-left-side'>
                <div className={`todo-color-block bg-${todo.color}`}/>
                <p className={`todo-text ${todo.checked? 'checked-todo-text' : ''}`}>
                  {todo.text}
                </p>
              </div>
              <div className='todo-right-side'>

              </div>
            </li>
          ))
        }
      </ul>
    </Container>
  );
};

export default TodoList;
