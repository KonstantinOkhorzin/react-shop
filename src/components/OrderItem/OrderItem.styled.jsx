import styled from 'styled-components';

import IconButton from '../UI/IconButton';

export const Item = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr) auto;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borders.normal};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 2fr repeat(2, 1fr) auto;
    padding-left: ${({ theme }) => theme.space[4]}px;
  }
`;

export const Title = styled.h3`
  grid-column: 1 / -1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-column: 1 / 2;
    text-align: start;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
`;

export const Quantity = styled.input`
  text-align: center;
  max-width: 30px;
`;

export const Total = styled.p`
  text-align: center;
`;

export const RemoveButtom = styled(IconButton)`
  color: ${({ theme }) => theme.colors.red};
`;
