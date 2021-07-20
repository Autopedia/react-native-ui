import React from 'react';
import { View } from 'react-native';

import { number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Button from '../Button';
import { Tooltip } from './Tooltip';

storiesOf('Atoms/Tooltip', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const position = select(
      'position',
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
        message={text('children', 'Tooltip')}
        position={position}
        tailPosition={tailPosition}
        offset={number('offset', 10, {
          min: 0,
        })}
      >
        <Button>Sample Button</Button>
      </Tooltip>
    );
  })
  .add('Position', () => {
    return (
      <>
        <Tooltip message="Top Tooltip" position="top">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Right Tooltip" position="right">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Left Tooltip" position="left">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Bottom Tooltip" position="bottom">
          <Button>Sample Button</Button>
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
          <Tooltip message="TopLeft Tooltip" position="top" tailPosition="left">
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="TopCenter Tooltip"
            position="top"
            tailPosition="center"
          >
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="TopRight Tooltip"
            position="top"
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
            position="bottom"
            tailPosition="left"
          >
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="BottomCenter Tooltip"
            position="bottom"
            tailPosition="center"
          >
            <Button>Button</Button>
          </Tooltip>
          <Tooltip
            message="BottomRight Tooltip"
            position="bottom"
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
        <Tooltip message="Tooltip" position="top">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip
          message="Tooltip with larger offset"
          position="bottom"
          offset={20}
        >
          <Button>Sample Button</Button>
        </Tooltip>
      </>
    );
  });
