import React from 'react';
import { View } from 'react-native';

const GreyBackgroundDecorator = (storyFn: any) => (
  <View
    style={{
      backgroundColor: 'grey',
      padding: 10,
    }}
  >
    {storyFn()}
  </View>
);

export default GreyBackgroundDecorator;
