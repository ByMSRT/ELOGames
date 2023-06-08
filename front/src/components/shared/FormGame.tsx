import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image as ImageComp,
  Input,
  ModalBody,
  ModalFooter,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addGame } from '../../CRUD/game';
import { useNavigate, useNavigation } from 'react-router-dom';

const FormGame = ({ onClose }: { onClose: Function }) => {
  const [name, setName] = useState('');
  const [isErrorName, setIsErrorName] = useState(false);
  const [price, setPrice] = useState('0.00');
  const [isErrorPrice, setIsErrorPrice] = useState(false);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [stock, setStock] = useState(0);
  const [maxPlayers, setMaxPlayers] = useState<number | undefined>();
  const [minPlayers, setMinPlayers] = useState<number | undefined>();
  const [isErrorPlayers, setIsErrorPlayers] = useState(false);
  const [duration, setDuration] = useState<string | undefined>();
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [isErrorType, setIsErrorType] = useState(false);
  const [isErrorForm] = useState(false);
  const [isErrorImage, setIsErrorImage] = useState(false);

  const checkImage = async (url: string) => {
    const newImage = new Image();
    newImage.src = url;

    newImage.onload = () => {
      setIsErrorImage(false);
      return true;
    };

    newImage.onerror = () => {
      setIsErrorImage(true);
    };
  };

  const createGame = async () => {
    let error = false;

    setIsErrorName(false);
    setIsErrorPrice(false);
    setIsErrorType(false);
    setIsErrorPlayers(false);

    if (name === '' || !name) {
      setIsErrorName(true);
      error = true;
    }
    if (price === '' || !price || parseFloat(price) < 0 || price == '0.00') {
      error = true;
      setIsErrorPrice(true);
    }
    if (type === '' || !type) {
      error = true;
      setIsErrorType(true);
    }

    if (maxPlayers && minPlayers && maxPlayers < minPlayers) {
      error = true;
      setIsErrorPlayers(true);
    }

    if (error || isErrorImage) {
      return;
    } else {
      await addGame({
        name,
        price: parseFloat(price),
        description,
        image,
        stock,
        type,
        maxPlayers,
        minPlayers,
        duration,
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
        <FormControl mt={4} isRequired isInvalid={isErrorName}>
          <FormLabel>Nom</FormLabel>
          <Input
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>Le nom est requis</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={isErrorPrice}>
          <FormLabel>Prix</FormLabel>
          <NumberInput
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e)}
            min={0}
            step={0.5}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>Le prix est requis</FormErrorMessage>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Durée du jeu</FormLabel>
          <Textarea
            placeholder="Durée"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4} isInvalid={isErrorImage}>
          <FormLabel>Image (url)</FormLabel>
          <Input
            placeholder="Image (url)"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              checkImage(e.target.value);
            }}
          />
          <FormErrorMessage>L'url n'est pas une image.</FormErrorMessage>
        </FormControl>
        {!isErrorImage && <ImageComp src={image} w={'14'}></ImageComp>}
        <FormControl mt={4} isRequired>
          <FormLabel>Stock</FormLabel>
          <NumberInput
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(parseInt(e))}
            min={0}
            step={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl mt={4} isRequired isInvalid={isErrorType}>
          <FormLabel>Type</FormLabel>
          <Select
            placeholder="Choisissez un type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="BoardGame"> BoardGame</option>
            <option value="CardGame"> CardGame</option>
            <option value="MiniatureGame"> MiniatureGame</option>
            <option value="RolePlayingGame"> RolePlayingGame</option>
            <option value="CoopGame"> CoopGame</option>
            <option value="StrategyGame"> StrategyGame</option>
            <option value="QuizGame"> QuizGame</option>
            <option value="PartyGame"> PartyGame</option>
          </Select>
          <FormErrorMessage>Le type est requis</FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={isErrorPlayers}>
          <FormLabel>Min Joueurs</FormLabel>
          <NumberInput
            placeholder="0"
            value={minPlayers}
            onChange={(e) => setMinPlayers(parseInt(e))}
            min={0}
            step={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl mt={4} isInvalid={isErrorPlayers}>
          <FormLabel>Max Joueurs</FormLabel>
          <NumberInput
            placeholder="0"
            value={maxPlayers}
            onChange={(e) => setMaxPlayers(parseInt(e))}
            min={0}
            step={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormErrorMessage>
            Le nombre max de joueurs doit être supérieur au nombre min de
            joueurs.
          </FormErrorMessage>
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={createGame}>
          Ajouter
        </Button>
        <Button onClick={() => onClose()}>Cancel</Button>
      </ModalFooter>
    </>
  );
};

export default FormGame;
