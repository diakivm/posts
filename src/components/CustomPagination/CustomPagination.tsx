import React, { Dispatch, FC, SetStateAction } from 'react'

import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';


interface IPaginationProps {
   totalPages: number
   currentPage: number
   onSetCurrentPage: Dispatch<SetStateAction<number>>
}

export const CustomPagination: FC<IPaginationProps> = ({ totalPages, currentPage, onSetCurrentPage }) => {

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      onSetCurrentPage(value);
   };

   return (
      <Box
         sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0'
         }}
      >
         <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            variant="outlined"
            color="secondary"
         />
      </Box>
   )
}
