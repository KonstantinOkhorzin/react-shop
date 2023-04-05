import styled from 'styled-components';

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[5]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
`;

export const Total = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;
