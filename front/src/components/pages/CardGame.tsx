import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Highlight,
} from '@chakra-ui/react';
import alarm from '../../assets/alarm.svg';
import group from '../../assets/diversity.svg';
import shopping_cart from '../../assets/add_shopping_cart.svg';
import { IGame, getGameType } from '../../utils/types';
interface CardGameProps {
  game: IGame;
}
const CardGame = ({ game }: CardGameProps) => {
  const defaultImg =
    'https://img.freepik.com/free-vector/flat-design-image-upload-landing-page_23-2148271993.jpg?w=2000&t=st=1684239622~exp=1684240222~hmac=e86cf5b8f8c75c381506dc478379306700bef3ecdfeaa1123ae30c62242a1360';

  let playerNumber = null;
  if (game.minPlayer && game.maxPlayer) {
    playerNumber = `${game.minPlayer.toString()}-${game.maxPlayer.toString()}`;
  } else if (game.minPlayer && !game.maxPlayer) {
    playerNumber = game.minPlayer.toString();
  } else if (!game.minPlayer && game.maxPlayer) {
    playerNumber = game.maxPlayer.toString();
  }
  return (
    <Card minW="xs" bg="#F7F6FF">
      <CardBody display="flex" justifyContent="center">
        <Image
          w="13rem"
          h="13rem"
          src={game.img ? game.img : defaultImg}
          objectFit="cover"
        />
      </CardBody>
      <Divider />
      <CardFooter h="9rem" justifyContent="space-between">
        <Box>
          {game.stock > 5 ? (
            <Highlight
              query="Disponible"
              styles={{
                fontSize: 'xs',
                px: '1.5',
                py: '1.5',
                bg: 'green',
                color: '#138A2D',
                rounded: 'full',
              }}
            >
              Disponible
            </Highlight>
          ) : game.stock > 0 ? (
            <Highlight
              query="Bientôt en rupture"
              styles={{
                fontSize: 'xs',
                px: '1.5',
                py: '1.5',
                bg: 'orange',
                color: 'orange.800',
                rounded: 'full',
              }}
            >
              Bientôt en rupture
            </Highlight>
          ) : (
            <Highlight
              query="Indisponible"
              styles={{
                fontSize: 'xs',
                px: '1.5',
                py: '1.5',
                bg: 'pink',
                color: 'red.600',
                rounded: 'full',
              }}
            >
              Indisponible
            </Highlight>
          )}
          <Heading size="md" mt="2">
            {game.name}
          </Heading>
          <Text fontSize="sm">{getGameType(game.type)}</Text>

          <Box display="flex" mt="0.5" gap="2">
            <Image src={alarm} />
            <Text>{game.duration}</Text>

            {playerNumber && (
              <>
                <Image src={group} />
                <Text>{playerNumber}</Text>
              </>
            )}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          mt="0.5"
          gap="10"
          justifyContent="space-between"
        >
          <Image
            src={shopping_cart}
            _hover={{
              cursor: 'pointer',
            }}
          />
          <Text>{game.price}€</Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CardGame;
