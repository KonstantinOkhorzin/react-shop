import styled from 'styled-components';

import heroBg from '../../assets/img/hero_bg.jpg';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: ${p => p.theme.shadows.small};
  border-radius: ${p => p.theme.radii.normal};
`;

export const WrapperImg = styled.div`
  min-height: 240px;
  background-color: ${p => p.theme.colors.black};
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  img {
    height: 100%;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const Title = styled.h3`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const Description = styled.p`
  text-align: center;
`;
