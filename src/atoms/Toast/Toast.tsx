import React from 'react';
import { Animated, Easing } from 'react-native';
import colors from '../../styles/colors';
import styled from 'styled-components/native';
import Typography from '../Typography';
import { useSafeAreaInsets, EdgeInsets } from 'react-native-safe-area-context';
import Icon from '../Icon';
import { GestureResponderEvent } from 'react-native';

const { Paragraph } = Typography;
type ToastShowProps = {
  message: string;
  duration?: number;
  autoHide?: boolean;
  toastPosition?: ToastPosition;
};
type ToastPosition = 'top' | 'bottom';
type ToastActions = {
  show: ({
    message,
    duration,
    autoHide,
    toastPosition,
  }: ToastShowProps) => void;
  hide: () => void;
};

const initialActions: ToastActions = {
  show: ({ message }) =>
    console.error('TOAST: actions not provided yet: ', message),
  hide: () => console.error('TOAST: actions not provided yet: force hide'),
};

const ToastContext = React.createContext<ToastActions>(initialActions);

export const useToast = () => {
  const toast = React.useContext(ToastContext);
  return toast;
};

export const ToastProvider: React.FC = ({ children }) => {
  const [toastPosition, setToastPosition] =
    React.useState<ToastPosition>('bottom');
  const toastAnimValue = React.useRef(new Animated.Value(500)).current;
  const [msg, setMsg] = React.useState('');
  const insets = useSafeAreaInsets();

  const showMessage = React.useCallback(
    (duration: number, autoHide: boolean, toastPosition: ToastPosition) => {
      toastAnimValue.setValue(toastPosition === 'top' ? -500 : 500);
      if (autoHide) {
        Animated.sequence([
          Animated.timing(toastAnimValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.quad),
          }),
          Animated.delay(duration),
          Animated.timing(toastAnimValue, {
            toValue: toastPosition === 'top' ? -500 : 500,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        Animated.timing(toastAnimValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }).start();
      }
    },
    [toastAnimValue],
  );

  const hideMessage = React.useCallback(() => {
    Animated.timing(toastAnimValue, {
      toValue: 500,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [toastAnimValue]);

  const actions: ToastActions = {
    show: ({
      message,
      duration = 3000,
      autoHide = true,
      toastPosition = 'bottom',
    }) => {
      setMsg(message);
      setToastPosition(toastPosition);
      showMessage(duration, autoHide, toastPosition);
    },
    hide: () => {
      console.log('pressed hide');
      hideMessage();
    },
  };
  return (
    <ToastContext.Provider value={actions}>
      {children}
      <SAnimatedView
        style={{
          transform: [
            {
              translateY: toastAnimValue,
            },
          ],
          ...(toastPosition === 'top' ? { top: 20 } : { bottom: 20 }),
        }}
      >
        <BasicToast
          message={msg}
          insets={insets}
          toastPosition={toastPosition}
          onExitPress={() => actions.hide()}
        />
      </SAnimatedView>
    </ToastContext.Provider>
  );
};

type BasicToastProps = {
  insets: EdgeInsets;
  toastPosition: ToastPosition;
  message: string;
  onExitPress: (e: GestureResponderEvent) => void;
};
export const BasicToast: React.FC<BasicToastProps> = ({
  insets,
  toastPosition,
  message,
  onExitPress,
}) => {
  return (
    <SToastWrapper insets={insets} toastPosition={toastPosition}>
      <Paragraph size={2} color={colors.WHITE}>
        {message}
      </Paragraph>
      <Icon
        source={require('../../assets/icons/exit/exit.png')}
        touchable
        onPress={onExitPress}
      />
    </SToastWrapper>
  );
};

const SAnimatedView = styled(Animated.View)`
  position: absolute;
  width: 100%;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

type SToastWrapperProps = {
  insets: EdgeInsets;
  toastPosition: ToastPosition;
};

const SToastWrapper = styled.View<SToastWrapperProps>`
  padding: 12px 10px 12px 16px;
  border-radius: 8px;
  margin: 0px 20px;
  width: 100%;
  background-color: ${colors.GRAY_800};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${props => {
    switch (props.toastPosition) {
      case 'bottom':
        return `margin-bottom: ${40 + props.insets.bottom}px`;
      default:
        return `margin-top: ${5 + props.insets.top}px`;
    }
  }}
`;
