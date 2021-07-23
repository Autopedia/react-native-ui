/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { ReviewMessage } from './ReviewMessage';
import { shallow } from 'enzyme';

describe('[Message/ReviewMessage] Unit Test', () => {
  it('should fire onPressReview event', () => {
    const onPressReviewMock = jest.fn();

    const reviewMessage = shallow(
      <ReviewMessage type="review" onPressReview={onPressReviewMock} />,
    );

    reviewMessage.dive().find('Button').simulate('press');
    expect(onPressReviewMock).toHaveBeenCalledTimes(1);
  });
});
