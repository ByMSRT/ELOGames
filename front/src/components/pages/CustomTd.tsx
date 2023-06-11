import {
  Badge,
  Button,
  Image,
  Modal,
  Td,
  useDisclosure,
} from '@chakra-ui/react';
import { TabBuilderType } from '../../utils/types';
import AddItemModal from '../shared/AddItemModal';

interface CustomTdInterface {
  type: TabBuilderType['type'];
  value: any;
}

const CustomTd = ({ type, value }: CustomTdInterface) => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
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
    case 'edit':
      return (
        <Td>
          <Button onClick={onOpenEdit}>Éditer</Button>
          <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
            <AddItemModal
              key={value.id}
              onClose={onCloseEdit}
              type={value.type}
              id={value.id}
            ></AddItemModal>
          </Modal>
        </Td>
      );
    default:
      return <Td>{value}</Td>;
  }
};

export default CustomTd;
