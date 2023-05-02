import { Box, Center, Heading, Image, Input } from '@chakra-ui/react';
import authent from '../assets/authent.svg'


const Login = () => {
  return (
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
          <Heading fontStyle='heading'>Se connecter</Heading>
          <Input placeholder='Basic usage' />
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
  );
};

export default Login;
