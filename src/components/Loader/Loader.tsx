import React from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
   return (
      <Box
         sx={{
            position: 'absolute',
            top: 'calc(50% - 25px)',
            left: 'calc(50% - 25px)'
         }}
      >
         <CircularProgress size={50} color='secondary' />
      </Box>
   )
}
