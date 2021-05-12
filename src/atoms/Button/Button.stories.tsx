import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { ButtonColor, ButtonLayout, ButtonSize } from './Button.types';

import Button from '../Button';

storiesOf('Atoms/Button', module)
  .addDecorator(SThemeDecorator)
  .add(
    'Default',
    () => {
      const sizeOptions: ButtonSize[] = ['sm', 'md', 'lg'];
      const colorOptions: ButtonColor[] = [
        'default',
        'primary',
        'kakao',
        'apple',
        'google',
      ];
      const layoutOptions: ButtonLayout[] = ['inline', 'block', 'sticky'];

      return (
        <SCenterContainer>
          <Button
            size={select('size', sizeOptions, 'md')}
            color={select('color', colorOptions, 'default')}
            layout={select('layout', layoutOptions, 'inline')}
            disabled={boolean('disabled', false)}
            icon={
              boolean('icon', false) &&
              require('../../assets/icons/shop/shop.png')
            }
            iconPosition={select('iconPosition', ['left', 'right'], 'left')}
            absoluteIcon={boolean('absoluteIcon', false)}
            onPress={e => {
              e.persist();
            }}
          >
            {text('text', 'Button')}
          </Button>
        </SCenterContainer>
      );
    },
    {
      notes: 'Hi there',
    },
  );
const SCenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
