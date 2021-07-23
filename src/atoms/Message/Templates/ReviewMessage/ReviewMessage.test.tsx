/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { ReviewMessage } from './ReviewMessage';
import { shallow } from 'enzyme';

describe('[Message/ReviewMessage] Unit Test', () => {
  let Platform;
  beforeAll(() => {
    Platform = require('react-native').Platform;
  });
  it('should fire onPressReview event', () => {
    const onPressReviewMock = jest.fn();

    const reviewMessage = shallow(
      <ReviewMessage type="review" onPressReview={onPressReviewMock} />,
    );

    reviewMessage.dive().find('Button').simulate('press');
    expect(onPressReviewMock).toHaveBeenCalledTimes(1);
  });

  describe('platform test', () => {
    beforeEach(() => {
      Platform.OS = Platform.OS === 'android' ? 'ios' : 'android';
    });

    it('should render android', () => {
      const reviewMessage = shallow(
        <ReviewMessage type="review" onPressReview={() => {}} />,
      );
      const reviewText = reviewMessage.prop('footer').props.children;

      expect(reviewText).toBe('플레이스토어 리뷰 남기기');
    });

    it('should render ios', () => {
      const reviewMessage = shallow(
        <ReviewMessage type="review" onPressReview={() => {}} />,
      );
      const reviewText = reviewMessage.prop('footer').props.children;

      expect(reviewText).toBe('앱스토어 리뷰 남기기');
    });
  });
});
