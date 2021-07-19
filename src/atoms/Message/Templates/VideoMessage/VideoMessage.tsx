import React from 'react';
import { ActivityIndicator } from 'react-native';
import Video, { LoadError } from 'react-native-video';
import styled from 'styled-components/native';

import Icon from '../../../../atoms/Icon';
import Typography from '../../../../atoms/Typography';
import spacing from '../../../../styles/spacing';
import { durationFormatter } from '../../../../utils/formatters';
import { MAX_WIDTH, SImage } from '../../Message.styles';
import { VideoMessageProps } from '../../Message.types';

const VideoMessage: React.FC<VideoMessageProps> = ({
  url,
  height,
  width,
  duration,
}) => {
  const ERROR_ASPECT_RATIO = 0.75;

  const player = React.useRef<Video | null>(null);
  const [state, setState] = React.useState<'LOADING' | 'ERROR' | 'SUCCESS'>(
    'LOADING',
  );
  const [size, setSize] = React.useState<{ width: number; height: number }>({
    width: MAX_WIDTH,
    height: (MAX_WIDTH * height) / width,
  });
  const [playing, setPlaying] = React.useState(false);

  const presentFullscreen = () => {
    if (player.current) {
      player.current.seek(0);
      player.current.presentFullscreenPlayer();
      setPlaying(true);
    }
  };

  const onDismissFullscreen = () => {
    if (player.current) {
      setPlaying(false);
    }
  };

  const onLoad = () => {
    setState('SUCCESS');
  };

  const onError = (error: LoadError) => {
    console.log(error.error);
    setState('ERROR');
    setSize({ width: 0, height: 0 });
  };

  const onEnd = () => {
    if (player.current) {
      setPlaying(false);
    }
  };

  return (
    <SVideoMessage>
      <SVideo
        ref={player}
        paused={!playing}
        onLoad={onLoad}
        onError={onError}
        onEnd={onEnd}
        onFullscreenPlayerWillDismiss={onDismissFullscreen}
        source={{ uri: url }}
        resizeMode="cover"
        style={size}
      />
      {state === 'ERROR' ? (
        <SImage
          source={require('../../../../assets/images/video-fallback.png')}
          style={{ width: MAX_WIDTH, height: MAX_WIDTH * ERROR_ASPECT_RATIO }}
        />
      ) : (
        <SVideoOverlay
          activeOpacity={state === 'LOADING' ? 1.0 : 0.7}
          onPress={state === 'LOADING' ? undefined : presentFullscreen}
        >
          {state === 'LOADING' ? (
            <ActivityIndicator color="white" />
          ) : (
            <>
              <Icon
                source={require('../../../../assets/icons/play/play.png')}
              />
              <Typography.Paragraph size={2} color="white">
                {durationFormatter(duration)}
              </Typography.Paragraph>
            </>
          )}
        </SVideoOverlay>
      )}
    </SVideoMessage>
  );
};

const SVideoMessage = styled.View`
  position: relative;
  overflow: hidden;
  ${props => `
    border-radius: 14px;
  `}
`;

const SVideo = styled(Video)``;
const SVideoOverlay = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default VideoMessage;
