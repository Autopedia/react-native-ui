import { action } from '@storybook/addon-actions';
import { boolean, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import Icon from './Icon';
import { Text } from 'react-native';
import { SystemColorMain } from '../../styles/sytem-colors';

storiesOf('Atoms/Icon', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const usePredefinedColor = boolean('usePredefinedColor', false);
    const colorOptions: SystemColorMain[] = [
      'primary',
      'success',
      'error',
      'black',
      'white',
    ];
    return (
      <>
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color={
            usePredefinedColor
              ? select('color', colorOptions, 'primary')
              : color('color', '#000000')
          }
          touchable={boolean('touchable', true)}
          disabled={boolean('disabled', false)}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Text>backgroundColor is set to grey for convienience.</Text>
      </>
    );
  })
  .add('Color', () => {
    return (
      <>
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="primary"
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="success"
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="error"
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="black"
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="white"
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
      </>
    );
  })
  .add('Touchable', () => {
    return (
      <Icon
        source={require('@assets/icons/camera/camera.png')}
        touchable
        color="primary"
        style={{ backgroundColor: '#E3E3E3' }}
        onPress={e => action('onPress')(e.nativeEvent)}
      />
    );
  })
  .add('Disabled', () => {
    return (
      <>
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="primary"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="success"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="error"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="black"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color="white"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
      </>
    );
  });
