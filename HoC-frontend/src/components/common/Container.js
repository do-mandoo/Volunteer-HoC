import styled from 'styled-components';

const Container = styled.div`
  width: 1024px;
  min-height: 700px;
  margin: 0 auto;
  padding: 50px;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: yellowgreen;
  box-sizing:border-box;
`;

// const ResponsiveBlock = styled.div`
//   width: 1024px;
//   margin: 0 auto;
// `;

const StyledContainer = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

// function StyledContainer({ children }) {
//   return <Container>{children}</Container>;
// }

export default StyledContainer;
