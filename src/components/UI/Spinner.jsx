import { ImSpinner2 } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.span`
  width: 50px;
  height: 50px;
  animation: ${spinner} 1.4s linear infinite;
  svg {
    width: 50px;
    height: 50px;
  }
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ImSpinner2 />
    </SpinnerWrapper>
  );
};

export default Spinner;
