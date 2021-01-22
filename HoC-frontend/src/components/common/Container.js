import styled from 'styled-components';

const Container = styled.div`
  width: 1024px;
  min-height: 700px;
  margin: 0 auto;
  margin-top:200px;
  padding: 50px;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing:border-box;
  background-color:#fff;
  box-shadow: 2px 0px 10px 5px rgba(0, 0, 0, 0.08);
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
