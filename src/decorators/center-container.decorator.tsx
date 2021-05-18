import React from 'react';
import styled from 'styled-components/native';

const CenterContainerDecorator = (storyFn: any) => (
  <SCenterContainer>{storyFn()}</SCenterContainer>
);

const SCenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default CenterContainerDecorator;
