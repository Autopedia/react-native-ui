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
        message={text('children', 'Tooltip')}
        location={location}
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
        <Tooltip message="Top Tooltip" location="top">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Right Tooltip" location="right">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Left Tooltip" location="left">
          <Button>Sample Button</Button>
        </Tooltip>
        <Tooltip message="Bottom Tooltip" location="bottom">
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
  });