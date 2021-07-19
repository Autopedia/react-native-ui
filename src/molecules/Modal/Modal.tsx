import React, { useImperativeHandle } from 'react';
import { Dimensions, Modal as RNModal } from 'react-native';
import styled from 'styled-components/native';

import Typography from '../../atoms/Typography';
import { Spacing } from '../../styles';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import { ModalHandle } from './Modal.types';

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
  width: ${Dimensions.get('window').width - 60}px;
  align-items: center;

  ${props => `
    padding: 20px;
    border-radius: 8px;
    background-color: ${colors.CARD};
  `};
`;
const SExit = styled(Typography.Paragraph)`
  ${props => `
    margin-top: 20px;
  `}
`;

export default Modal;
