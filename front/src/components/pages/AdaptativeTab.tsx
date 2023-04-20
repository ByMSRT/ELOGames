import {
  Thead,
  Tbody,
  Table,
  Tr,
  Th,
  TableContainer,
  Input,
  Button,
  Box,
  Td,
} from '@chakra-ui/react';
import { TabBuilder } from '../../utils/types';
import CustomTd from './CustomTd';
import {
  billColumns,
  clientColumns,
  gameColumns,
} from '../../utils/tempColumns';
import { billsData, clientsData, gamesData } from '../../utils/tempData';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

const AdaptativeTab = ({ type }: { type: 'clients' | 'bills' | 'games' }) => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const [columns, setColumns] = useState<TabBuilder[]>([]);

  const typeUrl = location.pathname.split('/')[2];
  useEffect(() => {
    switch (typeUrl) {
      case 'clients':
        setColumns(clientColumns);
        setData(clientsData);
        setFilteredData(clientsData);
        break;
      case 'bills':
        setColumns(billColumns);
        setData(billsData);
        setFilteredData(billsData);
        break;
      case 'games':
        setColumns(gameColumns);
        setData(gamesData);
        setFilteredData(gamesData);
        break;
    }
  }, [typeUrl]);

  const searching = () => {
    let tempData = data.filter((obj) => {
      return Object.keys(obj).some((key) => {
        const value = obj[key].toString().toLowerCase();
        return value.includes(search.toLowerCase());
      });
    });
    setFilteredData(tempData);
  };

  return (
    <>
      <Box display="flex" width="xl">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={searching}>
          <MaterialSymbol icon="loupe"></MaterialSymbol>
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              {columns! &&
                columns!.map((column, index) => {
                  return <Th key={index}>{column.name}</Th>;
                })}
              <Th>Éditer</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData &&
              filteredData.map((item, index) => {
                return (
                  <Tr key={index}>
                    {columns &&
                      columns.map((column, index) => {
                        return (
                          <CustomTd
                            key={index}
                            type={column.type}
                            value={item[column.dbColumn]}
                          ></CustomTd>
                        );
                      })}
                    <Td>
                      <Button>Éditer</Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdaptativeTab;
