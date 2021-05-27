import React from 'react';
import { ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import { durationFormatter } from '@utils/formatters';
import Icon from '@atoms/Icon';
import Typography from '@atoms/Typography';
import { VideoMessageProps } from '../Message.types';
import {
  MAX_WIDTH,
  SVideoMessage,
  SVideo,
  SImage,
  SVideoOverlay,
} from '../Message.styles';

const VideoMessage: React.FC<VideoMessageProps> = ({
  url,
  height,
  width,
  duration,
}) => {
  const ERROR_ASPECT_RATIO = 0.75;

  const player = React.useRef<Video | null>(null);
  const [state, setState] =
    React.useState<'LOADING' | 'ERROR' | 'SUCCESS'>('LOADING');
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

  const onError = () => {
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
          source={require('@assets/images/video-fallback.png')}
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
              <Icon source={require('@assets/icons/play/play.png')} />
              <Typography.Paragraph size="xs" color="white">
                {durationFormatter(duration)}
              </Typography.Paragraph>
            </>
          )}
        </SVideoOverlay>
      )}
    </SVideoMessage>
  );
};

export default VideoMessage;
