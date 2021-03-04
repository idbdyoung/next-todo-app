import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Footer: React.FC = () => {
  return (
    <Container>
    </Container>
  );
};

export default Footer;
