import styled from 'styled-components';

const Container = styled.div`
  width: 1024px;
  min-height: 700px;
  margin:30px auto;
  padding:50px;
  background-color: yellowgreen;
`;

function StyledContainer({ children }) {
  return(
    <Container>
      {children}
    </Container>
  )
}

export default StyledContainer;