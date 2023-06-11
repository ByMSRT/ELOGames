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
  type: 'clients' | 'invoices' | 'games';
  id?: string;
}

const AddItemModal = ({ onClose, type, id }: AddItemModalInterface) => {
  const title =
    type === 'clients' ? 'Client' : type === 'invoices' ? 'Facture' : 'Jeu';
  console.log(type);
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ajouter un {title}</ModalHeader>
        <ModalCloseButton />
        {type === 'clients' ? (
          <FormClient onClose={onClose} id={id}></FormClient>
        ) : type === 'invoices' ? (
          <FormInvoice onClose={onClose} id={id}></FormInvoice>
        ) : (
          <FormGame onClose={onClose} id={id}></FormGame>
        )}
      </ModalContent>
    </>
  );
};

export default AddItemModal;
