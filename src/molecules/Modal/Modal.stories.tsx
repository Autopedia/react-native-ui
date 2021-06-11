import { storiesOf } from '@storybook/react-native';
import React, { useEffect, useRef } from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Modal from '.';
import { Text } from 'react-native';
import { ModalRef } from './Modal.types';

const ModalWrapper: React.FC = () => {
  const innerRef = useRef<ModalRef>(null);

  useEffect(() => {
    innerRef?.current?.open();
  }, []);

  return (
    <Modal innerRef={innerRef}>
      <Text>This is a Modal</Text>
    </Modal>
  );
};

storiesOf('Molecules/Modal', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Default', () => {
    return <ModalWrapper />;
  });
