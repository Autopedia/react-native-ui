import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Toast from 'react-native-toast-message';
import colors from '../../styles/colors';
import styled from 'styled-components/native';
import Typography from '../Typography';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../Icon';

const { Paragraph } = Typography;

export const toastConfig = {
  basic: ({ props, hide }) => {
    return <BasicToast message={props.message} onPress={hide} />;
  },
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
          source={require('../../assets/icons/exit/exit.png')}
          touchable
          onPress={onPress}
        />
      </SToastWrapper>
    </SContainer>
  );
};

const SContainer = styled(SafeAreaView)`
  width: 100%;
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

export { Toast };
