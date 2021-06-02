/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import PostMessage from './PostMessage';
import { shallow } from 'enzyme';

describe('[Message/PostMessage] Unit Test', () => {
  it('should fire onPressDetail & onPressNavigate event', () => {
    const linebreakTitle = 'Title\nWith\nLinebreak';
    const noLinebreakTitle = 'Title With Linebreak';

    const postMessage = shallow(
      <PostMessage
        type="post"
        title={linebreakTitle}
        thumbnailUrl="https://picsum.photos/200/200"
      />,
    );

    const headingText = postMessage.find('Heading').dive().text();

    expect(headingText).toEqual(noLinebreakTitle);
  });
});
