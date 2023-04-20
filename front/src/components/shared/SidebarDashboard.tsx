import { Box, Container, Icon, Image, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/logo-square.svg';
import 'react-material-symbols/dist/rounded.css';
import LinkSidebar from '../pages/LinkSidebar';

const SidebarDashboard = () => {
  return (
    <Container display={'flex'} height={'100%'}>
      <Box
        bg={'black'}
        width="200px"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Image src={Logo} w={'100%'}></Image>
        <Box display={'flex'} flexDirection={'column'} gap={10}>
          <LinkSidebar
            iconName="dashboard"
            link=""
            text="Dashboard"
          ></LinkSidebar>
          <LinkSidebar
            iconName="receipt_long"
            link="bills"
            text="Factures"
          ></LinkSidebar>
          <LinkSidebar
            iconName="folder_supervised"
            link="clients"
            text="Clients"
          ></LinkSidebar>
          <LinkSidebar
            iconName="extension"
            link="games"
            text="Jeux"
          ></LinkSidebar>
        </Box>
        <Box mb={10}>
          <LinkSidebar iconName="logout" link="logout" text="Déconnexion" />
        </Box>
      </Box>
      <Box bg={'white'} flex={1}>
        <Outlet></Outlet>
      </Box>
    </Container>
  );
};

export default SidebarDashboard;
