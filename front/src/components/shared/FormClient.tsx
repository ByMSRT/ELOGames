import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addClient } from '../../CRUD/client';

const FormClient = ({ onClose }: { onClose: Function }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [isErrorFirstName, setIsErrorFirstName] = useState(false);
  const navigate = useNavigate();
  const [isErrorForm] = useState(false);

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
      await addClient({
        firstName,
        lastName,
        email,
        address,
        phone,
      }).then((res) => {
        console.log(res);
        onClose();
        navigate(0);
        // window.location.reload();
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
