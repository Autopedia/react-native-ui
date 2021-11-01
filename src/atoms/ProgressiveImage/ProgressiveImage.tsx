import React from 'react';
import FastImage, {
  FastImageProps,
  OnLoadEvent,
} from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { Colors } from '../../styles';
import Icon from '../Icon';

const ProgressiveImage: React.FC<FastImageProps> = props => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
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
    setError(true);
    setSource(require('../../assets/images/image-fallback.png'));
  };

  const refreshImage = async () => {
    setError(false);
    setLoading(true);
    setSource(props.source);
  };

  return (
    <SContainer>
      {loading && (
        <SOverlay
          style={props.style}
          colors={[Colors.EXTRALIGHT, Colors.LIGHT]}
        />
      )}
      {error && (
        <SRefreshConateinr onPress={refreshImage}>
          <Icon
            size="lg"
            color={Colors.BLACK}
            source={require('../../assets/icons/refresh/refresh.png')}
          />
        </SRefreshConateinr>
      )}
      <FastImage {...props} source={source} onLoad={onLoad} onError={onError} />
    </SContainer>
  );
};

const SContainer = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

const SOverlay = styled(LinearGradient)`
  position: absolute;
  z-index: 1;
  width: 72px;
  height: 72px;
`;

SOverlay.displayName = 'Overlay';

const SRefreshConateinr = styled.Pressable`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  position: absolute;
  z-index: 1;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.GRAY_200};
`;

SRefreshConateinr.displayName = 'Refresh';

export default ProgressiveImage;
