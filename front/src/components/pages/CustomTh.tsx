import { Th } from '@chakra-ui/react';
import { useState } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

interface CustomThProps {
  columnName: string;
  columnDb: string;
  onClickFunction: Function;
}
const CustomTh = ({ columnName, columnDb, onClickFunction }: CustomThProps) => {
  const [sortDirection, setSortDirection] = useState('asc');
  return (
    <Th
      onClick={() => {
        const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(newSortDirection);
        console.log(columnDb, newSortDirection);
        onClickFunction(columnDb, newSortDirection);
      }}
    >
      {columnName}
      <MaterialSymbol
        icon={sortDirection === 'asc' ? 'expand_less' : 'expand_more'}
      ></MaterialSymbol>
    </Th>
  );
};

export default CustomTh;
