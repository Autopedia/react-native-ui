/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React, { useRef } from 'react';
import Modal from './Modal';
import { shallow } from 'enzyme';
import { ModalHandler } from './Modal.types';
import { Text } from 'react-native';

const TestComponent: React.FC = () => {
  return <Text>Test</Text>;
};

const ModalWrapper: React.FC = () => {
  const modalRef = useRef<ModalHandler>(null);

  return (
    <Modal ref={modalRef}>
      <TestComponent />
    </Modal>
  );
};

describe('[Modal] Unit Test', () => {
  it('should render children', () => {
    const wrapper = shallow(<ModalWrapper />);
    const modal = wrapper.find('ForwardRef').dive();
    const testComp = modal.find('TestComponent');

    expect(testComp).toBeDefined();
  });
});
