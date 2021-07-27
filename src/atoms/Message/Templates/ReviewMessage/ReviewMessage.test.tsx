/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { ReviewMessage } from './ReviewMessage';

describe('[Message/ReviewMessage] Unit Test', () => {
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
      jest.resetModules();
    });

    it('should render android', () => {
      jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'android',
      }));
      const reviewMessage = shallow(
        <ReviewMessage type="review" onPressReview={() => {}} />,
      );
      const reviewText = reviewMessage.prop('footer').props.children;

      expect(reviewText).toBe('플레이스토어 리뷰 남기기');
    });

    it('should render ios', () => {
      jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'ios',
      }));
      const reviewMessage = shallow(
        <ReviewMessage type="review" onPressReview={() => {}} />,
      );
      const reviewText = reviewMessage.prop('footer').props.children;

      expect(reviewText).toBe('앱스토어 리뷰 남기기');
    });
  });
});
