import React from 'react';
import FastImage, {
  FastImageProps,
  OnLoadEvent,
} from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { Colors } from '../../styles';

const ProgressiveImage: React.FC<FastImageProps> = props => {
  const [loading, setLoading] = React.useState(true);
  const [source, setSource] = React.useState(props.source);

  const onLoad = (e: OnLoadEvent) => {
    if (props.onLoad) {
      props.onLoad(e);
    }
    setLoading(false);
  };

  const onError = () => {
    if (props.onError) {
      props.onError();
    }
    setSource(require('../../assets/images/image-fallback.png'));
  };

  return (
    <SContainer>
      {loading && (
        <SOverlay
          style={props.style}
          colors={[Colors.EXTRALIGHT, Colors.LIGHT]}
        />
      )}
      <FastImage {...props} source={source} onLoad={onLoad} onError={onError} />
    </SContainer>
  );
};

const SContainer = styled.View`
  position: relative;
`;
const SOverlay = styled(LinearGradient)`
  position: absolute;
  z-index: 1;
  width: 72px;
  height: 72px;
`;

export default ProgressiveImage;
