import { action } from '@storybook/addon-actions';
import { boolean, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Icon from './Icon';
import { IconSize } from './Icon.types';
import { Text } from 'react-native';
import { systemColors } from '../../styles/system-colors';

storiesOf('Atoms/Icon', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const typeOptions: IconSize[] = ['sm', 'md', 'lg'];
    return (
      <>
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={color('color', systemColors.PRIMARY)}
          size={select('size', typeOptions, 'md')}
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
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.PRIMARY}
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.SUCCESS}
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.ERROR}
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color="black"
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color="white"
          style={{ backgroundColor: '#E3E3E3' }}
        />
      </>
    );
  })
  .add('Size', () => {
    return (
      <>
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.PRIMARY}
          size="lg"
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.SUCCESS}
          size="md"
          style={{ backgroundColor: '#E3E3E3' }}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.ERROR}
          size="sm"
          style={{ backgroundColor: '#E3E3E3' }}
        />
      </>
    );
  })
  .add('Touchable', () => {
    return (
      <>
        <Text>With onPress Icon</Text>
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.PRIMARY}
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Text>Without onPress</Text>
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.PRIMARY}
          style={{ backgroundColor: '#E3E3E3' }}
        />
      </>
    );
  })
  .add('Disabled', () => {
    return (
      <>
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.PRIMARY}
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.SUCCESS}
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.ERROR}
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color="black"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color="white"
          disabled
          style={{ backgroundColor: '#E3E3E3' }}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
      </>
    );
  })
  .add('CustomStyle', () => {
    return (
      <>
        <Icon
          source={require('../../assets/icons/camera/camera.png')}
          color={systemColors.PRIMARY}
          style={{
            backgroundColor: '#E3E3E3',
            width: 40,
            height: 40,
            marginBottom: 10,
          }}
        />
        <Icon
          source={require('../../assets/icons/tire/tire.png')}
          color={systemColors.PRIMARY}
          style={{
            backgroundColor: '#E3E3E3',
            width: 80,
            height: 40,
            marginRight: -20,
          }}
        />
      </>
    );
  });
