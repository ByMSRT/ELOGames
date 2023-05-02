import { Box, Button, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import authent from '../assets/authent.svg'
import register from '../assets/register.svg'
import { useState } from 'react';
import {MaterialSymbol} from 'react-material-symbols'
import 'react-material-symbols/dist/rounded.css';
import Navbar from '../components/shared/Navbar';


const Register = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box
      w='100%'
      h='100%'
      display='flex'
      flexDirection='column'
    >
      <Navbar/>
    <Box 
      w='100%' 
      h='100%'
      bgGradient='linear(to-t, black 0%, black 50%, yellow 50%, yellow 100%)' 
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center' 
    >
      <Box
        bg='purple'
        borderRadius='30px'
        w='60rem'
        h='35rem'
        display='flex'
        justifyContent='end'
      >
        <Box
          w='30rem'
          h='100%' 
          display='flex' 
          flexDirection='column' 
          alignItems='center' 
          justifyContent='center'
        >
          <Box
            w='22rem'
          >
            <Heading 
              fontStyle='heading'
              mb='1rem'
            >
              S'inscrire
            </Heading>

            <Text>Vous avez déjà un compte ? <Link color='yellow' href='/login'>Connectez-vous !</Link> </Text>

            <FormControl variant="floating" id="first-name" mt='1rem' isRequired >
              <FormLabel>Nom</FormLabel>
              <Input 
                  placeholder='Votre Nom' 
                  background='white'
                  mb='0.5rem'
                />
            </FormControl>
            <FormControl variant="floating" id="first-name"  isRequired >
              <FormLabel>Prénom</FormLabel>
              <Input 
                  placeholder='Votre Prénom' 
                  background='white'
                  mb='0.5rem'
                />
            </FormControl>
            <FormControl variant="floating" id="first-name"  isRequired >
              <FormLabel>Email</FormLabel>
              <Input 
                  placeholder='Votre Email' 
                  background='white'
                  mb='0.5rem'
                />
            </FormControl>
            <FormControl variant="floating" id="first-name"  isRequired >
              <FormLabel>Mot de passe</FormLabel>
              <Input 
                  placeholder='Votre Mot de Passe' 
                  background='white'
                  mb='0.5rem'
                />
            </FormControl>
          
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column' 
            mt='1rem'
          >
            <Button 
                fontWeight="light" 
                w='15rem' 
                h='2.5rem' 
                mb='1rem'  
                background='white'
                borderRadius='9'
              >
                S'inscrire
              </Button>
          </Box>
          </Box>
        </Box>
        <Box
          bg='whitePurple'
          borderRadius='30px'
          w='30rem'
          h='100%' 
          display='flex' 
          flexDirection='column' 
          alignItems='center' 
          justifyContent='center'
        >
          <Image src={register}/>
        </Box>  
      </Box>
    </Box>
    </Box>
  );
};

export default Register;
