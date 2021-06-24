import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import SThemeDecorator from '@decorators/styled-components.decorator';
import CenterContainerDecorator from '@decorators/center-container.decorator';

import Button from '@atoms/Button';
import { action } from '@storybook/addon-actions';
import { ButtonType } from './Button.types';
import { SystemColorMain } from '../../styles/sytem-colors';

storiesOf('Atoms/Button', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)

  .add('Playground', () => {
    const typeOptions: ButtonType[] = ['block', 'inline', 'text'];
    const colorOptions: SystemColorMain[] = [
      'primary',
      'success',
      'error',
      'black',
      'white',
    ];

    return (
      <Button
        type={select('type', typeOptions, 'inline')}
        color={select('color', colorOptions, 'primary')}
        textColor={select('textColor', colorOptions, 'white')}
        tile={boolean('tile', false)}
        disabled={boolean('disabled', false)}
        icon={boolean('icon', false) && require('@assets/icons/shop/shop.png')}
        iconPosition={select('iconPosition', ['left', 'right'], 'left')}
        absoluteIcon={boolean('absoluteIcon', false)}
        onPress={e => action('onPress')(e.nativeEvent)}
      >
        {text('text', 'Button')}
      </Button>
    );
  })
  .add('Type', () => {
    return (
      <>
        <Button
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline
        </Button>
        <Button
          type="block"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Block
        </Button>

        <Button
          type="text"
          textColor="black"
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          Text
        </Button>
      </>
    );
  })
  .add('Tile', () => {
    return (
      <>
        <Button
          type="block"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          type="block"
          tile
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Tile
        </Button>
      </>
    );
  })
  .add('Disabled', () => {
    return (
      <>
        <Button
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          disabled
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default Disabled
        </Button>
        <Button
          type="block"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Block
        </Button>
        <Button
          type="block"
          disabled
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          Block Disabled
        </Button>
        <Button
          type="text"
          textColor="black"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text
        </Button>
        <Button
          type="text"
          textColor="black"
          disabled
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          Text Disabled
        </Button>
      </>
    );
  })
  .add('Color/Inline', () => {
    return (
      <>
        <Button
          color="primary"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Primary
        </Button>
        <Button
          color="success"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Success
        </Button>
        <Button
          color="error"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Error
        </Button>
        <Button
          color="white"
          textColor="black"
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          White
        </Button>
        <Button color="black" onPress={e => action('onPress')(e.nativeEvent)}>
          Black
        </Button>
      </>
    );
  })
  .add('Color/Block', () => {
    return (
      <>
        <Button
          type="block"
          color="primary"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Primary
        </Button>
        <Button
          type="block"
          color="success"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Success
        </Button>
        <Button
          type="block"
          color="error"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Error
        </Button>
        <Button
          type="block"
          color="white"
          textColor="black"
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          White
        </Button>
        <Button
          type="block"
          color="black"
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          Black
        </Button>
      </>
    );
  })
  .add('Color/Text', () => {
    return (
      <>
        <Button
          type="text"
          textColor="primary"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Primary
        </Button>
        <Button
          type="text"
          textColor="success"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Success
        </Button>
        <Button
          type="text"
          textColor="error"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Error
        </Button>
        <Button
          type="text"
          textColor="black"
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          Black
        </Button>
      </>
    );
  })
  .add('Icon', () => {
    return (
      <>
        <Button
          icon={require('@assets/icons/shop/shop.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Icon Left
        </Button>
        <Button
          icon={require('@assets/icons/shop/shop.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Icon Right
        </Button>
        <Button
          type="block"
          icon={require('@assets/icons/shop/shop.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Block Icon Left
        </Button>
        <Button
          type="block"
          icon={require('@assets/icons/shop/shop.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Block Icon Right
        </Button>
        <Button
          type="text"
          textColor="black"
          icon={require('@assets/icons/shop/shop.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Icon Left
        </Button>
        <Button
          type="text"
          textColor="black"
          icon={require('@assets/icons/shop/shop.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Icon Right
        </Button>
      </>
    );
  })
  .add('AbsoluteIcon', () => {
    return (
      <>
        <Button
          type="block"
          icon={require('@assets/icons/shop/shop.png')}
          absoluteIcon
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Absolute Icon Left
        </Button>
        <Button
          type="block"
          icon={require('@assets/icons/shop/shop.png')}
          iconPosition="right"
          absoluteIcon
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Absolute Icon Right
        </Button>
      </>
    );
  });
