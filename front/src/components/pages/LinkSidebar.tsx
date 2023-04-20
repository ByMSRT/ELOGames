import { Box, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { MaterialSymbol } from 'react-material-symbols';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

interface LinkSidebarProps {
  iconName:
    | 'dashboard'
    | 'receipt_long'
    | 'folder_supervised'
    | 'extension'
    | 'logout';
  text: 'Dashboard' | 'Factures' | 'Clients' | 'Jeux' | 'Déconnexion';
  link: '' | 'bills' | 'clients' | 'games' | 'logout';
}

const LinkSidebar = ({ iconName, text, link }: LinkSidebarProps) => {
  const navigate = useNavigate();
  const router = useLocation();

  const toggleClick = () => {
    navigate(`/admin/${link}`);
  };
  const isCurrentRoute = router.pathname === `/admin/${link}`;
  return (
    <Box
      color={isCurrentRoute ? 'yellow' : 'white'}
      onClick={toggleClick}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      autoFocus={true}
    >
      <MaterialSymbol
        icon={iconName}
        weight={isCurrentRoute ? 500 : 300}
        size={26}
      />
      <Text fontSize={18} fontWeight={isCurrentRoute ? 'extrabold' : 'normal'}>
        {text}
      </Text>
    </Box>
  );
};

export default LinkSidebar;
