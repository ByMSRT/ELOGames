import { Box, Button, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import authent from '../assets/authent.svg'
import googleImage from '../assets/google.svg'
import { useState } from 'react';
import {MaterialSymbol} from 'react-material-symbols'
import 'react-material-symbols/dist/rounded.css';
import Navbar from '../components/shared/Navbar';
import { login } from '../CRUD/user';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const loginUser= async () => {
    login(email, password)
    navigate('/home')
  }

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
      bgGradient='linear(to-t, black 0%, black 50%, purple 50%, purple 100%)' 
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center' 
    >
      <Box
        bg='yellow'
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
              Se connecter
            </Heading>

            <Text>Vous n’avez pas de compte ? <Link color='purple' href='/register'>Créez en un !</Link> </Text>

            <FormControl variant="floating" id="first-name" mt='1rem' isRequired >
              <FormLabel>Email</FormLabel>
              <Input 
                  placeholder='Votre Email' 
                  background='white'
                  mb='2rem'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
            </FormControl>

            <FormControl variant="floating" id="first-name" isRequired >
              <FormLabel>Mot de passe</FormLabel>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Votre Mot de passe'
                  background='white'
                  mb='2rem'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <InputRightElement width='4.5rem'>
                  <Button background='white' h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? <MaterialSymbol icon="visibility" ></MaterialSymbol> : <MaterialSymbol icon="visibility_off" ></MaterialSymbol>}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Button 
                fontWeight="light" 
                w='15rem' 
                h='2.5rem' 
                mb='1rem'  
                background='white'
                onClick={loginUser}
              >
                Se connecter
              </Button>

              <Divider 
                background='black'
                h="1px"  
              ></Divider>
              <Text 
                mb="1rem"
                mt="1rem"
              >
                OU
              </Text>
              
              <Button 
                background='white' 
                fontWeight="light" 
                w='15rem' 
                h='2.5rem'
              >
                <Image src={googleImage} mr='1rem' />
                Se connecter avec Google
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
          <Image src={authent}/>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Login;
