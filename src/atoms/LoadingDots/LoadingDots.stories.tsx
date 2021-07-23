import React from 'react';

import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { LoadingDots } from './LoadingDots';
import { color } from '@storybook/addon-knobs';
import colors from '../../styles/colors';
import styled from 'styled-components/native';
import { Text } from 'react-native';

storiesOf('Atoms/LoadingDots', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <SView>
        <LoadingDots color={color('color', colors.WHITE)} />
        <Text>backgroundColor is set to grey for convienience.</Text>
      </SView>
    );
  })
  .add('Color', () => {
    return (
      <SView>
        <LoadingDots />
        <LoadingDots color={colors.PRIMARY} />
      </SView>
    );
  });

const SView = styled.View`
  background-color: #ddd;
  align-items: center;
`;
