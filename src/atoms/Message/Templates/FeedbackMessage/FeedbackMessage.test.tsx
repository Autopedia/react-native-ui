/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { FeedbackMessage } from './FeedbackMessage';
import { Alert, Linking } from 'react-native';

describe('[Message/FeedbackMessage] Unit Test', () => {
  let mockCanOpenURL = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mock('react-native/Libraries/Linking/Linking', () => ({
      openURL: jest.fn(() => Promise.resolve()),
      canOpenURL: mockCanOpenURL,
    }));

    jest.mock('react-native/Libraries/Alert/Alert', () => ({
      alert: jest.fn(),
    }));
  });

  it('should open link when button pressed', async () => {
    const mockedLink = 'https://doctor-cha.com';
    mockCanOpenURL.mockResolvedValue(true);

    const feedbackMessage = shallow(
      <FeedbackMessage type="feedback" link={mockedLink} />,
    );

    feedbackMessage.dive().find('Button').simulate('press');

    await mockCanOpenURL();

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith(mockedLink);
  });

  it('should alert when invalid link is given', async () => {
    const mockedInvalidLink = 'this-is-invalid';
    mockCanOpenURL.mockResolvedValue(false);

    const feedbackMessage = shallow(
      <FeedbackMessage type="feedback" link={mockedInvalidLink} />,
    );

    feedbackMessage.dive().find('Button').simulate('press');
    await mockCanOpenURL();

    expect(Linking.openURL).not.toHaveBeenCalled();
    expect(Alert.alert).toHaveBeenCalledTimes(1);
  });
});
