import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const FormInvoice = ({ onClose }: { onClose: Function }) => {
  const [paid, setPaid] = useState('');
  const [price, setPrice] = useState('');
  const [client, setClient] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

  const createInvoice = async () => {};

  return (
    <>
      <ModalBody pb={6}>
        {/* <FormControl>
          <FormLabel>Prix</FormLabel>
          <Input
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Payé</FormLabel>
          <Checkbox
            type="boolean"
            placeholder="Payé"
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Client</FormLabel>
          <Input
            placeholder="Client"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Adresse de facturation</FormLabel>
          <Input
            placeholder="Adresse de facturation"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Adresse de livraison</FormLabel>
          <Input
            placeholder="Adresse de livraison"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
          />
        </FormControl> */}
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={createInvoice}>
          Save
        </Button>
        <Button onClick={() => onClose()}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default FormInvoice;
