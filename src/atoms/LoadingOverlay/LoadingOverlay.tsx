import { Colors } from '@styles';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const LoadingOverlay: React.FC = () => {
  return (
    <SContainer>
      <ActivityIndicator color={Colors.PRIMARY} />
    </SContainer>
  );
};

const SContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9999999;
`;

export default LoadingOverlay;
