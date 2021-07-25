/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';
import { systemColors } from '../../styles/system-colors';
import { buttonTouchedColors } from './buttonColors';
import { grayscaleColors } from '../../styles/grayscale-colors';

describe('[Button] Unit Test', () => {
  it('should fire onPress event', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';

    const button = shallow(<Button onPress={onPressMock}>{textMock}</Button>);

    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  it('should not fire onPress event when disabled', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button disabled onPress={onPressMock}>
        {textMock}
      </Button>,
    );
    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
  it('should not fire onPress event when loading', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button loading onPress={onPressMock}>
        {textMock}
      </Button>,
    );
    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
  it('should not fire onPress event when loading and disabled', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button loading disabled onPress={onPressMock}>
        {textMock}
      </Button>,
    );
    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
  it('should show corresponding colors on pressed state', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button
        color={systemColors.PRIMARY}
        onPress={onPressMock}
        icon={require('../../assets/icons/tire/tire.png')}
      >
        {textMock}
      </Button>,
    );
    const container = shallow(button.props().children(true));
    const buttonText = container.find('ButtonText');
    const buttonIcon = container.find('ButtonIcon');

    const containerProps = container.props() as {
      containerTouchedColor?: string;
    };

    const buttonTextProps = buttonText.props() as { textColor?: string };
    const buttonIconProps = buttonIcon.props() as { color?: string };

    expect(containerProps.containerTouchedColor).toBe(
      buttonTouchedColors[systemColors.PRIMARY],
    );
    expect(buttonTextProps.textColor).toBe(systemColors.WHITE);
    expect(buttonIconProps.color).toBe(systemColors.WHITE);
  });
  it('should show fixed color on pressed state if touchedColor is set', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button
        color={systemColors.PRIMARY}
        onPress={onPressMock}
        touchedColor={systemColors.SUCCESS}
        icon={require('../../assets/icons/tire/tire.png')}
      >
        {textMock}
      </Button>,
    );
    const container = shallow(button.props().children(true));
    const buttonText = container.find('ButtonText');
    const buttonIcon = container.find('ButtonIcon');

    const containerProps = container.props() as {
      containerTouchedColor?: string;
    };

    const buttonTextProps = buttonText.props() as { textColor?: string };
    const buttonIconProps = buttonIcon.props() as { color?: string };

    expect(containerProps.containerTouchedColor).toBe(systemColors.SUCCESS);
    expect(buttonTextProps.textColor).toBe(systemColors.WHITE);
    expect(buttonIconProps.color).toBe(systemColors.WHITE);
  });
  it('should show grayscale color as touchedColor if type is text', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button
        type="text"
        color={systemColors.PRIMARY}
        onPress={onPressMock}
        icon={require('../../assets/icons/tire/tire.png')}
      >
        {textMock}
      </Button>,
    );
    const container = shallow(button.props().children(true));

    const containerProps = container.props() as {
      containerTouchedColor?: string;
    };

    expect(containerProps.containerTouchedColor).toBe(grayscaleColors.GRAY_100);
  });

  it('should show icon color with prop color if type is text', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button
        type="text"
        color={systemColors.PRIMARY}
        onPress={onPressMock}
        icon={require('../../assets/icons/tire/tire.png')}
      >
        {textMock}
      </Button>,
    );
    const container = shallow(button.props().children(true));
    const buttonIcon = container.find('ButtonIcon');

    const containerProps = container.props() as {
      containerTouchedColor?: string;
    };

    const buttonIconProps = buttonIcon.props() as { color?: string };

    expect(containerProps.containerTouchedColor).toBe(grayscaleColors.GRAY_100);
    expect(buttonIconProps.color).toBe(systemColors.PRIMARY);
  });
});
