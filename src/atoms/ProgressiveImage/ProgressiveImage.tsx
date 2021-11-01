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
        <SRefresh
          size="lg"
          color={Colors.PRIMARY}
          source={require('../../assets/icons/refresh/refresh.png')}
          onPress={refreshImage}
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

SOverlay.displayName = 'Overlay';

const SRefresh = styled(Icon)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-self: center;
  justify-content: center;
`;

SRefresh.displayName = 'Refresh';

export default ProgressiveImage;
