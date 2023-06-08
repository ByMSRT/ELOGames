import { Badge, Button, Image, Td } from '@chakra-ui/react';
import { TabBuilderType } from '../../utils/types';

interface CustomTdInterface {
  type: TabBuilderType['type'];
  value: any;
}

const CustomTd = ({ type, value }: CustomTdInterface) => {
  switch (type) {
    case 'text':
      return <Td>{value}</Td>;
    case 'number':
      return <Td>{value}</Td>;
    case 'price':
      return <Td>{value}€</Td>;
    case 'date':
      return <Td>{value}</Td>;
    case 'image':
      return (
        <Td>
          <Image src={value} w={20}></Image>
        </Td>
      );
    case 'phone':
      return <Td>{value}</Td>;
    case 'badge':
      return (
        <Td>
          <Badge colorScheme={value.badgeColor}>{value.text}</Badge>
        </Td>
      );
    default:
      return <Td>{value}</Td>;
  }
};

export default CustomTd;
