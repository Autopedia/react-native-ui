import React from 'react';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import CenterContainerDecorator from '../../decorators/center-container.decorator';

import Button from '../../atoms/Button';
import { action } from '@storybook/addon-actions';
import { ButtonSize, ButtonType } from './Button.types';
import { buttonTouchedColors, buttonDisabledColors } from './buttonColors';
import { systemColors } from '../../styles/system-colors';
import { grayscaleColors } from '../../styles/grayscale-colors';
import { subColors } from '../../styles/sub-colors';
import Typography from '../Typography';

storiesOf('Atoms/Button', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)

  .add('Playground', () => {
    const typeOptions: ButtonType[] = ['solid', 'text'];
    const sizeOptions: ButtonSize[] = ['sm', 'md', 'lg'];

    return (
      <Button
        type={select('type', typeOptions, 'solid')}
        size={select('size', sizeOptions, 'lg')}
        inline={boolean('inline', false)}
        tile={boolean('tile', false)}
        color={color('color', systemColors.PRIMARY)}
        touchedColor={color('touchedColor', buttonTouchedColors.PRIMARY)}
        disabledColor={color('disabledColor', buttonDisabledColors.PRIMARY)}
        disabled={boolean('disabled', false)}
        icon={
          boolean('icon', false) && require('../../assets/icons/tire/tire.png')
        }
        iconPosition={select('iconPosition', ['left', 'right'], 'left')}
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
          type="solid"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Solid
        </Button>
        <Button
          type="text"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text
        </Button>
      </>
    );
  })
  .add('Size', () => {
    return (
      <>
        <Button
          type="solid"
          size="lg"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Large
        </Button>
        <Button
          type="solid"
          size="md"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Medium
        </Button>
        <Button
          type="solid"
          size="sm"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Small
        </Button>
        <Button
          type="text"
          size="lg"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Large
        </Button>
        <Button
          type="text"
          size="md"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Large
        </Button>
        <Button
          type="text"
          size="sm"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Large
        </Button>
      </>
    );
  })
  .add('Inline', () => {
    return (
      <>
        <Button
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Block
        </Button>
        <Button
          inline
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline
        </Button>
      </>
    );
  })
  .add('Tile', () => {
    return (
      <>
        <Button
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          tile
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Tile
        </Button>
      </>
    );
  })
  .add('Loading', () => {
    return (
      <>
        <Button
          color={systemColors.PRIMARY}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          loading
          color={systemColors.PRIMARY}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Loading
        </Button>
        <Button
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          loading
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Loading
        </Button>
        <Button
          inline
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default Inline
        </Button>
        <Button
          loading
          inline
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Loading Inline
        </Button>
        <Button
          inline
          size="sm"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline size small
        </Button>
        <Button
          size="sm"
          loading
          inline
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Loading Inline size small
        </Button>
      </>
    );
  })
  .add('Disabled', () => {
    return (
      <>
        <Button
          color={systemColors.PRIMARY}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          disabled
          color={systemColors.PRIMARY}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default Disabled
        </Button>
        <Button
          inline
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline
        </Button>
        <Button
          inline
          disabled
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline Disabled
        </Button>
        <Button
          type="text"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text
        </Button>
        <Button
          type="text"
          disabled
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Disabled
        </Button>
      </>
    );
  })
  .add('Color/Solid', () => {
    return (
      <>
        <Button
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          color={systemColors.PRIMARY}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Primary
        </Button>
        <Button
          color={systemColors.SUCCESS}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Success
        </Button>
        <Button
          color={systemColors.ERROR}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Error
        </Button>
        <Button
          color={systemColors.WHITE}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{
            marginBottom: 5,
          }}
        >
          White
        </Button>
        <Button
          color={systemColors.BLACK}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{
            marginBottom: 5,
          }}
        >
          Black
        </Button>
        <Button color="#123456" onPress={e => action('onPress')(e.nativeEvent)}>
          Custom Color #123456
        </Button>
      </>
    );
  })
  .add('Color/Text', () => {
    return (
      <>
        <Button
          type="text"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Default
        </Button>
        <Button
          type="text"
          color={systemColors.PRIMARY}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Primary
        </Button>
        <Button
          type="text"
          color={systemColors.SUCCESS}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Success
        </Button>
        <Button
          type="text"
          color={systemColors.ERROR}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Error
        </Button>
        <Button
          type="text"
          color={subColors.LAVENDER}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Lavender
        </Button>
        <Button
          type="text"
          color="#123456"
          onPress={e => action('onPress')(e.nativeEvent)}
        >
          Custom Color #123456
        </Button>
      </>
    );
  })
  .add('Icon', () => {
    return (
      <>
        <Button
          color={systemColors.PRIMARY}
          icon={require('../../assets/icons/tire/tire.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Icon Left with Primary solid color
        </Button>
        <Button
          color={systemColors.WHITE}
          icon={require('../../assets/icons/tire/tire.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Icon Right with White solid color
        </Button>
        <Button
          icon={require('../../assets/icons/tire/tire.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Icon Left
        </Button>
        <Button
          icon={require('../../assets/icons/tire/tire.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Icon Right
        </Button>
        <Button
          inline
          icon={require('../../assets/icons/tire/tire.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline Icon Left
        </Button>
        <Button
          inline
          icon={require('../../assets/icons/tire/tire.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Inline Icon Right
        </Button>
        <Button
          type="text"
          icon={require('../../assets/icons/tire/tire.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Icon Left
        </Button>
        <Button
          type="text"
          icon={require('../../assets/icons/tire/tire.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Icon Right
        </Button>
        <Button
          type="text"
          size="sm"
          color={subColors.CARROT}
          icon={require('../../assets/icons/tire/tire.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Icon Left
        </Button>
        <Button
          type="text"
          size="sm"
          color={subColors.CARROT}
          icon={require('../../assets/icons/tire/tire.png')}
          iconPosition="right"
          onPress={e => action('onPress')(e.nativeEvent)}
          style={{ marginBottom: 5 }}
        >
          Text Icon Right
        </Button>
      </>
    );
  })
  .add('CustomContainerStyle', () => {
    return (
      <>
        <Button
          color={systemColors.WHITE}
          icon={require('../../assets/icons/google/google.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          colorIcon={false}
          style={{
            marginBottom: 20,
            shadowColor: systemColors.BLACK,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            shadowOpacity: 0.1,
          }}
        >
          구글로 시작하기
        </Button>
        <Button
          color="khaki"
          icon={require('../../assets/icons/kakao/kakao.png')}
          onPress={e => action('onPress')(e.nativeEvent)}
          colorIcon={false}
          style={{
            marginBottom: 20,
            shadowColor: systemColors.BLACK,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            shadowOpacity: 0.1,
          }}
        >
          <Typography.Paragraph
            size={1}
            color={systemColors.BLACK}
            fontWeight="medium"
          >
            카카오톡으로 시작하기
          </Typography.Paragraph>
        </Button>
      </>
    );
  });
