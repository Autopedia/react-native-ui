import React from 'react';
import { Animated, GestureResponderEvent } from 'react-native';
import colors from '../../styles/colors';
import styled from 'styled-components/native';
import Typography from '../Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../Icon';

const { Paragraph } = Typography;

type ToastActions = {
  show: (msg: string, duration?: number) => void;
  hide: () => void;
};

type BasicToastProps = {
  message: string;
  onPress: (e: GestureResponderEvent) => void;
};

export const BasicToast: React.FC<BasicToastProps> = ({ message, onPress }) => {
  return (
    <SContainer>
      <SToastWrapper>
        <Paragraph size={2} color={colors.WHITE}>
          {message}
        </Paragraph>
        <Icon
          source={require('src/assets/icons/exit/exit.png')}
          touchable
          onPress={onPress}
        />
      </SToastWrapper>
    </SContainer>
  );
};

const initialActions: ToastActions = {
  show: (msg: string) =>
    console.error('TOAST: actions not provieded yet: ', msg),
  hide: () => console.error('TOAST: actions not provieded yet: force hide'),
};

const ToastContext = React.createContext<ToastActions>(initialActions);

export const useToast = () => {
  const toast = React.useContext(ToastContext);
  return toast;
};

export const ToastProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const actions: ToastActions = {
    show: (msg, duration) => {
      setMessage(msg);
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    },
  };
  return (
    <ToastContext.Provider value={actions}>
      {children}
      {visible && (
        <BasicToast message={message} onPress={() => actions.hide()} />
      )}
    </ToastContext.Provider>
  );
};

const SContainer = styled(SafeAreaView)`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SToastWrapper = styled.View`
  padding: 12px 10px 12px 16px;
  border-radius: 8px;
  margin-horizontal: 20px;
  background-color: ${colors.GRAY_800};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
