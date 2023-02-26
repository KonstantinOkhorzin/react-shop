import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
`;

const ErrorDataView = ({ error }) => {
  return <ErrorMessage>{error}</ErrorMessage>;
};

ErrorDataView.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorDataView;
