import React from 'react';
import styled from 'styled-components/native';

import { AnimatedDot } from './AnimatedDot';

type LoadingDotsProps = {
  color?: string;
};

export const LoadingDots: React.FC<LoadingDotsProps> = ({
  color = 'white',
}) => {
  return (
    <SContainer>
      <AnimatedDot color={color} delay={0} />
      <AnimatedDot color={color} delay={300} />
      <AnimatedDot color={color} delay={600} />
    </SContainer>
  );
};

const SContainer = styled.View`
  flex-direction: row;
  height: 24px;
  align-items: center;
`;
