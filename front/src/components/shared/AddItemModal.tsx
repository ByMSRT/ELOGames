import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import FormClient from './FormClient';
import FormInvoice from './FormInvoice';
import FormGame from './FormGame';
import { useState } from 'react';

interface AddItemModalInterface {
  onClose: Function;
  type: 'clients' | 'bills' | 'games';
}

const AddItemModal = ({ onClose, type }: AddItemModalInterface) => {
  const [isClicked, setIsClicked] = useState(false);
  const title =
    type === 'clients' ? 'Client' : type === 'bills' ? 'Facture' : 'Jeu';
  console.log(type);
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ajouter un {title}</ModalHeader>
        <ModalCloseButton />
        {type === 'clients' ? (
          <FormClient onClose={onClose}></FormClient>
        ) : type === 'bills' ? (
          <FormInvoice onClose={onClose}></FormInvoice>
        ) : (
          <FormGame onClose={onClose}></FormGame>
        )}
      </ModalContent>
    </>
  );
};

export default AddItemModal;
