import React, { useImperativeHandle } from 'react';
import { Dimensions, Modal as RNModal } from 'react-native';
import Divider from '../../atoms/Divider';
import styled, { css } from 'styled-components/native';
import Typography from '../../atoms/Typography';
import colors from '../../styles/colors';
import { AlertHandle } from './Alert.types';

export interface AlertProps {
  contents: string | React.ReactNode;
  title?: string | React.ReactNode;
  okText?: string;
  onPressOk?: () => void;
  okTextStrong?: boolean;
  okTextColor?: string;
  cancelText?: string;
  onPressCancel?: () => void;
  cancelTextStrong?: boolean;
  cancelTextColor?: string;
}

const Alert = React.forwardRef<AlertHandle, AlertProps>((props, ref) => {
  const [visible, setVisible] = React.useState(false);
  const vertical = props.okText?.length >= 5 || props.cancelText?.length >= 5;
  useImperativeHandle(
    ref,
    () => ({
      open() {
        setVisible(true);
      },
    }),
    [],
  );

  const handleClose = () => {
    setVisible(false);
  };

  const handleOk = () => {
    if (props.onPressOk) props.onPressOk();
    handleClose();
  };

  const handleCancel = () => {
    if (props.onPressCancel) props.onPressCancel();
    handleClose();
  };

  return (
    <RNModal transparent visible={visible} onRequestClose={handleClose}>
      <SAlertBackground>
        <SAlertContainer>
          <SAlertContents>
            {props.title && (
              <SAlertTitleView>
                {typeof props.title === 'string' ? (
                  <SAlertTitleText size={5}>{props.title}</SAlertTitleText>
                ) : (
                  props.title
                )}
              </SAlertTitleView>
            )}
            {typeof props.contents === 'string' ? (
              <SAlertContentsText size={1}>{props.contents}</SAlertContentsText>
            ) : (
              props.contents
            )}
          </SAlertContents>
          <Divider margin={0} />
          <SAlertFooter vertical={vertical}>
            {props.cancelText !== undefined && (
              <>
                <SConfirmButton onPress={handleCancel} vertical={vertical}>
                  <SConfirmButtonText
                    size={1}
                    color={props.cancelTextColor}
                    strong={props.cancelTextStrong}
                  >
                    {props.cancelText || '닫기'}
                  </SConfirmButtonText>
                </SConfirmButton>
                {vertical ? <Divider margin={0} /> : <VerticalDivider />}
              </>
            )}
            <SConfirmButton onPress={handleOk} vertical={vertical}>
              <SConfirmButtonText
                size={1}
                color={props.okTextColor}
                strong={props.okTextStrong}
              >
                {props.okText || '확인'}
              </SConfirmButtonText>
            </SConfirmButton>
          </SAlertFooter>
        </SAlertContainer>
      </SAlertBackground>
    </RNModal>
  );
});

interface VerticalProps {
  vertical: boolean;
}

interface ConfirmButtonTextProps {
  color?: string;
  strong?: boolean;
}

const SAlertBackground = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
const SAlertContainer = styled.View`
  width: ${Dimensions.get('window').width - 60}px;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.CARD};
`;

const SAlertContents = styled.View`
  padding: 32px 16px;
  justify-content: center;
  align-items: center;
`;

const SAlertContentsText = styled(Typography.Paragraph)`
  text-align: center;
`;

const SAlertTitleView = styled.View`
  align-items: center;
`;

const SAlertTitleText = styled(Typography.Heading)``;

const SAlertFooter = styled.View<VerticalProps>`
  width: 100%;
  flex-direction: ${({ vertical }) => (vertical ? 'column-reverse' : 'row')};
`;

const VerticalDivider = styled.View`
  border-right-width: 1px;
  border-right-color: ${colors.EXTRALIGHT};
`;

const SConfirmButton = styled.TouchableOpacity<VerticalProps>`
  padding: 15px 0px;
  justify-content: center;
  align-items: center;
  ${({ vertical }) =>
    !vertical &&
    css`
      flex: 1;
    `}
`;

const SConfirmButtonText = styled(Typography.Paragraph)<ConfirmButtonTextProps>`
  color: ${({ color }) => (color ? color : '#000')};
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
`;

export default Alert;
