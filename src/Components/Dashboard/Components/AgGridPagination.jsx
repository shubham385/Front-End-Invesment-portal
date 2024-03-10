import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export default function AgGridPagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <>
      <Box id="pagination">
        <nav>
          <List>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;

              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                children = (
                  <Button
                    className={`paginate-btn ${selected ? 'selected-btn' : ''}`}
                    type="button"
                    {...item}
                  >
                    {page}
                  </Button>

                );
              } else {
                children = (
                  <Button className='paginate-btn' type="button" {...item}>
                    {type}
                  </Button>
                );
              }

              return <li key={index}>{children}</li>;
            })}
          </List>
        </nav>
      </Box>

    </>

  );
}
