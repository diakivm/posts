import React, { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { padding } from '@mui/system';


function Copyright() {
   return (
      <Typography variant="body2" color="text.secondary">
         {'Copyright © '}
         <Link color="inherit" href="https://mui.com/">
            Your Website
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

export const Footer: FC = () => {
   return (
      <Box
         component="footer"
         sx={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#272727'
         }}
      >
         <Container maxWidth="sm">
            <Typography variant="body1">
               My sticky footer can be found here.
            </Typography>
            <Copyright />
         </Container>
      </Box>
   )
}
