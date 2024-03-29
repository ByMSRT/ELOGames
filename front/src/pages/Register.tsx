import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import registerImg from '../assets/register.svg'
import { useState } from 'react';
import 'react-material-symbols/dist/rounded.css';
import Navbar from '../components/shared/Navbar';
import { register, login }  from '../CRUD/user';
import { useNavigate } from "react-router-dom";
import { MaterialSymbol } from 'react-material-symbols';



const Register = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const [lastName , setLastName] = useState('')
  const [firstName , setFirstName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const [errorEmail , setErrorEmail] = useState(false)
  const [errorPassword , setErrorPassword] = useState(false)
  const [errorLastName , setErrorLastName] = useState(false)
  const [errorFirstName , setErrorFirstName] = useState(false)
  const [error , setError] = useState('')


  const navigate = useNavigate();

  const registerUser = async () => {
    if (lastName === '' && firstName === '' && email === '' && password === ''){
      setErrorLastName(true)
      setErrorFirstName(true)
      setErrorEmail(true)
      setErrorPassword(true)
    } else {
      if (lastName === '') {
        setErrorLastName(true)
      }else if (firstName === '') {
        setErrorFirstName(true)
      }else if (email === '') {
        setErrorEmail(true)
      }else if (password === '') {
        setErrorPassword(true)
      }
      else {
        await register(email, password, firstName, lastName).then(() => {
          login(email, password).then(() => {
            navigate('/shop')
          })
        }).catch((err) => {
          setError(err.response.data.message)
        })
      }
    }
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

            

            <FormControl variant="floating" mt='1rem' isRequired isInvalid={errorFirstName}>
              <FormLabel>Prénom</FormLabel>
              <Input 
                  placeholder='Votre Prénom' 
                  background='white'
                  mb='0.5rem'
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              <FormErrorMessage mt='0rem'>Le champ prénom est requis</FormErrorMessage>

            </FormControl>

            <FormControl variant="floating"  isRequired isInvalid={errorLastName}>
              <FormLabel>Nom</FormLabel>
              <Input 
                  placeholder='Votre Nom' 
                  background='white'
                  mb='0.5rem'
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              <FormErrorMessage mt='0rem'>Le champ nom est requis</FormErrorMessage>

            </FormControl>

            <FormControl variant="floating"  isRequired  isInvalid={errorEmail}>
              <FormLabel>Email</FormLabel>
              <Input 
                  placeholder='Votre Email' 
                  background='white'
                  mb='0.5rem'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              <FormErrorMessage mt='0rem'>Le champ email est requis</FormErrorMessage>

            </FormControl>

            <FormControl variant="floating"  isRequired  isInvalid={errorPassword}>
              <FormLabel>Mot de passe</FormLabel>
              <InputGroup size="md">
                <Input 
                    placeholder='Votre Mot de Passe' 
                    type={show ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    background='white'
                    mb='0.5rem'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button background='white' h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? <MaterialSymbol icon="visibility" ></MaterialSymbol> : <MaterialSymbol icon="visibility_off" ></MaterialSymbol>}
                    </Button>
                  </InputRightElement>
              </InputGroup>
              <FormErrorMessage mt='0rem'>Le champ mot de passe est requis</FormErrorMessage>
            </FormControl>

          <Box
              mt='0rem'
              mb='2rem'
              display={error === '' ? 'none' : 'flex'}
              flexDirection='column'
              alignItems='center'
            >
              <Text color='red'>{error}</Text>
            </Box>
          
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
                onClick={() => registerUser()}
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
          <Image src={registerImg}/>
        </Box>  
      </Box>
    </Box>
    </Box>
  );
};

export default Register;
