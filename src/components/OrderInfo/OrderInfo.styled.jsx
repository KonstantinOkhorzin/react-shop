import styled from 'styled-components';

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]}px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;

export const Total = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
`;
