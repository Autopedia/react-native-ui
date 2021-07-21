import { storiesOf } from '@storybook/react-native';
import React, { useEffect, useRef } from 'react';
import { Alert as RNAlert } from 'react-native';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Alert from '.';
import { AlertHandle } from './Alert.types';
import Button from '../../atoms/Button';
import { AlertProps } from './Alert';
import { Text, View } from 'react-native';
import Icon from '../../atoms/Icon';

const AlertWrapper: React.FC<AlertProps> = props => {
  const alert = useRef<AlertHandle>(null);

  useEffect(() => {
    alert.current?.open();
  }, []);

  return (
    <>
      <Button
        onPress={() => {
          alert.current?.open();
        }}
      >
        Open Alert
      </Button>
      <Alert
        ref={alert}
        content={props.content}
        title={props.title}
        okText={props.okText}
        onPressOk={props.onPressOk}
        okTextStrong={props.okTextStrong}
        okTextColor={props.okTextColor}
        cancelText={props.cancelText}
        onPressCancel={props.onPressCancel}
        cancelTextStrong={props.cancelTextStrong}
        cancelTextColor={props.cancelTextColor}
      />
    </>
  );
};

storiesOf('Molecules/Alert', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <AlertWrapper
        content={text(
          'contents',
          `땡땡땡이 완료되지 않았습니다.\n그래도 나가시겠습니까?`,
        )}
        title={text('title', undefined)}
        okText={text('okText', '확인')}
        onPressOk={() => action('onPress')()}
        okTextStrong={boolean('okTextStrong', undefined)}
        okTextColor={text('okTextColor', undefined)}
        cancelText={text('cancelText', undefined)}
        onPressCancel={() => action('onPress')()}
        cancelTextStrong={boolean('cancelTextStrong', undefined)}
        cancelTextColor={text('cancelTextColor', undefined)}
      />
    );
  })
  .add('Title Alert', () => {
    return (
      <AlertWrapper
        title="타이틀"
        content={`땡땡땡이 완료되지 않았습니다.\n그래도 나가시겠습니까?`}
      />
    );
  })
  .add('ReactNode Title Alert', () => {
    return (
      <AlertWrapper
        title={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon source={require('../../assets/icons/camera/camera.png')} />
            <Text>아이콘 타이틀</Text>
          </View>
        }
        content={`땡땡땡이 완료되지 않았습니다.\n그래도 나가시겠습니까?`}
      />
    );
  })
  .add('ReactNode Contents Alert', () => {
    return (
      <AlertWrapper
        content={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon source={require('../../assets/icons/camera/camera.png')} />
            <Text>아이콘 내용</Text>
          </View>
        }
      />
    );
  })
  .add('Two Button Alert', () => {
    return (
      <AlertWrapper
        content={`땡땡땡이 완료되지 않았습니다.\n그래도 나가시겠습니까?`}
        okText="네"
        cancelText="아니오"
        okTextColor="#007AFF"
        okTextStrong
      />
    );
  })
  .add('Vertical Button Alert', () => {
    return (
      <AlertWrapper
        content={`땡땡땡이 완료되지 않았습니다.\n그래도 나가시겠습니까?`}
        okText="자세히 알아보기"
        cancelText="닫기"
        cancelTextStrong
        cancelTextColor="#007AFF"
      />
    );
  });
