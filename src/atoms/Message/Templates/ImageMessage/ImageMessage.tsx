import React from 'react';
import { TouchableOpacity } from 'react-native';

import { MAX_WIDTH, SImage } from '../../Message.styles';
import { ImageMessageProps } from '../../Message.types';

export const ImageMessage: React.FC<ImageMessageProps> = ({
  url,
  height,
  width,
  onPressImage,
}) => {
  const ERROR_ASPECT_RATIO = 0.75;

  const [image, setImage] = React.useState<{
    source: { uri: string } | any;
    style?: { width: number; height: number };
  }>({
    source: { uri: url },
    style: {
      width: MAX_WIDTH,
      height: (MAX_WIDTH * height) / width,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressImage}>
      <SImage
        {...image}
        onError={() => {
          setImage({
            source: require('../../../../assets/images/image-fallback.png'),
            style: {
              width: MAX_WIDTH,
              height: MAX_WIDTH * ERROR_ASPECT_RATIO,
            },
          });
        }}
      />
    </TouchableOpacity>
  );
};
