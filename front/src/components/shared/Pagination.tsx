import { Box, Button, Text } from '@chakra-ui/react';
import { MaterialSymbol } from 'react-material-symbols';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChangePage: Function;
}

// Pagination from :
// https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react
const Pagination = ({
  totalItems,
  itemsPerPage = 10,
  currentPage = 1,
  onChangePage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goBack = () => {
    if (currentPage === 1) {
      return;
    }
    onChangePage(currentPage - 1);
  };

  const goForward = () => {
    if (currentPage === totalPages) {
      return;
    }
    onChangePage(currentPage + 1);
  };
  return (
    <Box display={'flex'} flexDirection={'row'}>
      <Button onClick={() => onChangePage(1)}>
        <MaterialSymbol icon="first_page"></MaterialSymbol>
      </Button>
      <Button onClick={goBack}>
        <MaterialSymbol icon="navigate_before"></MaterialSymbol>
      </Button>
      {pageNumbers &&
        pageNumbers.map((page) => (
          <Button
            onClick={() => onChangePage(page)}
            key={page}
            isActive={currentPage === page}
          >
            {page}
          </Button>
        ))}
      <Button onClick={goForward}>
        <MaterialSymbol icon="navigate_next"></MaterialSymbol>
      </Button>
      <Button onClick={() => onChangePage(totalPages)}>
        <MaterialSymbol icon="last_page"></MaterialSymbol>
      </Button>
    </Box>
  );
};

export default Pagination;
