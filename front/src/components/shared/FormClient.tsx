import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addClient, getClientById, updateClient } from '../../CRUD/client';

const FormClient = ({ onClose, id }: { onClose: Function; id?: string }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const navigate = useNavigate();
  const [isErrorForm] = useState(false);

  const editClientFound = async () => {
    const res = await getClientById(id!);
    setFirstName(res.firstName || '');
    setLastName(res.lastName || '');
    setEmail(res.email || '');
    setAddress(res.address || '');
    setPhone(res.phone || '');
  };
  useEffect(() => {
    if (id) {
      editClientFound();
    }
  }, [id]);
  const createClient = async () => {
    let error = false;

    setIsErrorFirstName(false);

    if (firstName === '' || !firstName) {
      setIsErrorFirstName(true);
      error = true;
    }
    if (error) {
      return;
    } else {
      const dataToReturn = {
        firstName,
        lastName,
        email,
        address,
        phone,
      };
      id
        ? await updateClient(dataToReturn, id!).then((res) => {
            onClose();
            navigate(0);
          })
        : await addClient(dataToReturn).then((res) => {
            onClose();
            navigate(0);
          });
    }
  };

  return (
    <>
      <ModalBody pb={6}>
        <FormControl mt={4} isRequired isInvalid={isErrorFirstName}>
          <FormLabel>Prénom</FormLabel>
          <Input
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormErrorMessage>Le nom est requis</FormErrorMessage>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Nom de famille</FormLabel>
          <Input
            placeholder="Nom de famille"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Téléphone</FormLabel>
          <Input
            placeholder="Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Adresse</FormLabel>
          <Input
            placeholder="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={createClient}>
          Ajouter
        </Button>
        <Button onClick={() => onClose()}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default FormClient;
