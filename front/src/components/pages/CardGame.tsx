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
import photo from '../../assets/aventuriers-du-rail-europe-15-ans 1.png';

const CardGame = () => {
  return (
    <Card minW="xs" bg="#F7F6FF">
      <CardBody display="flex" justifyContent="center">
        <Image w="13rem" h="13rem" src={photo} />
      </CardBody>
      <Divider />
      <CardFooter h="9rem" justifyContent="space-between">
        <Box>
          <Highlight
            query="Disponible"
            styles={{
              px: '1',
              py: '1',
              bg: 'green',
              color: '#138A2D',
              rounded: 'full',
            }}
          >
            Disponible
          </Highlight>
          <Heading size="md" mt="2">
            Game 1
          </Heading>
          <Text fontSize="sm">Jeu de plateau</Text>

          <Box display="flex" mt="0.5" gap="2">
            <Image src={alarm} />
            <Text>25-30min</Text>

            <Image src={group} />
            <Text>2-7</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          mt="0.5"
          gap="10"
          justifyContent="space-between"
        >
          <Image src={shopping_cart} />
          <Text>35.5€</Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default CardGame;
