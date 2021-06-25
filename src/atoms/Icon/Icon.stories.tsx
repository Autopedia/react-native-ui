import { action } from '@storybook/addon-actions';
import { boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import Icon from './Icon';
import { Text } from 'react-native';
import { systemColors } from '@styles/system-colors';

storiesOf('Atoms/Icon', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <>
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color={color('color', systemColors.PRIMARY)}
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
          color={systemColors.PRIMARY}
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color={systemColors.SUCCESS}
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color={systemColors.ERROR}
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
        color={systemColors.PRIMARY}
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
          color={systemColors.PRIMARY}
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color={systemColors.SUCCESS}
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('@assets/icons/camera/camera.png')}
          color={systemColors.ERROR}
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
