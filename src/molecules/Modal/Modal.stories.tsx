import { storiesOf } from '@storybook/react-native';
import React, { useEffect, useRef } from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Modal from '.';
import { Text } from 'react-native';
import { ModalHandler } from './Modal.types';
import Button from '@atoms/Button';

const ModalWrapper: React.FC = () => {
  const modal = useRef<ModalHandler>(null);

  useEffect(() => {
    modal.current?.open();
  }, []);

  return (
    <>
      <Button
        onPress={() => {
          modal.current?.open();
        }}
      >
        Open Modal
      </Button>
      <Modal ref={modal}>
        <Text>This is a Modal</Text>
      </Modal>
    </>
  );
};

storiesOf('Molecules/Modal', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Default', () => {
    return <ModalWrapper />;
  });
