import React from 'react';
import { BottomInfoContainer } from './styles';

interface BottomInfoProps {
  humidity: number;
  pressure: number;
  wind: {
    direction: string;
    speed: number;
  };
}

export const BottomInfo = ({ wind, humidity, pressure }: BottomInfoProps) => {
  return (
    <BottomInfoContainer>
      <span>
        Vento: {wind?.direction} {wind?.speed}km/h
      </span>
      <span>Humidade: {humidity}%</span>
      <span>Pressão: {pressure}hPA</span>
    </BottomInfoContainer>
  );
};
