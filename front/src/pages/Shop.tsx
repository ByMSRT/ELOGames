import NavbarShop from '../components/shared/NavbarShop';
import { getGames } from '../CRUD/game';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    getGames()    
  }, [])

  

  return (
    <NavbarShop/>
  );
};

export default Home;
