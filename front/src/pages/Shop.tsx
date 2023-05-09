import NavbarShop from '../components/shared/NavbarShop';
// import { getGames } from '../CRUD/game';
import { useEffect , Dispatch} from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  // useEffect(() => {
  //   getGames()    
  // }, [])

  // useSelector((state : any) => console.log(state))

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch()
  // }, [])


  

  return (
    <NavbarShop/>
  );
};

export default Home;
