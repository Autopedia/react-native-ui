/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Rating from './Rating';
import { shallow } from 'enzyme';

describe('[Rating] Unit Test', () => {
  it('should fire onChange event with value if editable', () => {
    const onChangeMock = jest.fn();

    const rating = shallow(
      <Rating size="sm" value={1} onChange={onChangeMock} editable />,
    );

    const firstStar = rating.find('TouchableStar').at(0);

    firstStar.simulate('press');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('should not fire onChange event when not editable', () => {
    const onChangeMock = jest.fn();

    const rating = shallow(
      <Rating size="sm" value={1} onChange={onChangeMock} />,
    );

    const firstStar = rating.find('Star').at(0);

    firstStar.simulate('press');
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });
});
