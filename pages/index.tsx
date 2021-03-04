import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 50px;
  padding: 10px;
  background: yellow;
  & div {
    width: 100%;
    height: 100%;
    background: red;
  }
`;

const index: NextPage = () => {
  return (
    <Container>
      <div>Hello World</div>
    </Container>
  );
};

export default index;
