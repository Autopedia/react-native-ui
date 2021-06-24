import Typography from '@atoms/Typography';
import { ModalHandle } from './Modal.types';
import { Spacing } from '@styles';
import React, { useImperativeHandle } from 'react';
import { Dimensions, Modal as RNModal } from 'react-native';
import styled from 'styled-components/native';

interface ModalProps {
  children?: React.ReactNode;
}

const Modal = React.forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
  const [visible, setVisible] = React.useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open() {
        setVisible(true);
      },
      close() {
        setVisible(false);
      },
    }),
    [],
  );

  return (
    <RNModal
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <SModalBackground>
        <SModalContainer>{children}</SModalContainer>
        <SExit
          size={1}
          color="white"
          fontWeight="bold"
          onPress={() => setVisible(false)}
        >
          닫기
        </SExit>
      </SModalBackground>
    </RNModal>
  );
});

const SModalBackground = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
const SModalContainer = styled.View`
  width: ${Dimensions.get('window').width - Spacing.SPACE_60}px;
  align-items: center;

  ${props => `
    padding: ${props.theme.spacing.SPACE_20};
    border-radius: ${props.theme.spacing.SPACE_8};
    background-color: ${props.theme.colors.CARD};
  `};
`;
const SExit = styled(Typography.Paragraph)`
  ${props => `
    margin-top: ${props.theme.spacing.SPACE_20};
  `}
`;

export default Modal;
