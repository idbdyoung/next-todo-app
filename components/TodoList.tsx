import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const TodoList: React.FC = () => {
  return (
    <Container>
      <h1>투두리스트 아이템이 올 자리</h1>
    </Container>
  );
};

export default TodoList;
