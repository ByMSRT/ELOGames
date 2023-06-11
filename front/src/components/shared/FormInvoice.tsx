import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ModalBody,
  ModalFooter,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getClientById, getClients } from '../../CRUD/client';
import { getGames } from '../../CRUD/game';
import { IClient, IGame } from '../../utils/types';
import { MaterialSymbol } from 'react-material-symbols';
import { addInvoice, editInvoice, getInvoiceById } from '../../CRUD/invoice';
import { useNavigate } from 'react-router-dom';

const FormInvoice = ({ onClose, id }: { onClose: Function; id?: string }) => {
  const navigate = useNavigate();
  const [paid, setPaid] = useState(false);
  const [billingAddress, setBillingAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [clientsFound, setClientsFound] = useState<IClient[]>([]);
  const [clientId, setClientId] = useState('');
  const [selectedGames, setSelectedGames] = useState<
    { game: IGame; quantity: number }[]
  >([]);

  const [tempQuantitySelected, setTempQuantitySelected] = useState<number>(1);

  const [showNewGame, setShowNewGame] = useState(false);

  const [gamesFound, setGamesFound] = useState<IGame[]>([]);

  const [tempGameSelected, setTempGameSelected] = useState<IGame>();

  const editInvoiceFound = async () => {
    const res = await getInvoiceById(id!);
    setClientId(res.client.id || '');
    setPaid(res.isPaid || false);
    setBillingAddress(res.billingAddress || '');
    setShippingAddress(res.shippingAddress || '');
    setSelectedGames(
      res.invoicesGames.map((game: any) => {
        return { game: game.game, quantity: game.quantity };
      }) || []
    );
  };
  useEffect(() => {
    if (id) {
      editInvoiceFound();
    }
  }, [id]);

  const findClients = async () => {
    const res = await getClients();
    setClientsFound(res);
  };
  const findGames = async () => {
    const res = await getGames();
    setGamesFound(res);
    setTempGameSelected(res[0]);
  };
  useEffect(() => {
    findClients();
    findGames();
  }, []);
  const createInvoice = async () => {
    const games = selectedGames.map((game) => {
      return { id: game.game.id, quantity: game.quantity };
    });
    if (id) {
      const dataToReturn = {
        paid,
        billingAddress,
        shippingAddress,
        client: clientId,
      };
      await editInvoice(dataToReturn, id).then((res) => {
        console.log(res);
        onClose();
        navigate(0);
      });
    } else {
      const dataToReturn = {
        paid,
        billingAddress,
        shippingAddress,
        games,
        client: clientId,
      };
      await addInvoice(dataToReturn).then((res) => {
        console.log(res);
        onClose();
        navigate(0);
      });
    }
  };

  return (
    <>
      <ModalBody pb={6}>
        <FormControl mt={4}>
          <FormLabel>Client</FormLabel>
          <Select
            value={clientId}
            onChange={(e) => {
              setClientId(e.target.value);
            }}
          >
            {clientsFound.length > 0 &&
              clientsFound.map((client, index) => {
                return (
                  <option value={client.id} key={index}>
                    {client.firstName} {client.lastName} ({client.email})
                  </option>
                );
              })}
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Jeux</FormLabel>
          <Box>
            {selectedGames.length > 0 &&
              selectedGames.map((game, index) => {
                return (
                  <Flex alignItems={'center'} marginY={2} key={index}>
                    <Box>
                      - {game.game.name + ' | '} {game.game.price}€ X{' '}
                      {game.quantity} ={' '}
                      {(game.game.price * game.quantity).toFixed(2)}€
                    </Box>
                    {!id && (
                      <Button
                        marginLeft={2}
                        size={'xs'}
                        colorScheme="red"
                        onClick={() => {
                          setSelectedGames(
                            selectedGames.filter((g) => {
                              return g !== game;
                            })
                          );
                        }}
                      >
                        <MaterialSymbol icon="close" />
                      </Button>
                    )}
                  </Flex>
                );
              })}
          </Box>
          {!id && (
            <Button onClick={() => setShowNewGame(true)}>Ajouter un jeu</Button>
          )}
          {showNewGame && (
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <Select
                onChange={(e) =>
                  setTempGameSelected(
                    gamesFound.find((game) => game.id === e.target.value)
                  )
                }
              >
                {gamesFound.length > 0 &&
                  gamesFound.map((game, index) => {
                    return (
                      <option value={game.id} key={index}>
                        {game.name} ({game.price})
                      </option>
                    );
                  })}
              </Select>
              <Spacer />
              <NumberInput
                min={1}
                step={1}
                placeholder="Quantité"
                value={tempQuantitySelected.toString()}
                onChange={(e) => setTempQuantitySelected(parseInt(e))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Spacer />

              <Text width={'100%'}>
                Total :{' '}
                {(tempGameSelected!.price * tempQuantitySelected).toFixed(2)}€
              </Text>
              <Spacer />
              {!id && (
                <Button
                  onClick={() => {
                    setShowNewGame(false);
                    setSelectedGames([
                      ...selectedGames,
                      {
                        game: tempGameSelected!,
                        quantity: tempQuantitySelected!,
                      },
                    ]);
                    setTempGameSelected(gamesFound[0]);
                    setTempQuantitySelected(1);
                  }}
                >
                  <MaterialSymbol icon="add" />
                </Button>
              )}
            </Flex>
          )}
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
        </FormControl>
        <FormControl>
          <FormLabel>
            Prix total de la facture (calculé automatiquement)
          </FormLabel>
          <Text>
            {Math.round(
              Object.keys(selectedGames).reduce(function (previous, key: any) {
                return (
                  previous +
                  selectedGames[key].quantity * selectedGames[key].game.price
                );
              }, 0) * 100
            ) / 100}{' '}
            €
          </Text>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Payé</FormLabel>
          <Checkbox
            type="boolean"
            placeholder="Payé"
            isChecked={paid}
            onChange={(e) => setPaid(e.target.checked)}
          />
        </FormControl>
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
