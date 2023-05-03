import * as React from 'react';
import { Modal as NBModal, Text, Button } from 'native-base';

type Props = {
  text: string;
  cancel: string;
  accept: string;
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
};

const Modal = ({ text, cancel, accept, isOpen, onClose, onAccept }: Props) => (
  <NBModal isOpen={isOpen} onClose={onClose}>
    <NBModal.Content maxWidth='400px'>
      <NBModal.CloseButton />
      <NBModal.Header>Delete User</NBModal.Header>
      <NBModal.Body>
        <Text>{text}</Text>{' '}
        <Button variant='ghost' colorScheme='blueGray' onPress={onClose}>
          {cancel}
        </Button>
        <Button colorScheme='error' onPress={onAccept}>
          {accept}
        </Button>
      </NBModal.Body>
    </NBModal.Content>
  </NBModal>
);

export default Modal;
