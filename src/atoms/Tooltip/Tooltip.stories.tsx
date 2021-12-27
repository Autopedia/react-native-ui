import React from 'react';
import { View } from 'react-native';

import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Button from '../Button';
import Icon from '../Icon';
import Typography from '../Typography';
import { Tooltip } from './Tooltip';
import { grayscaleColors } from '../../styles/grayscale-colors';

storiesOf('Atoms/Tooltip', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const location = select(
      'location',
      ['top', 'bottom', 'left', 'right'],
      'bottom',
    );
    const tailPosition = select(
      'tailPosition',
      ['left', 'center', 'right'],
      'center',
    );

    return (
      <Tooltip
        message={text('message', 'Tooltip')}
        location={location}
        tailPosition={tailPosition}
        autoHide={boolean('autoHide', false)}
        duration={number('duration', 4000)}
        offset={number('offset', 10, {
          min: 0,
        })}
        color={color('color', grayscaleColors.GRAY_800)}
      >
        <Button inline>Sample Button</Button>
      </Tooltip>
    );
  })
  .add('AutoHide', () => {
    return (
      <Tooltip
        message="AutoHide Tooltip"
        location="top"
        autoHide
        duration={4000}
      >
        <Button inline>Sample Button</Button>
      </Tooltip>
    );
  })
  .add('Children', () => {
    return (
      <>
        <Tooltip message="Tooltip with Typography" location="top">
          <Typography.Paragraph size={1}>Typography</Typography.Paragraph>
        </Tooltip>
        <Tooltip message="Tooltip with Icon" location="left">
          <Icon source={require('../../assets/icons/camera/camera.png')} />
        </Tooltip>
      </>
    );
  })
  .add('Message', () => {
    return (
      <Tooltip
        message="Looooooooooooooooooooooooooooooooooooooooong Toooooooooooltip"
        location="top"
      >
        <Button>Sample Button</Button>
      </Tooltip>
    );
  })
  .add('Position', () => {
    return (
      <>
        <Tooltip message="Top Tooltip" location="top">
          <Button inline>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Right Tooltip" location="right">
          <Button inline>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Left Tooltip" location="left">
          <Button inline>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Bottom Tooltip" location="bottom">
          <Button inline>Sample Button</Button>
        </Tooltip>
      </>
    );
  })
  .add('TailPosition', () => {
    return (
      <>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Tooltip message="TopLeft Tooltip" location="top" tailPosition="left">
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="TopCenter Tooltip"
            location="top"
            tailPosition="center"
          >
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="TopRight Tooltip"
            location="top"
            tailPosition="right"
          >
            <Button>Button</Button>
          </Tooltip>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Tooltip
            message="BottomLeft Tooltip"
            location="bottom"
            tailPosition="left"
          >
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="BottomCenter Tooltip"
            location="bottom"
            tailPosition="center"
          >
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="BottomRight Tooltip"
            location="bottom"
            tailPosition="right"
          >
            <Button>Button</Button>
          </Tooltip>
        </View>
      </>
    );
  })
  .add('Offset', () => {
    return (
      <>
        <Tooltip message="Tooltip" location="top">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip
          message="Tooltip with larger offset"
          location="bottom"
          offset={20}
        >
          <Button>Sample Button</Button>
        </Tooltip>
      </>
    );
  })
  .add('Custom style', () => {
    return (
      <>
        <Tooltip
          message="Tooltip message style"
          location="bottom"
          color="#007AFF"
          style={{ paddingLeft: 24, paddingRight: 24 }}
          textStyle={{ fontWeight: 'bold' }}
        >
          <Button inline>Sample Button</Button>
        </Tooltip>
      </>
    );
  });
