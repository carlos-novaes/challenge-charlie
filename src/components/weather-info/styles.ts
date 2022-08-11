import styled from 'styled-components';
import { media } from '../../styles/devices';

interface WeatherInfoContainerProps {
  isOpen: boolean;
}

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  flex: 1;
  color: #fff;
  height: 100%;
  position: relative;

  ${media.mobileS} {
    font-size: 1.1rem;
    margin-top: 0.4rem;
    padding-bottom: ${({ isOpen }: WeatherInfoContainerProps) =>
      isOpen ? '1.2rem' : '0'};
  }

  ${media.mobileM} {
    margin-top: ${({ isOpen }: WeatherInfoContainerProps) => (isOpen ? '0' : '0.3rem')};
  }

  ${media.laptop} {
    font-size: 1.8rem;
    justify-content: flex-start;
    padding-top: ${({ isOpen }) => (isOpen ? '16vh' : '1rem')};
  }
`;
