import styled from 'styled-components';
import styleConstants from 'utils/constants/style';

const { black } = styleConstants;

export const Wrapper = styled.div`
  width: 60vw;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    margin: 24px 0;
  }

  h1 {
    white-space: nowrap;
  }
`;

export const ProblemDescription = styled.input`
  border: 2px solid ${black};
  padding: 10px;
  border-radius: 25px;
`;

export default Wrapper;
