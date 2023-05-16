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
  InputGroup,
  InputRightElement,
  Select,
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
import Pagination from '../shared/Pagination';
import CustomTh from './CustomTh';

const AdaptativeTab = ({ type }: { type: 'clients' | 'bills' | 'games' }) => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

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
    setCurrentPage(1);
    let tempData = data.filter((obj) => {
      return Object.keys(obj).some((key) => {
        const value = obj[key].toString().toLowerCase();
        return value.includes(search.toLowerCase());
      });
    });
    setFilteredData(tempData);
  };

  const removeSearching = () => {
    setCurrentPage(1);
    setSearch('');
    setFilteredData(data);
  };

  const sortColumn = (column: string, order: 'asc' | 'desc') => {
    setCurrentPage(1);
    let tempData = [...filteredData];
    tempData.sort((a, b) => {
      if (a[column] < b[column]) {
        return order === 'asc' ? 1 : -1;
      }
      if (a[column] > b[column]) {
        return order === 'asc' ? -1 : 1;
      }
      return 0;
    });

    setFilteredData(tempData);
  };

  return (
    <Box
      height="100%"
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      p={5}
    >
      <Box display="flex" width="xl">
        <InputGroup>
          <Input value={search} onChange={(e) => setSearch(e.target.value)} />
          <InputRightElement
            children={
              <Button variant="ghost" onClick={removeSearching}>
                <MaterialSymbol icon="close" />
              </Button>
            }
          />
        </InputGroup>

        <Button onClick={searching}>
          <MaterialSymbol icon="search"></MaterialSymbol>
        </Button>
        <Select
          width={'xs'}
          value={postsPerPage}
          onChange={(e) => {
            setPostsPerPage(parseInt(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option defaultValue={5} value={5}>
            5
          </option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Select>
      </Box>
      <Box overflowX="scroll" height="100%">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {columns! &&
                  columns!.map((column, index) => {
                    return (
                      <CustomTh
                        key={index}
                        columnDb={column.dbColumn}
                        columnName={column.name}
                        onClickFunction={(e: string, order: 'asc' | 'desc') => {
                          sortColumn(e, order);
                        }}
                      />
                    );
                  })}
                <Th>Éditer</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems &&
                currentItems.map((item, index) => {
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
      </Box>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={postsPerPage}
        onChangePage={(page: number) => {
          setCurrentPage(page);
        }}
        totalItems={filteredData.length}
      ></Pagination>
    </Box>
  );
};

export default AdaptativeTab;
